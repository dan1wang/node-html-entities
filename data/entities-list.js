const entitiesMap = require('./entities-map');
const html4EntitiesList = require('./html4-entities.json');

// A list of all HTML 4 entities in proper case (e.g. AElig) as well as
// QUOT, LT, GT, AMP, REG, and COPY
const html4Entities = []; //

// A list of all HTML 4 entities that can be in upper case
// (entities whose lower-case forms are unique)
const HTML4ENTITIES = [];

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
    const named = '"' + el + '"';
    const decoded = '"' + entitiesMap['&' + el + ';'] + '"';
    let len = el.length;
    if (html4EntitiesSorted[len]) {
        html4EntitiesSorted[len].named.push(named);
        html4EntitiesSorted[len].decoded.push(decoded);
    } else {
        html4EntitiesSorted[len] = {named: [named], decoded: [decoded] };
    }
});

const HTML4ENTITIESSorted = {};
HTML4ENTITIES.forEach( (el) => {
    const named = '"' + el + '"';
    const decoded = '"' + entitiesMap['&' + el + ';'] + '"';
    let len = el.length;
    if (HTML4ENTITIESSorted[len]) {
        HTML4ENTITIESSorted[len].named.push(named);
        HTML4ENTITIESSorted[len].decoded.push(decoded);
    } else {
        HTML4ENTITIESSorted[len] = {named: [named], decoded: [decoded] };
    }
});

const html5EntitiesSorted = {};

Object.keys(entitiesMap).forEach( (el) => {
    if (el.charAt(el.length - 1) == ';') {
        const named = '"' + el.substring(1, el.length - 2) + '"';
        const decoded = '"' + entitiesMap[el] + '"';
        let len = el.length;
        if (html5EntitiesSorted[len]) {
            html5EntitiesSorted[len].named.push(named);
            html5EntitiesSorted[len].decoded.push(decoded);
        } else {
            html5EntitiesSorted[len] = {named: [named], decoded: [decoded] };
        }
    }
})


module.exports = {
    HTML4ENTITIESSorted,
    html4EntitiesSorted,
    html5EntitiesSorted
}