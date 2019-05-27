const fs = require('fs');

const { legacyEntitiesSorted, html4EntitiesSorted, html5EntitiesSorted } =
    require('./entities-dict');

function buildDecoder(entities) {
    let decoderSource  =
`function(input, strict) {
    if (!input || !input.length) return '';
    var segments = input.split('&');
    if (segments.length == 1) return input;
    var output = '';
    var i = 0;
    var j = 0;
    for (i=1; i<segments.length; i++) {
        var seg = segments[i];
        if (seg.charAt(1) == '#') {
            var code = seg.charAt(2) === 'x' ?
                parseInt(seg.substr(2).toLowerCase(), 16) :
                parseInt(seg.substr(1));
            if (!(isNaN(code) || code < -32768 || code > 65535)) {
                chr = String.fromCharCode(code);
            }
        } else {
            var candidateLen = seg.indexOf(';');
            var candidateStr = seg.substring(0, candidateLen)
            %%NamedEntityParserCodeStrict%%
            if (strict != true) {
                if (candidateStr == 'AMP') {
                    output += '&' + seg.substring(4); continue;
                } else if (candidateStr == 'GT') {
                    output += '>' + seg.substring(3); continue;
                } else if (candidateStr == 'LT') {
                    output += '<' + seg.substring(3); continue;
                } else if (candidateStr == 'QUOT') {
                    output += '"' + seg.substring(5); continue;
                }` +
               `%%NamedEntityParserCodeQuirk%%
            }
        }
        output += '&' + seg;
    }
    return output;
}`;

    // Generate strict named entity parser
    let namedEntityParserCodeStrict = '';
    Object.keys(entities).sort( (a,b) => parseInt(a) - parseInt(b) ).forEach((entityLen) => {
        entityLen = parseInt(entityLen);
        const named = entities[entityLen].named;
        const decoded = entities[entityLen].decoded;
        if (namedEntityParserCodeStrict != '')
            namedEntityParserCodeStrict += ' else ';
        if (named.length > 2) {
            namedEntityParserCodeStrict +=
           `if (candidateLen == ${entityLen}) {
                j = [${named.join(',')}].indexOf(candidateStr);
                if (j >= 0) {
                    output += [${decoded.join(',')}][j]
                              + seg.substring(${entityLen+1});
                    continue;
                }
            }`;
        } else if (named.length == 2) {
            namedEntityParserCodeStrict +=
           `if (candidateLen == ${entityLen}) {
                if (candidateStr == ${named[0]}) {
                    output += ${decoded[0]} + seg.substring(${entityLen+1});
                    continue;
                } else if (candidateStr == ${named[1]}) {
                    output += ${decoded[1]} + seg.substring(${entityLen+1});
                    continue;
                }
            }`;
        } else {
            namedEntityParserCodeStrict +=
           `if (candidateStr == ${named[0]}) {
                output += ${decoded[0]} + seg.substring(${entityLen+1});
                continue;
            }`;
        }
    })

    // Generate quirky named entity parser
    let namedEntityParserCodeQuirk = '';

    function indent4(codeBlock) {
        return codeBlock.split('\n').map( (line) => '    ' + line ).join('\n');
    }
    Object.keys(legacyEntitiesSorted).sort( (a,b) => parseInt(a) - parseInt(b) ).reverse().forEach((entityLen) => {
        let innerParserCode = '';
        entityLen = parseInt(entityLen);
        const named = legacyEntitiesSorted[entityLen].named;
        const decoded = legacyEntitiesSorted[entityLen].decoded;
        if (named.length > 2) {
            innerParserCode =`
                    j = [${named.join(',')}].indexOf(candidateStr);
                    if (j >= 0) {
                        output += [${decoded.join(',')}][j]
                                  + seg.substring(${entityLen});
                        continue;
                    }`;
        } else if (named.length == 2) {
            innerParserCode =`
                    if (candidateStr == ${named[0]}) {
                        output += ${decoded[0]} + seg.substring(${entityLen});
                        continue;
                    } else if (candidateStr == ${named[1]}) {
                        output += ${decoded[1]} + seg.substring(${entityLen});
                        continue;
                    }`;
        } else {
            innerParserCode =`
                    if (candidateStr == ${named[0]}) {
                        output += ${decoded[0]} + seg.substring(${entityLen});
                        continue;
                    }`;
        }

        namedEntityParserCodeQuirk =
`                if (seg.length >= ${entityLen}) {
                    candidateStr = seg.substring(0, ${entityLen});` +
                    innerParserCode +
                    (
                        namedEntityParserCodeQuirk !== ''
                            ? ('\n' + indent4(namedEntityParserCodeQuirk))
                            : ''
                    ) + `
                }`;
    })

    decoderSource =  decoderSource.replace('%%NamedEntityParserCodeStrict%%', namedEntityParserCodeStrict);
    decoderSource =  decoderSource.replace('%%NamedEntityParserCodeQuirk%%', '\n' + namedEntityParserCodeQuirk);
    return decoderSource;
}

const decoderSource =
    '/* THIS IS GENERATED SOURCE. DO NOT EDIT */\n\n' +
    'var decodeHTML4Entities = ' + buildDecoder(html4EntitiesSorted) + '\n\n' +
    'var decodeHTML5Entities = ' + buildDecoder(html5EntitiesSorted) + '\n\n' +
    'module.exports = {decodeHTML5Entities, decodeHTML4Entities}';

fs.writeFileSync('../lib/named-entities-decoder.js', decoderSource);
