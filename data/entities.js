
const e = require('./entities.json');

function toEscapedStr(charCode) {
    const hex = charCode.toString(16).toUpperCase();
    if (charCode < 0x0F)   return '\\x0' + hex;
    if (charCode < 0xFF)   return '\\x'  + hex;
    if (charCode < 0x0FFF) return '\\u0' + hex;
    if (charCode < 0xFFFF) return '\\u' +  hex;

    // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    const H = Math.floor((charCode - 0x10000) / 0x400) + 0xD800
    const L = (charCode - 0x10000) % 0x400 + 0xDC00
    return toEscapedStr(H) + toEscapedStr(L);
}

//console.log(JSON.stringify(Object.keys(e)));

const entities = {};
Object.keys(e).forEach( (k) => {
    entities[k] =
      e[k].codepoints.reduce( (res, el) => { return res + toEscapedStr(el)}, '')
})

module.exports = entities;
