const fs = require('fs');

const buildDecoder = function(entities, ENTITIES) {

    let decoderSource  =
`function(input, semiRequired, allowAllCap) {
    if (!input || !input.length) return '';
    var segments = input.split('&');
    if (segments.length == 1) return input;

    semiRequired = ((semiRequired !== undefined) && (semiRequired.constructor == Boolean))?semiRequired:false;
    allowAllCap = ((allowAllCap != undefined) && (allowAllCap.constructor == Boolean))?allowAllCap:true;
    var output = '';
    var candidateStr = '';
    var i = 0;
    var j = 0;
    var trailingSemiColon;
    for (i=1; i<segments.length; i++) {
        var segment = segments[i];
        %%NamedEntityParserCode%%
        output += '&' + segment;
    }
    return output;
}`;

    // Generate named entity parser in reverse order of entity length
    // This is becuase, in the case where semicolon is optional,
    // "&piv" should be treated as "&piv;", not "&pi;v"

    let namedEntityParserCode = '';
    let innerParserCode = '';
    Object.keys(entities).sort( (a,b) => parseInt(a) - parseInt(b) ).reverse().forEach((entityLen) => {
        entityLen = parseInt(entityLen);
        const named = entities[entityLen].named;
        const decoded = entities[entityLen].decoded;
        if (named.length > 2) {
            innerParserCode =
               `j = [${named.join(',')}].indexOf(candidateStr);
                if (j >= 0) {
                    output += [${decoded.join(',')}][j]
                              + segment.substring(trailingSemiColon?${entityLen+1}:${entityLen}, segment.length - 1);
                    continue;
                }`;
        } else if (named.length == 2) {
            innerParserCode =
               `if (candidateStr == ${named[0]}) {
                    output += ${decoded[0]}
                              + segment.substring(trailingSemiColon?${entityLen+1}:${entityLen}, segment.length - 1);
                    continue;
                } else if (candidateStr == ${named[1]}) {
                    output += ${decoded[1]}
                              + segment.substring(trailingSemiColon?${entityLen+1}:${entityLen}, segment.length - 1);
                    continue;
                }`;
        } else {
            innerParserCode =
               `if (candidateStr == ${named[0]}) {
                    output += ${decoded[0]}
                              + segment.substring(trailingSemiColon?${entityLen+1}:${entityLen}, segment.length - 1);
                    continue;
                }`;
        }

        if (ENTITIES[entityLen]) {
            const NAMED = ENTITIES[entityLen].named;
            const DECODED = ENTITIES[entityLen].decoded;
            if (NAMED.length > 2) {
                innerParserCode += `
                if (allowAllCap) {
                    j = [${NAMED.join(',')}].indexOf(candidateStr);
                    if (j >= 0) {
                        output += [${DECODED.join(',')}][j]
                                  + segment.substring(trailingSemiColon?${entityLen+1}:${entityLen}, segment.length - 1);
                        continue;
                    }
                }`;
            } else if (NAMED.length == 2) {
                innerParserCode +=`
                if (allowAllCap) {
                    if (candidateStr == ${NAMED[0]}) {
                         output += ${DECODED[0]}
                                   + segment.substring(trailingSemiColon?${entityLen+1}:${entityLen}, segment.length - 1);
                         continue;
                    } else if (candidateStr == ${NAMED[1]}) {
                         output += ${DECODED[0]}
                                   + segment.substring(trailingSemiColon?${entityLen+1}:${entityLen}, segment.length - 1);
                         continue;
                    }
                }`;
            } else {
                innerParserCode += `
                if (allowAllCap && (candidateStr == ${NAMED[0]})) {
                    output += ${DECODED[0]}
                              + segment.substring(trailingSemiColon?${entityLen+1}:${entityLen}, segment.length - 1);
                    continue;
                }`;
            }
        }


        namedEntityParserCode +=
        `if (segment.length >= ${entityLen}) {
            trailingSemiColon = segment.charAt(${entityLen}) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,${entityLen});
                ${innerParserCode}
            }
        }`;
    })

    return decoderSource.replace('%%NamedEntityParserCode%%', namedEntityParserCode);
}

const buildStrictDecoder = function(entities) {

    let decoderSource  =
`function(input) {
    if (!input || !input.length) return '';
    var output = '';
    var candidateStr = '';
    var i = 0;
    var j = 0;
    var len = input.length;
    var char;
    while (i < len) {
        char = input.charAt(i);
        if (char == '&') {` +
            `%%NamedEntityParserCode%%
        }
        i++;
        output += char;
    }
    return output;
}`;

    // Generate named entity parser in reverse order of entity length
    // This is becuase, in the case where semicolon is optional,
    // "&piv" should be treated as "&piv;", not "&pi;v"

    let namedEntityParserCode = '';
    let innerParserCode = '';
    Object.keys(entities).sort( (a,b) => parseInt(a) - parseInt(b) ).forEach((entityLen) => {
        entityLen = parseInt(entityLen);
        const named = entities[entityLen].named;
        const decoded = entities[entityLen].decoded;
        if (named.length > 2) {
            innerParserCode =
                   `j = [${named.join(',')}].indexOf(candidateStr);
                    if (j >= 0) {
                        i += ${entityLen+2};
                        output += [${decoded.join(',')}][j];
                        continue;
                    }`;
        } else if (named.length == 2) {
            innerParserCode =
                   `if (candidateStr == ${named[0]}) {
                        i += ${entityLen+2};
                        output += ${decoded[0]};
                        continue;
                    } else if (candidateStr == ${named[1]}) {
                        i += ${entityLen+2};
                        output += ${decoded[1]};
                        continue;
                    }`;
        } else {
            innerParserCode =
                   `if (candidateStr == ${named[0]}) {
                        i += ${entityLen+2};
                        output += ${decoded[0]};
                        continue;
                    }`;
        }

        namedEntityParserCode +=
            ((!namedEntityParserCode)?'\n            ':' else ') +
            `if (i + ${entityLen+1} < len) {
                if (input.charAt(i+${entityLen+1}) == ';') {
                    candidateStr = input.substring(i+1,i+${entityLen+1});
                    ${innerParserCode}
                }
            }`;
    })

    return decoderSource.replace('%%NamedEntityParserCode%%', namedEntityParserCode);
}

const { HTML4ENTITIESSorted, html4EntitiesSorted, html5EntitiesSorted } =
    require('./entities-list');

const decoderSource =
    '/* THIS IS GENERATED SOURCE. DO NOT EDIT */\n\n' +
    'var decodeHTML4Entities = ' +
    buildDecoder(html4EntitiesSorted, HTML4ENTITIESSorted) + '\n\n' +
    'var decodeHTML5Entities = ' +
    buildDecoder(html5EntitiesSorted, HTML4ENTITIESSorted) + '\n\n' +
    'var decodeHTML4EntitiesStrict = ' +
    buildStrictDecoder(html4EntitiesSorted, HTML4ENTITIESSorted) + '\n\n' +
    'var decodeHTML5EntitiesStrict = ' +
    buildStrictDecoder(html5EntitiesSorted, HTML4ENTITIESSorted) + '\n\n' +
    'module.exports = {decodeHTML5Entities, decodeHTML4Entities, decodeHTML5EntitiesStrict, decodeHTML4EntitiesStrict}';

fs.writeFileSync('../lib/named-entities-decoder.js', decoderSource);