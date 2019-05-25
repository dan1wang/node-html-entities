const fs = require('fs');

const buildDecoder = function(entities, ENTITIES) {

    let decoderSource  =
`function(input, semiRequired, allowAllCap) {
    if (!input || !input.length) return '';
    semiRequired = ((semiRequired !== undefined) && (semiRequired.constructor == Boolean))?semiRequired:false;
    allowAllCap = ((allowAllCap != undefined) && (allowAllCap.constructor == Boolean))?allowAllCap:true;
    var output = '';
    var subStr = '';
    var i = 0;
    var j = 0;
    var len = input.length;
    var trailingSemiColon;
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
    Object.keys(entities).sort( (a,b) => parseInt(a) - parseInt(b) ).reverse().forEach((entityLen) => {
        entityLen = parseInt(entityLen);
        const named = entities[entityLen].named;
        const decoded = entities[entityLen].decoded;
        if (named.length > 2) {
            innerParserCode =
                   `j = [${named.join(',')}].indexOf(subStr);
                    if (j >= 0) {
                        i += trailingSemiColon?${entityLen+2}:${entityLen+1};
                        output += [${decoded.join(',')}][j];
                        continue;
                    }`;
        } else if (named.length == 2) {
            innerParserCode =
                   `if (subStr == ${named[0]}) {
                        i += trailingSemiColon?${entityLen+2}:${entityLen+1};
                        output += ${decoded[0]};
                        continue;
                    } else if (subStr == ${named[1]}) {
                        i += trailingSemiColon?${entityLen+2}:${entityLen+1};
                        output += ${decoded[1]};
                        continue;
                    }`;
        } else {
            innerParserCode =
                   `if (subStr == ${named[0]}) {
                        i += trailingSemiColon?${entityLen+2}:${entityLen+1};
                        output += ${decoded[0]};
                        continue;
                    }`;
        }

        if (ENTITIES[entityLen]) {
            const NAMED = ENTITIES[entityLen].named;
            const DECODED = ENTITIES[entityLen].decoded;
            if (NAMED.length > 2) {
                innerParserCode += `
                    if (allowAllCap) {
                        j = [${NAMED.join(',')}].indexOf(subStr);
                        if (j >= 0) {
                            i += trailingSemiColon?${entityLen+2}:${entityLen+1};
                            output += [${DECODED.join(',')}][j];
                            continue;
                        }
                    }`;
            } else if (NAMED.length == 2) {
                innerParserCode +=`
                    if (allowAllCap) {
                        if (subStr == ${NAMED[0]}) {
                            i += trailingSemiColon?${entityLen+2}:${entityLen+1};
                            output += ${decoded[0]};
                            continue;
                        } else if (subStr == ${NAMED[1]}) {
                            i += trailingSemiColon?${entityLen+2}:${entityLen+1};
                            output += ${DECODED[1]};
                            continue;
                        }
                    }`;
            } else {
                innerParserCode += `
                    if (allowAllCap && (subStr == ${NAMED[0]})) {
                        i += trailingSemiColon?${entityLen+2}:${entityLen+1};
                        output += ${DECODED[0]};
                        continue;
                    }`;
            }
        }


        namedEntityParserCode +=`
            if (i + ${entityLen} < len) {
                trailingSemiColon = input.charAt(i+${entityLen+1}) == ';';
                if (!semiRequired || trailingSemiColon) {
                    subStr = input.substring(i+1,i+${entityLen+1});
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
    'module.exports = {decodeHTML5Entities, decodeHTML4Entities}';

fs.writeFileSync('../lib/named-entities-decoder.js', decoderSource);