const entities = require('./entities');
const html4Entities = require('./html4-entities.json');

/*
  Find HTML 4 entities that can be in upper case (entities whose
  lower-case forms are unique)
*/

const html4EntitiesRC = []; // HTML 4 entities in regular case (e.g. AElig)
const html4EntitiesUC = []; // HTML 4 entities that can be in upper case (e.g. quot)

const A =
html4Entities
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
        html4EntitiesRC.push(encoded);
        //console.log(array[idx+1].lc);
        if (((idx < array.length-1) && (array[idx+1].lc === el.lc)) ||
            ((idx > 0)              && (array[idx-1].lc === el.lc))) {
            // case sensitive
        } else {
            html4EntitiesUC.push(encoded);
        }
    });

// Html4 entities sorted by length
const html4EntitiesRCSorted = {};
html4EntitiesRC.forEach( (el) => {
    let len = el.length;
    if (html4EntitiesRCSorted[len]) {
        html4EntitiesRCSorted[len].push(el);
    } else {
        html4EntitiesRCSorted[len] = [el];
    }
});
const html4EntitiesUCSorted = {};
html4EntitiesUC.forEach( (el) => {
    let len = el.length;
    if (html4EntitiesUCSorted[len]) {
        html4EntitiesUCSorted[len].push(el);
    } else {
        html4EntitiesUCSorted[len] = [el];
    }
});

// *************************************************************
// Build decoder
// *************************************************************

let html4EntitiesDecorder =
`function(input, opts) {
    if (!input || !input.length) return '';
    var semiRequired = false;
    var caseSensitive = false;
    if (opts) {
        if (opts.hasOwnProperty('requireSemiColon'))
            semiRequired = opts.requireSemiColon;
        if (opts.hasOwnProperty('caseSensitive'))
            caseSensitive = opts.caseSensitive;
    }
    var output = '';
    var subStr = '';
    var i = 0;
    var j = 0;
    var len = input.length;
    var trailingSemiColon;
    while (i < len) {
      if (inputs.charAt(i) == '&') {
          %%NamedEntityParserCode%%
      }
    }
}`;

//console.log(html4EntitiesRCSorted);

let namedEntityParserCode = '';
Object.keys(html4EntitiesRCSorted).sort().forEach((len) => {
    len = parseInt(len);
    const keys = [];
    const values = [];
    html4EntitiesRCSorted[len].forEach((el) => {
        keys.push('"' + el + '"');
        values.push('"' + entities['&' + el + ';'] + '"');
    });
    let matchCode = '';
    if (keys.length > 2) {
        matchCode =
             `j = [${keys.join(',')}].indexOf(input.substring(i+1,i+${len+1}));
              if (j >= 0) {
                  i += trailingSemiColon?${len+2}:${len+1};
                  output += [${values.join(',')}][j];
                  break;
              }`;
    } else if (keys.length == 2) {
        matchCode =
             `subStr = input.substring(i+1,i+${len+1});
              if (subStr == ${keys[0]}) {
                  i += trailingSemiColon?${len+2}:${len+1};
                  output += ${values[0]};
              } else if (subStr == ${keys[1]}) {
                  i += trailingSemiColon?${len+2}:${len+1};
                  output += ${values[1]};
              }`;
    } else {
        matchCode =
             `subStr = input.substring(i+1,i+${len+1});
              if (subStr == ${keys[0]}) {
                  i += trailingSemiColon?${len+2}:${len+1};
                  output += ${values[0]};
              }`;
    }

    if (namedEntityParserCode === '') {
        namedEntityParserCode =
          `if (i + ${len+1} >= len) { output += '&'; break; }`
    } else {
        namedEntityParserCode +=`
          if ((trailingSemiColon) || (i + ${len+1} >= len)) { output += '&'; break; }`;
    }
    namedEntityParserCode +=`
          trailingSemiColon = input.charAt(i+${len+1}) == ';';
          if (!semiRequired || trailingSemiColon) {
              ${matchCode}
          }`;
})

html4EntitiesDecorder= html4EntitiesDecorder.replace('%%NamedEntityParserCode%%', namedEntityParserCode);
console.log(html4EntitiesDecorder);

/*
 HTML 4 strict
   - requires ';'
   - case sensitive

 HTML 5 strict
   - requires ';'
   - case sensitive
*/
