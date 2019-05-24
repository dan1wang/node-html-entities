const fs = require('fs');

const entities = require('./entities');
const html4EntitiesList = require('./html4-entities.json');

// *************************************************************
// Find HTML 4 entities that can be in upper case (entities whose
// lower-case forms are unique)
// *************************************************************

const html4Entities = []; // HTML 4 entities in regular case (e.g. AElig)
const HTML4ENTITIES = []; // HTML 4 entities that can be in upper case (e.g. quot)

html4EntitiesList
    .map( (el) => {
        return {encoded: el, lc: el.toLowerCase()}
    })
    .sort( (a, b) => {
        if (a.lc < b.lc) return -1;
        if (a.lc > b.lc) return 1;
        return 0;
    })
    .forEach( (el, idx, array) => {
        const encoded = el.encoded
        html4Entities.push(encoded);
        //console.log(array[idx+1].lc);
        if (((idx < array.length-1) && (array[idx+1].lc === el.lc)) ||
            ((idx > 0)              && (array[idx-1].lc === el.lc))) {
            // case sensitive
        } else {
            HTML4ENTITIES.push(encoded);
        }
    });

// Html4 entities sorted by length
const html4EntitiesSorted = {};
html4Entities.forEach( (el) => {
    let len = el.length;
    if (html4EntitiesSorted[len]) {
        html4EntitiesSorted[len].push(el);
    } else {
        html4EntitiesSorted[len] = [el];
    }
});
const HTML4ENTITIESSorted = {};
HTML4ENTITIES.forEach( (el) => {
    let len = el.length;
    if (HTML4ENTITIESSorted[len]) {
        HTML4ENTITIESSorted[len].push(el);
    } else {
        HTML4ENTITIESSorted[len] = [el];
    }
});

// *************************************************************
// Build decoder
// *************************************************************

let html4EntitiesDecorder =
`module.exports = function(input, semiRequired, allowAllCap) {
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
Object.keys(html4EntitiesSorted).sort().reverse().forEach((entityLen) => {
    entityLen = parseInt(entityLen);

    const named = [];
    const decoded = [];
    html4EntitiesSorted[entityLen].forEach((el) => {
        named.push('"' + el + '"');
        decoded.push('"' + entities['&' + el + ';'] + '"');
    });
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

    if (HTML4ENTITIESSorted[entityLen]) {
        const NAMED = [];
        const DECODED = [];
        HTML4ENTITIESSorted[entityLen].forEach((el) => {
            NAMED.push('"' + el.toUpperCase() + '"');
            DECODED.push('"' + entities['&' + el + ';'] + '"');
        });
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

html4EntitiesDecorder= html4EntitiesDecorder.replace('%%NamedEntityParserCode%%', namedEntityParserCode);

fs.writeFileSync('decoder.js', html4EntitiesDecorder);