/* THIS IS GENERATED SOURCE. DO NOT EDIT */

var decodeHTML4Entities = function(input, semiRequired, allowAllCap) {
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
        if (segment.length >= 8) {
            trailingSemiColon = segment.charAt(8) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,8);
                if (candidateStr == "thetasym") {
                    output += "\u03D1"
                              + segment.substring(trailingSemiColon?9:8, segment.length - 1);
                    continue;
                }
                if (allowAllCap && (candidateStr == "thetasym")) {
                    output += "\u03D1"
                              + segment.substring(trailingSemiColon?9:8, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 7) {
            trailingSemiColon = segment.charAt(7) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,7);
                j = ["alefsym","Epsilon","epsilon","omicron","Omicron","upsilon","Upsilon"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u2135","\u0395","\u03B5","\u03BF","\u039F","\u03C5","\u03A5"][j]
                              + segment.substring(trailingSemiColon?8:7, segment.length - 1);
                    continue;
                }
                if (allowAllCap && (candidateStr == "alefsym")) {
                    output += "\u2135"
                              + segment.substring(trailingSemiColon?8:7, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 6) {
            trailingSemiColon = segment.charAt(6) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,6);
                j = ["Aacute","aacute","Agrave","agrave","Atilde","atilde","brvbar","Ccedil","ccedil","curren","Dagger","dagger","divide","Eacute","eacute","egrave","Egrave","forall","frac12","frac14","frac34","hearts","hellip","iacute","Iacute","igrave","Igrave","iquest","Lambda","lambda","lfloor","lowast","lsaquo","middot","ntilde","Ntilde","oacute","Oacute","ograve","Ograve","oslash","Oslash","Otilde","otilde","otimes","permil","plusmn","rfloor","rsaquo","scaron","Scaron","sigmaf","spades","there4","thinsp","Uacute","uacute","ugrave","Ugrave","weierp","Yacute","yacute"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\xC1","\xE1","\xC0","\xE0","\xC3","\xE3","\xA6","\xC7","\xE7","\xA4","\u2021","\u2020","\xF7","\xC9","\xE9","\xE8","\xC8","\u2200","\xBD","\xBC","\xBE","\u2665","\u2026","\xED","\xCD","\xEC","\xCC","\xBF","\u039B","\u03BB","\u230A","\u2217","\u2039","\xB7","\xF1","\xD1","\xF3","\xD3","\xF2","\xD2","\xF8","\xD8","\xD5","\xF5","\u2297","\u2030","\xB1","\u230B","\u203A","\u0161","\u0160","\u03C2","\u2660","\u2234","\u2009","\xDA","\xFA","\xF9","\xD9","\u2118","\xDD","\xFD"][j]
                              + segment.substring(trailingSemiColon?7:6, segment.length - 1);
                    continue;
                }
                if (allowAllCap) {
                    j = ["brvbar","curren","divide","forall","frac12","frac14","frac34","hearts","hellip","iquest","lfloor","lowast","lsaquo","middot","otimes","permil","plusmn","rfloor","rsaquo","sigmaf","spades","there4","thinsp","weierp"].indexOf(candidateStr);
                    if (j >= 0) {
                        output += ["\xA6","\xA4","\xF7","\u2200","\xBD","\xBC","\xBE","\u2665","\u2026","\xBF","\u230A","\u2217","\u2039","\xB7","\u2297","\u2030","\xB1","\u230B","\u203A","\u03C2","\u2660","\u2234","\u2009","\u2118"][j]
                                  + segment.substring(trailingSemiColon?7:6, segment.length - 1);
                        continue;
                    }
                }
            }
        }if (segment.length >= 5) {
            trailingSemiColon = segment.charAt(5) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,5);
                j = ["Acirc","acirc","acute","aelig","AElig","Alpha","alpha","aring","Aring","asymp","bdquo","cedil","clubs","crarr","delta","Delta","diams","ecirc","Ecirc","empty","equiv","exist","frasl","gamma","Gamma","icirc","Icirc","iexcl","image","infin","kappa","Kappa","laquo","lceil","ldquo","lsquo","mdash","micro","minus","nabla","ndash","notin","ocirc","Ocirc","oelig","OElig","oline","Omega","omega","oplus","pound","prime","Prime","radic","raquo","rceil","rdquo","rsquo","sbquo","sigma","Sigma","szlig","Theta","theta","THORN","thorn","tilde","times","trade","ucirc","Ucirc","upsih"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\xC2","\xE2","\xB4","\xE6","\xC6","\u0391","\u03B1","\xE5","\xC5","\u2248","\u201E","\xB8","\u2663","\u21B5","\u03B4","\u0394","\u2666","\xEA","\xCA","\u2205","\u2261","\u2203","\u2044","\u03B3","\u0393","\xEE","\xCE","\xA1","\u2111","\u221E","\u03BA","\u039A","\xAB","\u2308","\u201C","\u2018","\u2014","\xB5","\u2212","\u2207","\u2013","\u2209","\xF4","\xD4","\u0153","\u0152","\u203E","\u03A9","\u03C9","\u2295","\xA3","\u2032","\u2033","\u221A","\xBB","\u2309","\u201D","\u2019","\u201A","\u03C3","\u03A3","\xDF","\u0398","\u03B8","\xDE","\xFE","\u02DC","\xD7","\u2122","\xFB","\xDB","\u03D2"][j]
                              + segment.substring(trailingSemiColon?6:5, segment.length - 1);
                    continue;
                }
                if (allowAllCap) {
                    j = ["acute","asymp","bdquo","cedil","clubs","crarr","diams","empty","equiv","exist","frasl","iexcl","image","infin","laquo","lceil","ldquo","lsquo","mdash","micro","minus","nabla","ndash","notin","oline","oplus","pound","radic","raquo","rceil","rdquo","rsquo","sbquo","szlig","tilde","times","trade","upsih"].indexOf(candidateStr);
                    if (j >= 0) {
                        output += ["\xB4","\u2248","\u201E","\xB8","\u2663","\u21B5","\u2666","\u2205","\u2261","\u2203","\u2044","\xA1","\u2111","\u221E","\xAB","\u2308","\u201C","\u2018","\u2014","\xB5","\u2212","\u2207","\u2013","\u2209","\u203E","\u2295","\xA3","\u221A","\xBB","\u2309","\u201D","\u2019","\u201A","\xDF","\u02DC","\xD7","\u2122","\u03D2"][j]
                                  + segment.substring(trailingSemiColon?6:5, segment.length - 1);
                        continue;
                    }
                }
            }
        }if (segment.length >= 4) {
            trailingSemiColon = segment.charAt(4) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,4);
                j = ["apos","auml","Auml","beta","Beta","bull","cent","circ","cong","copy","COPY","dArr","darr","emsp","ensp","Euml","euml","euro","fnof","hArr","harr","iota","Iota","isin","Iuml","iuml","lang","larr","lArr","macr","nbsp","nsub","ordf","ordm","ouml","Ouml","para","part","perp","prod","prop","quot","QUOT","rang","rArr","rarr","real","sdot","sect","sube","sup1","sup2","sup3","supe","uArr","uarr","uuml","Uuml","yuml","Yuml","zeta","Zeta","zwnj"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["'","\xE4","\xC4","\u03B2","\u0392","\u2022","\xA2","\u02C6","\u2245","\xA9","\xA9","\u21D3","\u2193","\u2003","\u2002","\xCB","\xEB","\u20AC","\u0192","\u21D4","\u2194","\u03B9","\u0399","\u2208","\xCF","\xEF","\u27E8","\u2190","\u21D0","\xAF","\xA0","\u2284","\xAA","\xBA","\xF6","\xD6","\xB6","\u2202","\u22A5","\u220F","\u221D","\"","\"","\u27E9","\u21D2","\u2192","\u211C","\u22C5","\xA7","\u2286","\xB9","\xB2","\xB3","\u2287","\u21D1","\u2191","\xFC","\xDC","\xFF","\u0178","\u03B6","\u0396","\u200C"][j]
                              + segment.substring(trailingSemiColon?5:4, segment.length - 1);
                    continue;
                }
                if (allowAllCap) {
                    j = ["apos","bull","cent","circ","cong","emsp","ensp","euro","fnof","isin","lang","macr","nbsp","nsub","ordf","ordm","para","part","perp","prod","prop","rang","real","sdot","sect","sube","sup1","sup2","sup3","supe","zwnj"].indexOf(candidateStr);
                    if (j >= 0) {
                        output += ["'","\u2022","\xA2","\u02C6","\u2245","\u2003","\u2002","\u20AC","\u0192","\u2208","\u27E8","\xAF","\xA0","\u2284","\xAA","\xBA","\xB6","\u2202","\u22A5","\u220F","\u221D","\u27E9","\u211C","\u22C5","\xA7","\u2286","\xB9","\xB2","\xB3","\u2287","\u200C"][j]
                                  + segment.substring(trailingSemiColon?5:4, segment.length - 1);
                        continue;
                    }
                }
            }
        }if (segment.length >= 3) {
            trailingSemiColon = segment.charAt(3) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,3);
                j = ["amp","AMP","and","ang","cap","chi","Chi","cup","deg","eta","Eta","eth","ETH","int","loz","lrm","not","Phi","phi","piv","psi","Psi","reg","REG","rho","Rho","rlm","shy","sim","sub","sum","sup","Tau","tau","uml","yen","zwj"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["&","&","\u2227","\u2220","\u2229","\u03C7","\u03A7","\u222A","\xB0","\u03B7","\u0397","\xF0","\xD0","\u222B","\u25CA","\u200E","\xAC","\u03A6","\u03C6","\u03D6","\u03C8","\u03A8","\xAE","\xAE","\u03C1","\u03A1","\u200F","\xAD","\u223C","\u2282","\u2211","\u2283","\u03A4","\u03C4","\xA8","\xA5","\u200D"][j]
                              + segment.substring(trailingSemiColon?4:3, segment.length - 1);
                    continue;
                }
                if (allowAllCap) {
                    j = ["and","ang","cap","cup","deg","int","loz","lrm","not","piv","rlm","shy","sim","sub","sum","sup","uml","yen","zwj"].indexOf(candidateStr);
                    if (j >= 0) {
                        output += ["\u2227","\u2220","\u2229","\u222A","\xB0","\u222B","\u25CA","\u200E","\xAC","\u03D6","\u200F","\xAD","\u223C","\u2282","\u2211","\u2283","\xA8","\xA5","\u200D"][j]
                                  + segment.substring(trailingSemiColon?4:3, segment.length - 1);
                        continue;
                    }
                }
            }
        }if (segment.length >= 2) {
            trailingSemiColon = segment.charAt(2) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,2);
                j = ["ge","GT","gt","le","LT","lt","mu","Mu","ne","ni","nu","Nu","or","pi","Pi","Xi","xi"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u2265",">",">","\u2264","<","<","\u03BC","\u039C","\u2260","\u220B","\u03BD","\u039D","\u2228","\u03C0","\u03A0","\u039E","\u03BE"][j]
                              + segment.substring(trailingSemiColon?3:2, segment.length - 1);
                    continue;
                }
                if (allowAllCap) {
                    j = ["ge","le","ne","ni","or"].indexOf(candidateStr);
                    if (j >= 0) {
                        output += ["\u2265","\u2264","\u2260","\u220B","\u2228"][j]
                                  + segment.substring(trailingSemiColon?3:2, segment.length - 1);
                        continue;
                    }
                }
            }
        }
        output += '&' + segment;
    }
    return output;
}

var decodeHTML5Entities = function(input, semiRequired, allowAllCap) {
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
        if (segment.length >= 33) {
            trailingSemiColon = segment.charAt(33) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,33);
                if (candidateStr == "CounterClockwiseContourIntegra") {
                    output += "\u2233"
                              + segment.substring(trailingSemiColon?34:33, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 26) {
            trailingSemiColon = segment.charAt(26) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,26);
                if (candidateStr == "ClockwiseContourIntegra") {
                    output += "\u2232"
                              + segment.substring(trailingSemiColon?27:26, segment.length - 1);
                    continue;
                } else if (candidateStr == "DoubleLongLeftRightArro") {
                    output += "\u27FA"
                              + segment.substring(trailingSemiColon?27:26, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 25) {
            trailingSemiColon = segment.charAt(25) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,25);
                if (candidateStr == "NotNestedGreaterGreate") {
                    output += "\u2AA2\u0338"
                              + segment.substring(trailingSemiColon?26:25, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 24) {
            trailingSemiColon = segment.charAt(24) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,24);
                if (candidateStr == "DiacriticalDoubleAcut") {
                    output += "\u02DD"
                              + segment.substring(trailingSemiColon?25:24, segment.length - 1);
                    continue;
                } else if (candidateStr == "NotSquareSupersetEqua") {
                    output += "\u22E3"
                              + segment.substring(trailingSemiColon?25:24, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 23) {
            trailingSemiColon = segment.charAt(23) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,23);
                j = ["CloseCurlyDoubleQuot","DoubleContourIntegra","FilledVerySmallSquar","NegativeVeryThinSpac","NotPrecedesSlantEqua","NotRightTriangleEqua","NotSucceedsSlantEqua"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u201D","\u222F","\u25AA","\u200B","\u22E0","\u22ED","\u22E1"][j]
                              + segment.substring(trailingSemiColon?24:23, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 22) {
            trailingSemiColon = segment.charAt(22) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,22);
                j = ["CapitalDifferential","DoubleLeftRightArro","DoubleLongRightArro","EmptyVerySmallSquar","NestedGreaterGreate","NotDoubleVerticalBa","NotGreaterSlantEqua","NotLeftTriangleEqua","NotSquareSubsetEqua","OpenCurlyDoubleQuot","ReverseUpEquilibriu"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u2145","\u21D4","\u27F9","\u25AB","\u226B","\u2226","\u2A7E\u0338","\u22EC","\u22E2","\u201C","\u296F"][j]
                              + segment.substring(trailingSemiColon?23:22, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 21) {
            trailingSemiColon = segment.charAt(21) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,21);
                j = ["DoubleLongLeftArro","DownLeftRightVecto","LeftArrowRightArro","leftrightsquigarro","NegativeMediumSpac","NotGreaterFullEqua","NotRightTriangleBa","RightArrowLeftArro","SquareSupersetEqua"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u27F8","\u2950","\u21C6","\u21AD","\u200B","\u2267\u0338","\u29D0\u0338","\u21C4","\u2292"][j]
                              + segment.substring(trailingSemiColon?22:21, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 20) {
            trailingSemiColon = segment.charAt(20) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,20);
                j = ["blacktrianglerigh","DownRightTeeVecto","DownRightVectorBa","longleftrightarro","LongLeftRightArro","Longleftrightarro","NegativeThickSpac","NotLeftTriangleBa","PrecedesSlantEqua","ReverseEquilibriu","RightDoubleBracke","RightDownTeeVecto","RightDownVectorBa","RightTriangleEqua","SquareIntersectio","SucceedsSlantEqua"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u25B8","\u295F","\u2957","\u27F7","\u27F7","\u27FA","\u200B","\u29CF\u0338","\u227C","\u21CB","\u27E7","\u295D","\u2955","\u22B5","\u2293","\u227D"][j]
                              + segment.substring(trailingSemiColon?21:20, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 19) {
            trailingSemiColon = segment.charAt(19) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,19);
                j = ["blacktriangledow","blacktrianglelef","DoubleUpDownArro","DoubleVerticalBa","DownLeftTeeVecto","DownLeftVectorBa","FilledSmallSquar","GreaterSlantEqua","LeftDoubleBracke","LeftDownTeeVecto","LeftDownVectorBa","leftrightharpoon","LeftTriangleEqua","NegativeThinSpac","NotGreaterGreate","NotLessSlantEqua","NotNestedLessLes","NotReverseElemen","NotSquareSuperse","NotTildeFullEqua","RightAngleBracke","rightleftharpoon","RightUpDownVecto","SquareSubsetEqua","twoheadrightarro","VerticalSeparato"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u25BE","\u25C2","\u21D5","\u2225","\u295E","\u2956","\u25FC","\u2A7E","\u27E6","\u2961","\u2959","\u21CB","\u22B4","\u200B","\u226B\u0338","\u2A7D\u0338","\u2AA1\u0338","\u220C","\u2290\u0338","\u2247","\u27E9","\u21CC","\u294F","\u2291","\u21A0","\u2758"][j]
                              + segment.substring(trailingSemiColon?20:19, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 18) {
            trailingSemiColon = segment.charAt(18) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,18);
                j = ["circlearrowrigh","DiacriticalAcut","DiacriticalGrav","DiacriticalTild","DoubleRightArro","DownArrowUpArro","downharpoonrigh","EmptySmallSquar","GreaterEqualLes","GreaterFullEqua","LeftAngleBracke","LeftUpDownVecto","LessEqualGreate","NonBreakingSpac","NotPrecedesEqua","NotRightTriangl","NotSucceedsEqua","NotSucceedsTild","NotSupersetEqua","ntrianglerighte","rightharpoondow","rightrightarrow","RightTriangleBa","RightUpTeeVecto","RightUpVectorBa","twoheadleftarro","UnderParenthesi","UpArrowDownArro","vartrianglerigh"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u21BB","\xB4","`","\u02DC","\u21D2","\u21F5","\u21C2","\u25FB","\u22DB","\u2267","\u27E8","\u2951","\u22DA","\xA0","\u2AAF\u0338","\u22EB","\u2AB0\u0338","\u227F\u0338","\u2289","\u22ED","\u21C1","\u21C9","\u29D0","\u295C","\u2954","\u219E","\u23DD","\u21C5","\u22B3"][j]
                              + segment.substring(trailingSemiColon?19:18, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 17) {
            trailingSemiColon = segment.charAt(17) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,17);
                j = ["bigtriangledow","circlearrowlef","CloseCurlyQuot","ContourIntegra","curvearrowrigh","DoubleDownArro","DoubleLeftArro","downharpoonlef","DownRightVecto","leftharpoondow","leftrightarrow","LeftRightVecto","LeftTriangleBa","LeftUpTeeVecto","LeftUpVectorBa","LowerRightArro","nleftrightarro","nLeftrightarro","NotGreaterEqua","NotGreaterTild","NotHumpDownHum","NotLeftTriangl","NotSquareSubse","ntrianglelefte","OverParenthesi","RightDownVecto","rightleftarrow","rightsquigarro","rightthreetime","ShortRightArro","straightepsilo","trianglerighte","UpperRightArro","vartrianglelef"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u25BD","\u21BA","\u2019","\u222E","\u21B7","\u21D3","\u21D0","\u21C3","\u21C1","\u21BD","\u21C6","\u294E","\u29CF","\u2960","\u2958","\u2198","\u21AE","\u21CE","\u2271","\u2275","\u224E\u0338","\u22EA","\u228F\u0338","\u22EC","\u23DC","\u21C2","\u21C4","\u219D","\u22CC","\u2192","\u03F5","\u22B5","\u2197","\u22B2"][j]
                              + segment.substring(trailingSemiColon?18:17, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 16) {
            trailingSemiColon = segment.charAt(16) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,16);
                j = ["curvearrowlef","DiacriticalDo","doublebarwedg","DoubleRightTe","downdownarrow","DownLeftVecto","GreaterGreate","hookrightarro","HorizontalLin","InvisibleComm","InvisibleTime","LeftDownVecto","leftleftarrow","leftrightarro","LeftRightArro","Leftrightarro","leftthreetime","LessSlantEqua","longrightarro","LongRightArro","Longrightarro","looparrowrigh","LowerLeftArro","NestedLessLes","NotGreaterLes","NotLessGreate","NotSubsetEqua","NotVerticalBa","nshortparalle","ntrianglerigh","OpenCurlyQuot","ReverseElemen","rightarrowtai","rightharpoonu","RightTeeVecto","RightVectorBa","ShortDownArro","ShortLeftArro","SquareSuperse","TildeFullEqua","trianglelefte","upharpoonrigh","UpperLeftArro","ZeroWidthSpac"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u21B6","\u02D9","\u2306","\u22A8","\u21CA","\u21BD","\u2AA2","\u21AA","\u2500","\u2063","\u2062","\u21C3","\u21C7","\u2194","\u2194","\u21D4","\u22CB","\u2A7D","\u27F6","\u27F6","\u27F9","\u21AC","\u2199","\u226A","\u2279","\u2278","\u2288","\u2224","\u2226","\u22EB","\u2018","\u220B","\u21A3","\u21C0","\u295B","\u2953","\u2193","\u2190","\u2290","\u2245","\u22B4","\u21BE","\u2196","\u200B"][j]
                              + segment.substring(trailingSemiColon?17:16, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 15) {
            trailingSemiColon = segment.charAt(15) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,15);
                j = ["ApplyFunctio","bigtriangleu","blacktriangl","Differential","divideontime","DoubleLeftTe","DoubleUpArro","fallingdotse","hookleftarro","leftarrowtai","leftharpoonu","LeftTeeVecto","LeftVectorBa","LessFullEqua","longleftarro","LongLeftArro","Longleftarro","looparrowlef","measuredangl","NotEqualTild","NotTildeEqua","NotTildeTild","ntrianglelef","Poincareplan","PrecedesEqua","PrecedesTild","RightArrowBa","RightTeeArro","RightTriangl","RightUpVecto","shortparalle","smallsetminu","SucceedsEqua","SucceedsTild","SupersetEqua","trianglerigh","UpEquilibriu","upharpoonlef","varsubsetneq","varsupsetneq","VerticalTild","VeryThinSpac"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u2061","\u25B3","\u25B4","\u2146","\u22C7","\u2AE4","\u21D1","\u2252","\u21A9","\u21A2","\u21BC","\u295A","\u2952","\u2266","\u27F5","\u27F5","\u27F8","\u21AB","\u2221","\u2242\u0338","\u2244","\u2249","\u22EA","\u210C","\u2AAF","\u227E","\u21E5","\u21A6","\u22B3","\u21BE","\u2225","\u2216","\u2AB0","\u227F","\u2287","\u25B9","\u296E","\u21BF","\u2ACB\uFE00","\u2ACC\uFE00","\u2240","\u200A"][j]
                              + segment.substring(trailingSemiColon?16:15, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 14) {
            trailingSemiColon = segment.charAt(14) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,14);
                j = ["blacklozeng","DownArrowBa","DownTeeArro","exponential","Exponential","GreaterEqua","GreaterTild","HilbertSpac","HumpDownHum","Intersectio","LeftArrowBa","LeftTeeArro","LeftTriangl","LeftUpVecto","NotCongruen","NotHumpEqua","NotLessEqua","NotLessTild","Proportiona","RightCeilin","risingdotse","RoundImplie","ShortUpArro","SquareSubse","triangledow","trianglelef","UnderBracke","varsubsetne","varsupsetne","VerticalLin"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u29EB","\u2913","\u21A7","\u2147","\u2147","\u2265","\u2273","\u210B","\u224E","\u22C2","\u21E4","\u21A4","\u22B2","\u21BF","\u2262","\u224F\u0338","\u2270","\u2274","\u221D","\u2309","\u2253","\u2970","\u2191","\u228F","\u25BF","\u25C3","\u23B5","\u228A\uFE00","\u228B\uFE00","|"][j]
                              + segment.substring(trailingSemiColon?15:14, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 13) {
            trailingSemiColon = segment.charAt(13) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,13);
                j = ["backepsilo","blacksquar","circledcir","circleddas","CircleMinu","CircleTime","curlyeqpre","curlyeqsuc","diamondsui","eqslantles","Equilibriu","expectatio","GreaterLes","LeftCeilin","LessGreate","MediumSpac","NotLessLes","NotPrecede","NotSucceed","NotSuperse","nrightarro","nRightarro","OverBracke","preccurlye","precnappro","quaternion","RightVecto","Rrightarro","RuleDelaye","SmallCircl","SquareUnio","straightph","SubsetEqua","succcurlye","succnappro","thickappro","updownarro","UpDownArro","Updownarro","VerticalBa"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u03F6","\u25AA","\u229A","\u229D","\u2296","\u2297","\u22DE","\u22DF","\u2666","\u2A95","\u21CC","\u2130","\u2277","\u2308","\u2276","\u205F","\u226A\u0338","\u2280","\u2281","\u2283\u20D2","\u219B","\u21CF","\u23B4","\u227C","\u2AB9","\u210D","\u21C0","\u21DB","\u29F4","\u2218","\u2294","\u03D5","\u2286","\u227D","\u2ABA","\u2248","\u2195","\u2195","\u21D5","\u2223"][j]
                              + segment.substring(trailingSemiColon?14:13, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 12) {
            trailingSemiColon = segment.charAt(12) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,12);
                j = ["Bernoulli","circledas","CirclePlu","complemen","curlywedg","eqslantgt","EqualTild","Fouriertr","gtreqqles","Imaginary","Laplacetr","LeftVecto","lessappro","lesseqqgt","Lleftarro","lmoustach","longmapst","mapstodow","mapstolef","nleftarro","nLeftarro","NotElemen","NotGreate","nsubseteq","nsupseteq","precappro","Proportio","rightarro","RightArro","Rightarro","RightFloo","rmoustach","sqsubsete","sqsupsete","subsetneq","succappro","supsetneq","ThickSpac","TildeEqua","TildeTild","UnderBrac","UpArrowBa","UpTeeArro","upuparrow","varepsilo","varnothin"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u212C","\u229B","\u2295","\u2201","\u22CF","\u2A96","\u2242","\u2131","\u2A8C","\u2148","\u2112","\u21BC","\u2A85","\u2A8B","\u21DA","\u23B0","\u27FC","\u21A7","\u21A4","\u219A","\u21CD","\u2209","\u226F","\u2AC5\u0338","\u2AC6\u0338","\u2AB7","\u2237","\u2192","\u2192","\u21D2","\u230B","\u23B1","\u2291","\u2292","\u2ACB","\u2AB8","\u2ACC","\u205F\u200A","\u2243","\u2248","\u23DF","\u2912","\u21A5","\u21C8","\u03F5","\u2205"][j]
                              + segment.substring(trailingSemiColon?13:12, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 11) {
            trailingSemiColon = segment.charAt(11) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,11);
                j = ["backprim","backsime","Backslas","bigotime","centerdo","CenterDo","checkmar","CircleDo","complexe","Congruen","Coproduc","dotsquar","DoubleDo","downarro","DownArro","Downarro","DownBrev","gtrappro","gtreqles","gvertneq","heartsui","HumpEqua","leftarro","LeftArro","Leftarro","LeftFloo","lesseqgt","LessTild","lvertneq","Mellintr","MinusPlu","ngeqslan","nleqslan","NotCupCa","NotExist","NotSubse","nparalle","nshortmi","nsubsete","nsupsete","OverBrac","pitchfor","PlusMinu","rational","spadesui","subseteq","subsetne","supseteq","supsetne","therefor","Therefor","ThinSpac","triangle","TripleDo","UnionPlu","varpropt"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u2035","\u22CD","\u2216","\u2A02","\xB7","\xB7","\u2713","\u2299","\u2102","\u2261","\u2210","\u22A1","\xA8","\u2193","\u2193","\u21D3","\u0311","\u2A86","\u22DB","\u2269\uFE00","\u2665","\u224F","\u2190","\u2190","\u21D0","\u230A","\u22DA","\u2272","\u2268\uFE00","\u2133","\u2213","\u2A7E\u0338","\u2A7D\u0338","\u226D","\u2204","\u2282\u20D2","\u2226","\u2224","\u2288","\u2289","\u23DE","\u22D4","\xB1","\u211A","\u2660","\u2AC5","\u228A","\u2AC6","\u228B","\u2234","\u2234","\u2009","\u225C","\u20DB","\u228E","\u221D"][j]
                              + segment.substring(trailingSemiColon?12:11, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 10) {
            trailingSemiColon = segment.charAt(10) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,10);
                j = ["andslop","angmsda","angmsda","angmsda","angmsda","angmsda","angmsda","angmsda","angmsda","angrtvb","approxe","awconin","backcon","barwedg","bbrktbr","bigoplu","bigsqcu","biguplu","bigwedg","boxminu","boxtime","bsolhsu","capbrcu","circled","circled","cirfnin","clubsui","cupbrca","curlyve","cwconin","DDotrah","doteqdo","DotEqua","dotminu","drbkaro","dzigrar","elinter","emptyse","eqvpars","fpartin","geqslan","gesdoto","gnappro","hksearo","hkswaro","imaglin","imagpar","infinti","integer","Integra","interca","intlarh","laempty","ldrusha","leqslan","lesdoto","LessLes","llcorne","lnappro","lrcorne","lurdsha","mapstou","multima","natural","ncongdo","NotEqua","notindo","NotTild","otimesa","paralle","Partial","plusaci","pointin","Precede","precneq","precnsi","profala","proflin","profsur","raempty","realpar","RightTe","rppolin","rtriltr","scpolin","setminu","shortmi","smepars","sqsubse","sqsupse","subsete","Succeed","succneq","succnsi","SuchTha","Superse","supsete","thetasy","thicksi","timesba","triangl","triminu","trpeziu","Uarroci","ulcorne","UnderBa","urcorne","varkapp","varsigm","varthet"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u2A58","\u29A8","\u29A9","\u29AA","\u29AB","\u29AC","\u29AD","\u29AE","\u29AF","\u299D","\u224A","\u2233","\u224C","\u2305","\u23B6","\u2A01","\u2A06","\u2A04","\u22C0","\u229F","\u22A0","\u27C8","\u2A49","\xAE","\u24C8","\u2A10","\u2663","\u2A48","\u22CE","\u2232","\u2911","\u2251","\u2250","\u2238","\u2910","\u27FF","\u23E7","\u2205","\u29E5","\u2A0D","\u2A7E","\u2A84","\u2A8A","\u2925","\u2926","\u2110","\u2111","\u29DD","\u2124","\u222B","\u22BA","\u2A17","\u29B4","\u294B","\u2A7D","\u2A83","\u2AA1","\u231E","\u2A89","\u231F","\u294A","\u21A5","\u22B8","\u2115","\u2A6D\u0338","\u2260","\u22F5\u0338","\u2241","\u2A36","\u2225","\u2202","\u2A23","\u2A15","\u227A","\u2AB5","\u22E8","\u232E","\u2312","\u2313","\u29B3","\u211C","\u22A2","\u2A12","\u29CE","\u2A13","\u2216","\u2223","\u29E4","\u228F","\u2290","\u2286","\u227B","\u2AB6","\u22E9","\u220B","\u2283","\u2287","\u03D1","\u223C","\u2A31","\u25B5","\u2A3A","\u23E2","\u2949","\u231C","_","\u231D","\u03F0","\u03C2","\u03D1"][j]
                              + segment.substring(trailingSemiColon?11:10, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 9) {
            trailingSemiColon = segment.charAt(9) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,9);
                j = ["alefsy","angrtv","angzar","asympe","backsi","becaus","Becaus","bempty","betwee","bigcir","bigodo","bigsta","bnequi","boxplu","Cayley","Cconin","ccupss","Cedill","cempty","cirsci","colone","congdo","cudarr","cudarr","cularr","curarr","dbkaro","ddagge","ddotse","dempty","diamon","Diamon","digamm","dotplu","DownTe","dwangl","Elemen","Epsilo","epsilo","eqcolo","equivD","gesdot","gtques","gtrles","harrci","Implie","intpro","isindo","larrbf","larrsi","lbrksl","lbrksl","ldrdha","LeftTe","lesdot","lessdo","lessgt","lesssi","lotime","lozeng","ltques","luruha","maltes","minusd","nappro","natura","nearro","NewLin","nexist","NoBrea","notinv","notinv","notinv","NotLes","notniv","notniv","notniv","npolin","nprece","nsqsub","nsqsup","nsubse","nsucce","nsupse","nvinfi","nvltri","nvrtri","nwarro","olcros","Omicro","omicro","ordero","orslop","OverBa","perten","planck","plusci","plussi","plustw","precsi","Produc","quatin","queste","rarrbf","rarrsi","rbrksl","rbrksl","rdldha","realin","rotime","ruluha","searro","simplu","simrar","subedo","submul","subplu","subrar","succsi","supdsu","supedo","suphso","suphsu","suplar","supmul","supplu","swarro","topfor","triplu","tritim","uparro","UpArro","Uparro","Upsilo","upsilo","uwangl","vzigza","zigrar"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u2135","\u22BE","\u237C","\u224D","\u223D","\u2235","\u2235","\u29B0","\u226C","\u25EF","\u2A00","\u2605","\u2261\u20E5","\u229E","\u212D","\u2230","\u2A50","\xB8","\u29B2","\u29C2","\u2254","\u2A6D","\u2938","\u2935","\u293D","\u293C","\u290F","\u2021","\u2A77","\u29B1","\u22C4","\u22C4","\u03DD","\u2214","\u22A4","\u29A6","\u2208","\u0395","\u03B5","\u2255","\u2A78","\u2A82","\u2A7C","\u2277","\u2948","\u21D2","\u2A3C","\u22F5","\u291F","\u2973","\u298F","\u298D","\u2967","\u22A3","\u2A81","\u22D6","\u2276","\u2272","\u2A34","\u25CA","\u2A7B","\u2966","\u2720","\u2A2A","\u2249","\u266E","\u2197","\x0A","\u2204","\u2060","\u2209","\u22F7","\u22F6","\u226E","\u220C","\u22FE","\u22FD","\u2A14","\u2AAF\u0338","\u22E2","\u22E3","\u2282\u20D2","\u2AB0\u0338","\u2283\u20D2","\u29DE","\u22B4\u20D2","\u22B5\u20D2","\u2196","\u29BB","\u039F","\u03BF","\u2134","\u2A57","\u203E","\u2031","\u210E","\u2A22","\u2A26","\u2A27","\u227E","\u220F","\u2A16","\u225F","\u2920","\u2974","\u298E","\u2990","\u2969","\u211B","\u2A35","\u2968","\u2198","\u2A24","\u2972","\u2AC3","\u2AC1","\u2ABF","\u2979","\u227F","\u2AD8","\u2AC4","\u27C9","\u2AD7","\u297B","\u2AC2","\u2AC0","\u2199","\u2ADA","\u2A39","\u2A3B","\u2191","\u2191","\u21D1","\u03A5","\u03C5","\u29A7","\u299A","\u21DD"][j]
                              + segment.substring(trailingSemiColon?10:9, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 8) {
            trailingSemiColon = segment.charAt(8) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,8);
                j = ["Aacut","aacut","Abrev","abrev","Agrav","agrav","andan","angms","angsp","apaci","appro","Assig","Atild","atild","barve","barwe","Barwe","becau","berno","bigca","bigcu","bigve","bkaro","botto","bowti","boxbo","bprim","brvba","bulle","Bumpe","bumpe","Cacut","cacut","capan","capca","capcu","capdo","Ccaro","ccaro","Ccedi","ccedi","circe","cirmi","Colon","colon","comma","compf","conin","Conin","copro","copys","cular","cupca","CupCa","cupcu","cupdo","curar","curre","cylct","dagge","Dagge","dalet","Dcaro","dcaro","dfish","divid","divon","dlcor","dlcro","dolla","DotDo","drcor","drcro","Dstro","dstro","Eacut","eacut","easte","Ecaro","ecaro","ecolo","Egrav","egrav","egsdo","elsdo","empty","emsp1","emsp1","epars","eqcir","equal","eques","Exist","femal","ffili","fflli","foral","ForAl","frac1","frac1","frac1","frac1","frac1","frac1","frac2","frac2","frac3","frac3","frac3","frac4","frac5","frac5","frac7","gacut","Gamma","gamma","Gbrev","gbrev","Gcedi","gesdo","gesle","gtlPa","gtrar","gtrdo","gtrsi","hairs","hamil","HARDc","hardc","heart","helli","herco","homth","horba","hslas","Hstro","hstro","hybul","hyphe","Iacut","iacut","Igrav","igrav","iiiin","iinfi","incar","inodo","intca","iques","isins","Itild","itild","Jserc","jserc","kappa","Kcedi","kcedi","kgree","Lacut","lacut","lagra","Lambd","lambd","langl","larrf","larrh","larrl","larrp","larrt","latai","lAtai","lbrac","lbrac","Lcaro","lcaro","Lcedi","lcedi","ldquo","lesdo","lesge","lfish","lfloo","lharu","llhar","Lmido","lmido","lmous","loplu","lowas","lowba","lparl","lrhar","lsaqu","lsquo","Lstro","lstro","lthre","ltime","ltlar","ltrPa","mapst","marke","mcomm","midas","midci","middo","minus","minus","mnplu","model","mstpo","Nacut","nacut","nbump","Ncaro","ncaro","Ncedi","ncedi","nearh","nequi","nesea","nexis","nltri","notin","npars","nprcu","nrarr","nrarr","nrtri","nsccu","nsime","Ntild","ntild","numer","nvdas","nvDas","nVdas","nVDas","nvHar","nvlAr","nvrAr","nwarh","nwnea","Oacut","oacut","Odbla","odbla","odsol","Ograv","ograv","ominu","origo","Oslas","oslas","Otild","otild","Otime","otime","parsi","percn","perio","permi","phmma","planc","plank","plusd","plusd","plusm","prece","prime","prnsi","propt","prure","puncs","qprim","Racut","racut","rangl","rarra","rarrf","rarrh","rarrl","rarrp","Rarrt","rarrt","ratai","rAtai","rbrac","rbrac","Rcaro","rcaro","Rcedi","rcedi","rdquo","rfish","rfloo","rharu","rmous","roplu","rparg","rsaqu","rsquo","rthre","rtime","Sacut","sacut","Scaro","scaro","Scedi","scedi","scnsi","searh","seswa","sfrow","SHCHc","shchc","sigma","sigma","simdo","smash","SOFTc","softc","solba","spade","sqcap","sqcup","sqsub","sqsup","squar","Squar","squar","ssetm","ssmil","sstar","subdo","subse","Subse","subsi","subsu","subsu","succe","supdo","supse","Supse","supsi","supsu","supsu","swarh","swnwa","targe","Tcaro","tcaro","Tcedi","tcedi","telre","there","theta","thins","thksi","times","times","topbo","topci","tprim","trido","Tstro","tstro","Uacut","uacut","Ubrev","ubrev","Udbla","udbla","ufish","Ugrav","ugrav","ulcor","ulcro","urcor","urcro","Utild","utild","vangr","varph","varrh","Vdash","veeba","velli","verba","Verba","vsubn","vsubn","vsupn","vsupn","Vvdas","wedba","wedge","weier","wreat","xoplu","xotim","xsqcu","xuplu","xwedg","Yacut","yacut","Zacut","zacut","Zcaro","zcaro","zeetr"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\xC1","\xE1","\u0102","\u0103","\xC0","\xE0","\u2A55","\u2221","\u2222","\u2A6F","\u2248","\u2254","\xC3","\xE3","\u22BD","\u2305","\u2306","\u2235","\u212C","\u22C2","\u22C3","\u22C1","\u290D","\u22A5","\u22C8","\u29C9","\u2035","\xA6","\u2022","\u224E","\u224F","\u0106","\u0107","\u2A44","\u2A4B","\u2A47","\u2A40","\u010C","\u010D","\xC7","\xE7","\u2257","\u2AEF","\u2A74","\u2254","@","\u2218","\u222E","\u222F","\u2210","\u2117","\u21B6","\u2A46","\u224D","\u2A4A","\u228D","\u21B7","\xA4","\u232D","\u2020","\u2021","\u2138","\u010E","\u010F","\u297F","\xF7","\u22C7","\u231E","\u230D","$","\u20DC","\u231F","\u230C","\u0110","\u0111","\xC9","\xE9","\u2A6E","\u011A","\u011B","\u2255","\xC8","\xE8","\u2A98","\u2A97","\u2205","\u2004","\u2005","\u29E3","\u2256","=","\u225F","\u2203","\u2640","\uFB03","\uFB04","\u2200","\u2200","\xBD","\u2153","\xBC","\u2155","\u2159","\u215B","\u2154","\u2156","\xBE","\u2157","\u215C","\u2158","\u215A","\u215D","\u215E","\u01F5","\u03DC","\u03DD","\u011E","\u011F","\u0122","\u2A80","\u2A94","\u2995","\u2978","\u22D7","\u2273","\u200A","\u210B","\u042A","\u044A","\u2665","\u2026","\u22B9","\u223B","\u2015","\u210F","\u0126","\u0127","\u2043","\u2010","\xCD","\xED","\xCC","\xEC","\u2A0C","\u29DC","\u2105","\u0131","\u22BA","\xBF","\u22F3","\u0128","\u0129","\u0408","\u0458","\u03F0","\u0136","\u0137","\u0138","\u0139","\u013A","\u2112","\u039B","\u03BB","\u27E8","\u291D","\u21A9","\u21AB","\u2939","\u21A2","\u2919","\u291B","{","[","\u013D","\u013E","\u013B","\u013C","\u201E","\u2A7F","\u2A93","\u297C","\u230A","\u296A","\u296B","\u013F","\u0140","\u23B0","\u2A2D","\u2217","_","\u2993","\u296D","\u2039","\u201A","\u0141","\u0142","\u22CB","\u22C9","\u2976","\u2996","\u21A6","\u25AE","\u2A29","*","\u2AF0","\xB7","\u229F","\u2238","\u2213","\u22A7","\u223E","\u0143","\u0144","\u224F\u0338","\u0147","\u0148","\u0145","\u0146","\u2924","\u2262","\u2928","\u2204","\u22EC","\u22F9\u0338","\u2AFD\u20E5","\u22E0","\u2933\u0338","\u219D\u0338","\u22ED","\u22E1","\u2244","\xD1","\xF1","\u2116","\u22AC","\u22AD","\u22AE","\u22AF","\u2904","\u2902","\u2903","\u2923","\u2927","\xD3","\xF3","\u0150","\u0151","\u29BC","\xD2","\xF2","\u2296","\u22B6","\xD8","\xF8","\xD5","\xF5","\u2A37","\u2297","\u2AF3","%",".","\u2030","\u2133","\u210F","\u210F","\u2214","\u2A25","\xB1","\u2AAF","\u2119","\u22E8","\u221D","\u22B0","\u2008","\u2057","\u0154","\u0155","\u27E9","\u2975","\u291E","\u21AA","\u21AC","\u2945","\u2916","\u21A3","\u291A","\u291C","}","]","\u0158","\u0159","\u0156","\u0157","\u201D","\u297D","\u230B","\u296C","\u23B1","\u2A2E","\u2994","\u203A","\u2019","\u22CC","\u22CA","\u015A","\u015B","\u0160","\u0161","\u015E","\u015F","\u22E9","\u2925","\u2929","\u2322","\u0429","\u0449","\u03C2","\u03C2","\u2A6A","\u2A33","\u042C","\u044C","\u233F","\u2660","\u2293\uFE00","\u2294\uFE00","\u2291","\u2292","\u25A1","\u25A1","\u25AA","\u2216","\u2323","\u22C6","\u2ABD","\u2282","\u22D0","\u2AC7","\u2AD5","\u2AD3","\u2AB0","\u2ABE","\u2283","\u22D1","\u2AC8","\u2AD4","\u2AD6","\u2926","\u292A","\u2316","\u0164","\u0165","\u0162","\u0163","\u2315","\u2234","\u03D1","\u2009","\u223C","\u22A0","\u2A30","\u2336","\u2AF1","\u2034","\u25EC","\u0166","\u0167","\xDA","\xFA","\u016C","\u016D","\u0170","\u0171","\u297E","\xD9","\xF9","\u231C","\u230F","\u231D","\u230E","\u0168","\u0169","\u299C","\u03D5","\u03F1","\u2AE6","\u22BB","\u22EE","|","\u2016","\u2ACB\uFE00","\u228A\uFE00","\u2ACC\uFE00","\u228B\uFE00","\u22AA","\u2A5F","\u2259","\u2118","\u2240","\u2A01","\u2A02","\u2A06","\u2A04","\u22C0","\xDD","\xFD","\u0179","\u017A","\u017D","\u017E","\u2128"][j]
                              + segment.substring(trailingSemiColon?9:8, segment.length - 1);
                    continue;
                }
                if (allowAllCap && (candidateStr == "thetasym")) {
                    output += "\u03D1"
                              + segment.substring(trailingSemiColon?9:8, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 7) {
            trailingSemiColon = segment.charAt(7) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,7);
                j = ["Acir","acir","acut","AEli","aeli","alep","Alph","alph","Amac","amac","amal","angl","angr","angs","Aogo","aogo","Arin","arin","asym","awin","bcon","bdqu","beps","blan","blk1","blk1","blk3","bloc","boxd","boxd","boxD","boxD","boxd","boxd","boxD","boxD","boxh","boxH","boxh","boxH","boxh","boxH","boxh","boxH","boxu","boxu","boxU","boxU","boxu","boxu","boxU","boxU","boxv","boxv","boxV","boxV","boxv","boxv","boxV","boxV","boxv","boxv","boxV","boxV","brev","Brev","bsem","bsim","bsol","bump","bump","care","caro","ccap","Ccir","ccir","ccup","cedi","chec","club","colo","Colo","comm","crar","cros","Cros","csub","csup","ctdo","cuep","cues","cupo","cuve","cuwe","cwin","Dash","dash","dbla","ddar","Delt","delt","dhar","dhar","diam","disi","dote","dtdo","dtri","duar","duha","Ecir","ecir","eDDo","efDo","Emac","emac","empt","Eogo","eogo","eplu","epsi","eqsi","Equa","equi","erar","erDo","esdo","exis","ffli","fili","fjli","flli","fltn","fork","fras","frow","Gamm","gamm","Gcir","gcir","gesc","gime","gneq","gnsi","grav","gsim","gsim","gtci","gtdo","Hace","harr","Hcir","hcir","hoar","Icir","icir","iexc","iiin","iiot","IJli","ijli","Imac","imac","imag","imat","impe","infi","Iogo","iogo","ipro","isin","isin","isin","Iukc","iukc","Jcir","jcir","jmat","Jukc","jukc","Kapp","kapp","lAar","lang","laqu","larr","late","lbar","lBar","lbbr","lbrk","lcei","ldqu","lesc","lhar","lhar","lhbl","llar","lltr","lneq","lnsi","loan","loar","lobr","lopa","lrar","lrha","lrtr","lsim","lsim","lsqu","ltci","ltdo","ltri","ltri","mdas","mDDo","micr","minu","muma","nabl","napi","napo","natu","nbum","ncon","ndas","near","neAr","nedo","nesi","ngeq","ngsi","nhar","nhAr","nhpa","nlar","nlAr","nleq","nles","nlsi","nltr","noti","notn","npar","npre","nrar","nrAr","nrtr","nsim","nsmi","nspa","nsub","nsub","nsuc","nsup","nsup","nums","nvsi","nwar","nwAr","Ocir","ocir","odas","OEli","oeli","ofci","ohba","olar","olci","olin","Omac","omac","Omeg","omeg","oper","oplu","orar","orde","ovba","pars","phon","plus","plus","poun","prcu","prim","Prim","prna","prsi","ques","rAar","radi","rang","rang","raqu","rarr","rarr","rarr","rati","rbar","rBar","RBar","rbbr","rbrk","rcei","rdqu","real","rhar","rhar","rlar","rlha","rnmi","roan","roar","robr","ropa","rrar","rsqu","rtri","rtri","sbqu","sccu","Scir","scir","scna","scsi","sdot","sdot","sear","seAr","setm","shar","Sigm","sigm","sime","simg","siml","simn","slar","smil","smte","sqca","sqcu","sqsu","sqsu","srar","star","strn","subn","subn","supn","supn","swar","swAr","szli","Thet","thet","thka","THOR","thor","tild","Tild","time","trad","TRAD","tris","TSHc","tshc","twix","Ubrc","ubrc","Ucir","ucir","udar","udha","uhar","uhar","uhbl","ultr","Umac","umac","Unio","Uogo","uogo","uplu","upsi","UpTe","Urin","urin","urtr","utdo","utri","uuar","varp","vBar","vdas","vDas","Vdas","VDas","veee","vltr","vnsu","vnsu","vpro","vrtr","Wcir","wcir","wedg","Wedg","xcir","xdtr","xhar","xhAr","xlar","xlAr","xodo","xrar","xrAr","xutr","Ycir","ycir"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\xC2","\xE2","\xB4","\xC6","\xE6","\u2135","\u0391","\u03B1","\u0100","\u0101","\u2A3F","\u2220","\u221F","\xC5","\u0104","\u0105","\xC5","\xE5","\u2248","\u2A11","\u224C","\u201E","\u03F6","\u2423","\u2592","\u2591","\u2593","\u2588","\u2510","\u2555","\u2556","\u2557","\u250C","\u2552","\u2553","\u2554","\u252C","\u2564","\u2565","\u2566","\u2534","\u2567","\u2568","\u2569","\u2518","\u255B","\u255C","\u255D","\u2514","\u2558","\u2559","\u255A","\u253C","\u256A","\u256B","\u256C","\u2524","\u2561","\u2562","\u2563","\u251C","\u255E","\u255F","\u2560","\u02D8","\u02D8","\u204F","\u22CD","\u29C5","\u2AAE","\u224F","\u2041","\u02C7","\u2A4D","\u0108","\u0109","\u2A4C","\xB8","\u2713","\u2663",":","\u2237",",","\u21B5","\u2717","\u2A2F","\u2AD1","\u2AD2","\u22EF","\u22DE","\u22DF","\u2A45","\u22CE","\u22CF","\u2231","\u2AE4","\u22A3","\u02DD","\u21CA","\u0394","\u03B4","\u21C3","\u21C2","\u2666","\u22F2","\u2250","\u22F1","\u25BE","\u21F5","\u296F","\xCA","\xEA","\u2A77","\u2252","\u0112","\u0113","\u2205","\u0118","\u0119","\u2A71","\u03F5","\u2242","\u2A75","\u2261","\u2971","\u2253","\u2250","\u2203","\uFB00","\uFB01","fj","\uFB02","\u25B1","\u2AD9","\u2044","\u2322","\u0393","\u03B3","\u011C","\u011D","\u2AA9","\u2137","\u2269","\u22E7","`","\u2A8E","\u2A90","\u2A7A","\u22D7","\u02C7","\u21AD","\u0124","\u0125","\u21FF","\xCE","\xEE","\xA1","\u222D","\u2129","\u0132","\u0133","\u012A","\u012B","\u2111","\u0131","\u01B5","\u221E","\u012E","\u012F","\u2A3C","\u22F9","\u22F4","\u2208","\u0406","\u0456","\u0134","\u0135","\u0237","\u0404","\u0454","\u039A","\u03BA","\u21DA","\u2991","\xAB","\u21E4","\u2AAD\uFE00","\u290C","\u290E","\u2772","\u298B","\u2308","\u201C","\u2AA8","\u21BD","\u21BC","\u2584","\u21C7","\u25FA","\u2268","\u22E6","\u27EC","\u21FD","\u27E6","\u2985","\u21C6","\u21CB","\u22BF","\u2A8D","\u2A8F","\u2018","\u2A79","\u22D6","\u22B4","\u25C2","\u2014","\u223A","\xB5","\u2212","\u22B8","\u2207","\u224B\u0338","\u0149","\u266E","\u224E\u0338","\u2247","\u2013","\u2197","\u21D7","\u2250\u0338","\u2242\u0338","\u2267\u0338","\u2275","\u21AE","\u21CE","\u2AF2","\u219A","\u21CD","\u2266\u0338","\u226E","\u2274","\u22EA","\u2209","\u220C","\u2202\u0338","\u2280","\u219B","\u21CF","\u22EB","\u2244","\u2224","\u2226","\u2AC5\u0338","\u2288","\u2281","\u2AC6\u0338","\u2289","\u2007","\u223C\u20D2","\u2196","\u21D6","\xD4","\xF4","\u229D","\u0152","\u0153","\u29BF","\u29B5","\u21BA","\u29BE","\u203E","\u014C","\u014D","\u03A9","\u03C9","\u29B9","\u2295","\u21BB","\u2134","\u233D","\u2AFD","\u260E","\u229E","\u2A72","\xA3","\u227C","\u2032","\u2033","\u2AB9","\u227E","?","\u21DB","\u221A","\u2992","\u29A5","\xBB","\u21E5","\u2933","\u219D","\u2236","\u290D","\u290F","\u2910","\u2773","\u298C","\u2309","\u201D","\u211D","\u21C1","\u21C0","\u21C4","\u21CC","\u2AEE","\u27ED","\u21FE","\u27E7","\u2986","\u21C9","\u2019","\u22B5","\u25B8","\u201A","\u227D","\u015C","\u015D","\u2ABA","\u227F","\u22A1","\u2A66","\u2198","\u21D8","\u2216","\u266F","\u03A3","\u03C3","\u2243","\u2AA0","\u2A9F","\u2246","\u2190","\u2323","\u2AAC\uFE00","\u2293","\u2294","\u228F","\u2290","\u2192","\u2605","\xAF","\u2ACB","\u228A","\u2ACC","\u228B","\u2199","\u21D9","\xDF","\u0398","\u03B8","\u2248","\xDE","\xFE","\u02DC","\u223C","\xD7","\u2122","\u2122","\u29CD","\u040B","\u045B","\u226C","\u040E","\u045E","\xDB","\xFB","\u21C5","\u296E","\u21BF","\u21BE","\u2580","\u25F8","\u016A","\u016B","\u22C3","\u0172","\u0173","\u228E","\u03D2","\u22A5","\u016E","\u016F","\u25F9","\u22F0","\u25B4","\u21C8","\u03D6","\u2AE9","\u22A2","\u22A8","\u22A9","\u22AB","\u225A","\u22B2","\u2282\u20D2","\u2283\u20D2","\u221D","\u22B3","\u0174","\u0175","\u2227","\u22C0","\u25EF","\u25BD","\u27F7","\u27FA","\u27F5","\u27F8","\u2A00","\u27F6","\u27F9","\u25B3","\u0176","\u0177"][j]
                              + segment.substring(trailingSemiColon?8:7, segment.length - 1);
                    continue;
                }
                if (allowAllCap && (candidateStr == "alefsym")) {
                    output += "\u2135"
                              + segment.substring(trailingSemiColon?8:7, segment.length - 1);
                    continue;
                }
            }
        }if (segment.length >= 6) {
            trailingSemiColon = segment.charAt(6) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,6);
                j = ["and","and","ang","Aop","aop","api","apo","Asc","asc","Aum","aum","Bar","bbr","Bet","bet","bet","bNo","bno","Bop","bop","box","box","box","box","bsc","Bsc","bsi","bso","bul","bum","cap","Cdo","cdo","cen","CHc","chc","cir","cir","cir","com","con","cop","Cop","cop","COP","Csc","csc","csu","csu","cup","dar","Dar","dAr","das","dHa","dia","DJc","djc","Dop","dop","Dsc","dsc","DSc","dsc","dso","dtr","DZc","dzc","eci","Edo","edo","eDo","ems","ens","Eop","eop","epa","eps","esc","Esc","Esi","esi","Eum","eum","eur","exc","fla","fno","Fop","fop","for","fsc","Fsc","Gdo","gdo","geq","ges","GJc","gjc","gna","gne","Gop","gop","Gsc","gsc","gsi","gtc","gvn","hal","har","hAr","hba","hop","Hop","hsc","Hsc","Ido","IEc","iec","imo","IOc","ioc","Iop","iop","Iot","iot","isc","Isc","isi","Ium","ium","Jop","jop","Jsc","jsc","KHc","khc","KJc","kjc","Kop","kop","Ksc","ksc","lan","Lan","lar","Lar","lAr","lat","lcu","ldc","lds","leq","les","lHa","LJc","ljc","lna","lne","Lop","lop","loz","lpa","lsc","Lsc","lsi","lsq","ltc","ltr","lvn","mac","mal","mal","mlc","mld","Mop","mop","msc","Msc","nan","nap","nbs","nca","ncu","nge","nge","ngt","nGt","nis","NJc","njc","nld","nle","nle","nLt","nmi","nop","Nop","npa","npr","nsc","Nsc","nsc","nsi","nsu","nsu","ntg","ntl","nva","nvg","nvg","nvl","nvl","oas","oci","odi","odo","ogo","oin","omi","Oop","oop","opa","ord","ord","oro","Osc","osc","oso","Oum","oum","par","par","per","phi","plu","pop","Pop","pra","pre","prn","pro","pro","Psc","psc","qin","qop","Qop","Qsc","qsc","quo","QUO","rac","ran","Ran","rar","Rar","rAr","rcu","rdc","rds","rea","rec","rHa","rho","rin","rop","Rop","rpa","rsc","Rsc","rsq","rtr","sca","scn","sdo","sec","sem","sex","SHc","shc","sim","sim","sim","smi","smt","sol","Sop","sop","spa","Sqr","squ","Ssc","ssc","Sta","sta","sub","sub","suc","sun","sup","sup","sup","sup","sup","tbr","tdo","tin","toe","Top","top","tos","tri","Tsc","tsc","TSc","tsc","uar","Uar","uAr","uHa","Uop","uop","ups","Ups","Usc","usc","utr","Uum","uum","var","vAr","vBa","Vba","ver","Ver","Vop","vop","Vsc","vsc","Wop","wop","Wsc","wsc","xca","xcu","xma","xni","Xop","xop","Xsc","xsc","xve","YAc","yac","YIc","yic","Yop","yop","Ysc","ysc","YUc","yuc","yum","Yum","Zdo","zdo","Zet","zet","ZHc","zhc","zop","Zop","Zsc","zsc","zwn"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u2A5C","\u2A5A","\u29A4","\uD835\uDD38","\uD835\uDD52","\u224B","'","\uD835\uDC9C","\uD835\uDCB6","\xC4","\xE4","\u2AE7","\u23B5","\u0392","\u03B2","\u2136","\u2AED","\u2310","\uD835\uDD39","\uD835\uDD53","\u2500","\u2550","\u2502","\u2551","\uD835\uDCB7","\u212C","\u223D","\\","\u2022","\u224E","\u2229\uFE00","\u010A","\u010B","\xA2","\u0427","\u0447","\u02C6","\u29C3","\u2257","\u2201","\u2245","\uD835\uDD54","\u2102","\xA9","\xA9","\uD835\uDC9E","\uD835\uDCB8","\u2ACF","\u2AD0","\u222A\uFE00","\u2193","\u21A1","\u21D3","\u2010","\u2965","\u22C4","\u0402","\u0452","\uD835\uDD3B","\uD835\uDD55","\uD835\uDC9F","\uD835\uDCB9","\u0405","\u0455","\u29F6","\u25BF","\u040F","\u045F","\u2256","\u0116","\u0117","\u2251","\u2003","\u2002","\uD835\uDD3C","\uD835\uDD56","\u22D5","\u03B5","\u212F","\u2130","\u2A73","\u2242","\xCB","\xEB","\u20AC","!","\u266D","\u0192","\uD835\uDD3D","\uD835\uDD57","\u22D4","\uD835\uDCBB","\u2131","\u0120","\u0121","\u2267","\u22DB\uFE00","\u0403","\u0453","\u2A8A","\u2A88","\uD835\uDD3E","\uD835\uDD58","\uD835\uDCA2","\u210A","\u2273","\u2AA7","\u2269\uFE00","\xBD","\u2194","\u21D4","\u210F","\uD835\uDD59","\u210D","\uD835\uDCBD","\u210B","\u0130","\u0415","\u0435","\u22B7","\u0401","\u0451","\uD835\uDD40","\uD835\uDD5A","\u0399","\u03B9","\uD835\uDCBE","\u2110","\u2208","\xCF","\xEF","\uD835\uDD41","\uD835\uDD5B","\uD835\uDCA5","\uD835\uDCBF","\u0425","\u0445","\u040C","\u045C","\uD835\uDD42","\uD835\uDD5C","\uD835\uDCA6","\uD835\uDCC0","\u27E8","\u27EA","\u2190","\u219E","\u21D0","\u2AAD","{","\u2936","\u21B2","\u2266","\u22DA\uFE00","\u2962","\u0409","\u0459","\u2A89","\u2A87","\uD835\uDD43","\uD835\uDD5D","\u29EB","(","\uD835\uDCC1","\u2112","\u2272","[","\u2AA6","\u25C3","\u2268\uFE00","\xAF","\u2642","\u2720","\u2ADB","\u2026","\uD835\uDD44","\uD835\uDD5E","\uD835\uDCC2","\u2133","\u2220\u20D2","\u2A70\u0338","\xA0","\u2A43","\u2A42","\u2271","\u2A7E\u0338","\u226F","\u226B\u0338","\u22FA","\u040A","\u045A","\u2025","\u2270","\u2A7D\u0338","\u226A\u0338","\u2224","\uD835\uDD5F","\u2115","\u2226","\u2AAF\u0338","\u2AB0\u0338","\uD835\uDCA9","\uD835\uDCC3","\u2241","\u2284","\u2285","\u2279","\u2278","\u224D\u20D2","\u2265\u20D2",">\u20D2","\u2264\u20D2","<\u20D2","\u229B","\u229A","\u2A38","\u2299","\u02DB","\u222E","\u29B6","\uD835\uDD46","\uD835\uDD60","\u29B7","\xAA","\xBA","\u2A56","\uD835\uDCAA","\u2134","\u2298","\xD6","\xF6","\xB6","\u2202","\u22A5","\u03D5","+","\uD835\uDD61","\u2119","\u2AB7","\u227A","\u2AB5","\u220F","\u221D","\uD835\uDCAB","\uD835\uDCC5","\u2A0C","\uD835\uDD62","\u211A","\uD835\uDCAC","\uD835\uDCC6","\"","\"","\u223D\u0331","\u27E9","\u27EB","\u2192","\u21A0","\u21D2","}","\u2937","\u21B3","\u211C","\u25AD","\u2964","\u03F1","\u02DA","\uD835\uDD63","\u211D",")","\uD835\uDCC7","\u211B","]","\u25B9","\u2AB8","\u2AB6","\u22C5","\xA7",";","\u2736","\u0428","\u0448","\u2243","\u2A9E","\u2A9D","\u2223","\u2AAC","\u29C4","\uD835\uDD4A","\uD835\uDD64","\u2225","\u221A","\u25AA","\uD835\uDCAE","\uD835\uDCC8","\u22C6","\u2606","\u2AC5","\u2286","\u227B","\u266A","\xB9","\xB2","\xB3","\u2AC6","\u2287","\u23B4","\u20DB","\u222D","\u2928","\uD835\uDD4B","\uD835\uDD65","\u2929","\u225C","\uD835\uDCAF","\uD835\uDCC9","\u0426","\u0446","\u2191","\u219F","\u21D1","\u2963","\uD835\uDD4C","\uD835\uDD66","\u03C5","\u03D2","\uD835\uDCB0","\uD835\uDCCA","\u25B5","\xDC","\xFC","\u2195","\u21D5","\u2AE8","\u2AEB","|","\u2016","\uD835\uDD4D","\uD835\uDD67","\uD835\uDCB1","\uD835\uDCCB","\uD835\uDD4E","\uD835\uDD68","\uD835\uDCB2","\uD835\uDCCC","\u22C2","\u22C3","\u27FC","\u22FB","\uD835\uDD4F","\uD835\uDD69","\uD835\uDCB3","\uD835\uDCCD","\u22C1","\u042F","\u044F","\u0407","\u0457","\uD835\uDD50","\uD835\uDD6A","\uD835\uDCB4","\uD835\uDCCE","\u042E","\u044E","\xFF","\u0178","\u017B","\u017C","\u0396","\u03B6","\u0416","\u0436","\uD835\uDD6B","\u2124","\uD835\uDCB5","\uD835\uDCCF","\u200C"][j]
                              + segment.substring(trailingSemiColon?7:6, segment.length - 1);
                    continue;
                }
                if (allowAllCap) {
                    j = ["brvbar","curren","divide","forall","frac12","frac14","frac34","hearts","hellip","iquest","lfloor","lowast","lsaquo","middot","otimes","permil","plusmn","rfloor","rsaquo","sigmaf","spades","there4","thinsp","weierp"].indexOf(candidateStr);
                    if (j >= 0) {
                        output += ["\xA6","\xA4","\xF7","\u2200","\xBD","\xBC","\xBE","\u2665","\u2026","\xBF","\u230A","\u2217","\u2039","\xB7","\u2297","\u2030","\xB1","\u230B","\u203A","\u03C2","\u2660","\u2234","\u2009","\u2118"][j]
                                  + segment.substring(trailingSemiColon?7:6, segment.length - 1);
                        continue;
                    }
                }
            }
        }if (segment.length >= 5) {
            trailingSemiColon = segment.charAt(5) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,5);
                j = ["ac","ac","Ac","ac","Af","af","am","AM","An","an","an","ap","ap","as","Bc","bc","Bf","bf","bn","bo","ca","Ca","cf","Cf","Ch","ch","ci","cu","Cu","Dc","dc","de","De","Df","df","di","di","Do","do","Ec","ec","Ef","ef","eg","el","el","EN","en","Et","et","ET","et","Fc","fc","Ff","ff","ga","Gc","gc","gE","ge","ge","ge","Gf","gf","gg","gl","gl","gl","gn","gn","Ha","hf","Hf","Ic","ic","if","if","If","in","In","Jc","jc","Jf","jf","Kc","kc","Kf","kf","la","la","Lc","lc","lE","le","le","le","Lf","lf","lg","ln","ln","lo","lr","ls","Ls","Ma","ma","Mc","mc","Mf","mf","mh","mi","na","Nc","nc","Nf","nf","ng","ng","nG","nG","ng","ni","ni","nl","nl","nL","nL","nl","No","no","np","ns","nu","Oc","oc","Of","of","og","oh","ol","or","or","pa","Pc","pc","Pf","pf","Ph","ph","pi","pr","pr","Ps","ps","Qf","qf","Rc","rc","re","RE","rf","Rf","Rh","rh","rl","rs","Rs","sc","sc","Sc","sc","Sf","sf","sh","si","sm","so","sq","su","Su","su","Su","su","Su","Ta","Ta","ta","Tc","tc","Tf","tf","to","Uc","uc","Uf","uf","um","Vc","vc","ve","Ve","Vf","vf","Wf","wf","Xf","xf","Yc","yc","ye","Yf","yf","Zc","zc","zf","Zf","zw"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u223F","\u223E\u0333","\u0410","\u0430","\uD835\uDD04","\uD835\uDD1E","&","&","\u2A53","\u2227","\u2220","\u2A70","\u224A","*","\u0411","\u0431","\uD835\uDD05","\uD835\uDD1F","=\u20E5","\u22A5","\u2229","\u22D2","\uD835\uDD20","\u212D","\u03A7","\u03C7","\u25CB","\u222A","\u22D3","\u0414","\u0434","\xB0","\u2207","\uD835\uDD07","\uD835\uDD21","\xA8","\xF7","\xA8","\u02D9","\u042D","\u044D","\uD835\uDD08","\uD835\uDD22","\u2A96","\u2113","\u2A95","\u014A","\u014B","\u0397","\u03B7","\xD0","\xF0","\u0424","\u0444","\uD835\uDD09","\uD835\uDD23","\u2A86","\u0413","\u0433","\u2A8C","\u22DB","\u2265","\u2A7E","\uD835\uDD0A","\uD835\uDD24","\u22D9","\u2AA5","\u2A92","\u2AA4","\u2A88","\u2269","^","\uD835\uDD25","\u210C","\u0418","\u0438","\u21D4","\uD835\uDD26","\u2111","\u222B","\u222C","\u0419","\u0439","\uD835\uDD0D","\uD835\uDD27","\u041A","\u043A","\uD835\uDD0E","\uD835\uDD28","\u2A85","\u2AAB","\u041B","\u043B","\u2A8B","\u22DA","\u2264","\u2A7D","\uD835\uDD0F","\uD835\uDD29","\u2A91","\u2A87","\u2268","\u25CA","\u200E","\u21B0","\u21B0","\u2905","\u21A6","\u041C","\u043C","\uD835\uDD10","\uD835\uDD2A","\u2127","\u2223","\u2249","\u041D","\u043D","\uD835\uDD11","\uD835\uDD2B","\u2267\u0338","\u2271","\u22D9\u0338","\u226B\u20D2","\u226F","\u22FC","\u220B","\u2266\u0338","\u2270","\u22D8\u0338","\u226A\u20D2","\u226E","\u2AEC","\xAC","\u2280","\u2281","#","\u041E","\u043E","\uD835\uDD12","\uD835\uDD2C","\u29C1","\u03A9","\u29C0","\u2A5D","\u2A5B","\u2225","\u041F","\u043F","\uD835\uDD13","\uD835\uDD2D","\u03A6","\u03C6","\u03D6","\u2AAF","\u2AB3","\u03A8","\u03C8","\uD835\uDD14","\uD835\uDD2E","\u0420","\u0440","\xAE","\xAE","\uD835\uDD2F","\u211C","\u03A1","\u03C1","\u200F","\u21B1","\u21B1","\u2AB0","\u2AB4","\u0421","\u0441","\uD835\uDD16","\uD835\uDD30","\xAD","\u223C","\u2AAA","/","\u25A1","\u2282","\u22D0","\u2211","\u2211","\u2283","\u22D1","\x09","\u03A4","\u03C4","\u0422","\u0442","\uD835\uDD17","\uD835\uDD31","\u22A4","\u0423","\u0443","\uD835\uDD18","\uD835\uDD32","\xA8","\u0412","\u0432","\u2228","\u22C1","\uD835\uDD19","\uD835\uDD33","\uD835\uDD1A","\uD835\uDD34","\uD835\uDD1B","\uD835\uDD35","\u042B","\u044B","\xA5","\uD835\uDD1C","\uD835\uDD36","\u0417","\u0437","\uD835\uDD37","\u2128","\u200D"][j]
                              + segment.substring(trailingSemiColon?6:5, segment.length - 1);
                    continue;
                }
                if (allowAllCap) {
                    j = ["acute","asymp","bdquo","cedil","clubs","crarr","diams","empty","equiv","exist","frasl","iexcl","image","infin","laquo","lceil","ldquo","lsquo","mdash","micro","minus","nabla","ndash","notin","oline","oplus","pound","radic","raquo","rceil","rdquo","rsquo","sbquo","szlig","tilde","times","trade","upsih"].indexOf(candidateStr);
                    if (j >= 0) {
                        output += ["\xB4","\u2248","\u201E","\xB8","\u2663","\u21B5","\u2666","\u2205","\u2261","\u2203","\u2044","\xA1","\u2111","\u221E","\xAB","\u2308","\u201C","\u2018","\u2014","\xB5","\u2212","\u2207","\u2013","\u2209","\u203E","\u2295","\xA3","\u221A","\xBB","\u2309","\u201D","\u2019","\u201A","\xDF","\u02DC","\xD7","\u2122","\u03D2"][j]
                                  + segment.substring(trailingSemiColon?6:5, segment.length - 1);
                        continue;
                    }
                }
            }
        }if (segment.length >= 4) {
            trailingSemiColon = segment.charAt(4) == ';';
            if (!semiRequired || trailingSemiColon) {
                candidateStr = segment.substring(0,4);
                j = ["a","a","a","D","d","e","e","e","g","g","g","G","g","g","G","G","i","i","I","i","i","l","l","l","l","L","l","L","L","m","M","m","n","n","N","n","O","o","o","P","p","p","P","p","R","r","S","s","w","w","X","x"].indexOf(candidateStr);
                if (j >= 0) {
                    output += ["\u223E","\u2061","\u2248","\u2145","\u2146","\u2147","\u2A9A","\u2A99","\u2265","\u2267","\u226B","\u22D9","\u2277",">",">","\u226B","\u2063","\u2148","\u2111","\u2208","\u2062","\u2264","\u2266","\u2276","\u226A","\u22D8","<","<","\u226A","\u2213","\u039C","\u03BC","\u2260","\u220B","\u039D","\u03BD","\u2A54","\u2228","\u24C8","\u03A0","\u03C0","\xB1","\u2ABB","\u227A","\u211C","\u211E","\u2ABC","\u227B","\u2118","\u2240","\u039E","\u03BE"][j]
                              + segment.substring(trailingSemiColon?5:4, segment.length - 1);
                    continue;
                }
                if (allowAllCap) {
                    j = ["apos","bull","cent","circ","cong","emsp","ensp","euro","fnof","isin","lang","macr","nbsp","nsub","ordf","ordm","para","part","perp","prod","prop","rang","real","sdot","sect","sube","sup1","sup2","sup3","supe","zwnj"].indexOf(candidateStr);
                    if (j >= 0) {
                        output += ["'","\u2022","\xA2","\u02C6","\u2245","\u2003","\u2002","\u20AC","\u0192","\u2208","\u27E8","\xAF","\xA0","\u2284","\xAA","\xBA","\xB6","\u2202","\u22A5","\u220F","\u221D","\u27E9","\u211C","\u22C5","\xA7","\u2286","\xB9","\xB2","\xB3","\u2287","\u200C"][j]
                                  + segment.substring(trailingSemiColon?5:4, segment.length - 1);
                        continue;
                    }
                }
            }
        }
        output += '&' + segment;
    }
    return output;
}

var decodeHTML4EntitiesStrict = function(input) {
    if (!input || !input.length) return '';
    var output = '';
    var candidateStr = '';
    var i = 0;
    var j = 0;
    var len = input.length;
    var char;
    while (i < len) {
        char = input.charAt(i);
        if (char == '&') {
            if (i + 3 < len) {
                if (input.charAt(i+3) == ';') {
                    candidateStr = input.substring(i+1,i+3);
                    j = ["ge","GT","gt","le","LT","lt","mu","Mu","ne","ni","nu","Nu","or","pi","Pi","Xi","xi"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 4;
                        output += ["\u2265",">",">","\u2264","<","<","\u03BC","\u039C","\u2260","\u220B","\u03BD","\u039D","\u2228","\u03C0","\u03A0","\u039E","\u03BE"][j];
                        continue;
                    }
                }
            } else if (i + 4 < len) {
                if (input.charAt(i+4) == ';') {
                    candidateStr = input.substring(i+1,i+4);
                    j = ["amp","AMP","and","ang","cap","chi","Chi","cup","deg","eta","Eta","eth","ETH","int","loz","lrm","not","Phi","phi","piv","psi","Psi","reg","REG","rho","Rho","rlm","shy","sim","sub","sum","sup","Tau","tau","uml","yen","zwj"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 5;
                        output += ["&","&","\u2227","\u2220","\u2229","\u03C7","\u03A7","\u222A","\xB0","\u03B7","\u0397","\xF0","\xD0","\u222B","\u25CA","\u200E","\xAC","\u03A6","\u03C6","\u03D6","\u03C8","\u03A8","\xAE","\xAE","\u03C1","\u03A1","\u200F","\xAD","\u223C","\u2282","\u2211","\u2283","\u03A4","\u03C4","\xA8","\xA5","\u200D"][j];
                        continue;
                    }
                }
            } else if (i + 5 < len) {
                if (input.charAt(i+5) == ';') {
                    candidateStr = input.substring(i+1,i+5);
                    j = ["apos","auml","Auml","beta","Beta","bull","cent","circ","cong","copy","COPY","dArr","darr","emsp","ensp","Euml","euml","euro","fnof","hArr","harr","iota","Iota","isin","Iuml","iuml","lang","larr","lArr","macr","nbsp","nsub","ordf","ordm","ouml","Ouml","para","part","perp","prod","prop","quot","QUOT","rang","rArr","rarr","real","sdot","sect","sube","sup1","sup2","sup3","supe","uArr","uarr","uuml","Uuml","yuml","Yuml","zeta","Zeta","zwnj"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 6;
                        output += ["'","\xE4","\xC4","\u03B2","\u0392","\u2022","\xA2","\u02C6","\u2245","\xA9","\xA9","\u21D3","\u2193","\u2003","\u2002","\xCB","\xEB","\u20AC","\u0192","\u21D4","\u2194","\u03B9","\u0399","\u2208","\xCF","\xEF","\u27E8","\u2190","\u21D0","\xAF","\xA0","\u2284","\xAA","\xBA","\xF6","\xD6","\xB6","\u2202","\u22A5","\u220F","\u221D","\"","\"","\u27E9","\u21D2","\u2192","\u211C","\u22C5","\xA7","\u2286","\xB9","\xB2","\xB3","\u2287","\u21D1","\u2191","\xFC","\xDC","\xFF","\u0178","\u03B6","\u0396","\u200C"][j];
                        continue;
                    }
                }
            } else if (i + 6 < len) {
                if (input.charAt(i+6) == ';') {
                    candidateStr = input.substring(i+1,i+6);
                    j = ["Acirc","acirc","acute","aelig","AElig","Alpha","alpha","aring","Aring","asymp","bdquo","cedil","clubs","crarr","delta","Delta","diams","ecirc","Ecirc","empty","equiv","exist","frasl","gamma","Gamma","icirc","Icirc","iexcl","image","infin","kappa","Kappa","laquo","lceil","ldquo","lsquo","mdash","micro","minus","nabla","ndash","notin","ocirc","Ocirc","oelig","OElig","oline","Omega","omega","oplus","pound","prime","Prime","radic","raquo","rceil","rdquo","rsquo","sbquo","sigma","Sigma","szlig","Theta","theta","THORN","thorn","tilde","times","trade","ucirc","Ucirc","upsih"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 7;
                        output += ["\xC2","\xE2","\xB4","\xE6","\xC6","\u0391","\u03B1","\xE5","\xC5","\u2248","\u201E","\xB8","\u2663","\u21B5","\u03B4","\u0394","\u2666","\xEA","\xCA","\u2205","\u2261","\u2203","\u2044","\u03B3","\u0393","\xEE","\xCE","\xA1","\u2111","\u221E","\u03BA","\u039A","\xAB","\u2308","\u201C","\u2018","\u2014","\xB5","\u2212","\u2207","\u2013","\u2209","\xF4","\xD4","\u0153","\u0152","\u203E","\u03A9","\u03C9","\u2295","\xA3","\u2032","\u2033","\u221A","\xBB","\u2309","\u201D","\u2019","\u201A","\u03C3","\u03A3","\xDF","\u0398","\u03B8","\xDE","\xFE","\u02DC","\xD7","\u2122","\xFB","\xDB","\u03D2"][j];
                        continue;
                    }
                }
            } else if (i + 7 < len) {
                if (input.charAt(i+7) == ';') {
                    candidateStr = input.substring(i+1,i+7);
                    j = ["Aacute","aacute","Agrave","agrave","Atilde","atilde","brvbar","Ccedil","ccedil","curren","Dagger","dagger","divide","Eacute","eacute","egrave","Egrave","forall","frac12","frac14","frac34","hearts","hellip","iacute","Iacute","igrave","Igrave","iquest","Lambda","lambda","lfloor","lowast","lsaquo","middot","ntilde","Ntilde","oacute","Oacute","ograve","Ograve","oslash","Oslash","Otilde","otilde","otimes","permil","plusmn","rfloor","rsaquo","scaron","Scaron","sigmaf","spades","there4","thinsp","Uacute","uacute","ugrave","Ugrave","weierp","Yacute","yacute"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 8;
                        output += ["\xC1","\xE1","\xC0","\xE0","\xC3","\xE3","\xA6","\xC7","\xE7","\xA4","\u2021","\u2020","\xF7","\xC9","\xE9","\xE8","\xC8","\u2200","\xBD","\xBC","\xBE","\u2665","\u2026","\xED","\xCD","\xEC","\xCC","\xBF","\u039B","\u03BB","\u230A","\u2217","\u2039","\xB7","\xF1","\xD1","\xF3","\xD3","\xF2","\xD2","\xF8","\xD8","\xD5","\xF5","\u2297","\u2030","\xB1","\u230B","\u203A","\u0161","\u0160","\u03C2","\u2660","\u2234","\u2009","\xDA","\xFA","\xF9","\xD9","\u2118","\xDD","\xFD"][j];
                        continue;
                    }
                }
            } else if (i + 8 < len) {
                if (input.charAt(i+8) == ';') {
                    candidateStr = input.substring(i+1,i+8);
                    j = ["alefsym","Epsilon","epsilon","omicron","Omicron","upsilon","Upsilon"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 9;
                        output += ["\u2135","\u0395","\u03B5","\u03BF","\u039F","\u03C5","\u03A5"][j];
                        continue;
                    }
                }
            } else if (i + 9 < len) {
                if (input.charAt(i+9) == ';') {
                    candidateStr = input.substring(i+1,i+9);
                    if (candidateStr == "thetasym") {
                        i += 10;
                        output += "\u03D1";
                        continue;
                    }
                }
            }
        }
        i++;
        output += char;
    }
    return output;
}

var decodeHTML5EntitiesStrict = function(input) {
    if (!input || !input.length) return '';
    var output = '';
    var candidateStr = '';
    var i = 0;
    var j = 0;
    var len = input.length;
    var char;
    while (i < len) {
        char = input.charAt(i);
        if (char == '&') {
            if (i + 5 < len) {
                if (input.charAt(i+5) == ';') {
                    candidateStr = input.substring(i+1,i+5);
                    j = ["a","a","a","D","d","e","e","e","g","g","g","G","g","g","G","G","i","i","I","i","i","l","l","l","l","L","l","L","L","m","M","m","n","n","N","n","O","o","o","P","p","p","P","p","R","r","S","s","w","w","X","x"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 6;
                        output += ["\u223E","\u2061","\u2248","\u2145","\u2146","\u2147","\u2A9A","\u2A99","\u2265","\u2267","\u226B","\u22D9","\u2277",">",">","\u226B","\u2063","\u2148","\u2111","\u2208","\u2062","\u2264","\u2266","\u2276","\u226A","\u22D8","<","<","\u226A","\u2213","\u039C","\u03BC","\u2260","\u220B","\u039D","\u03BD","\u2A54","\u2228","\u24C8","\u03A0","\u03C0","\xB1","\u2ABB","\u227A","\u211C","\u211E","\u2ABC","\u227B","\u2118","\u2240","\u039E","\u03BE"][j];
                        continue;
                    }
                }
            } else if (i + 6 < len) {
                if (input.charAt(i+6) == ';') {
                    candidateStr = input.substring(i+1,i+6);
                    j = ["ac","ac","Ac","ac","Af","af","am","AM","An","an","an","ap","ap","as","Bc","bc","Bf","bf","bn","bo","ca","Ca","cf","Cf","Ch","ch","ci","cu","Cu","Dc","dc","de","De","Df","df","di","di","Do","do","Ec","ec","Ef","ef","eg","el","el","EN","en","Et","et","ET","et","Fc","fc","Ff","ff","ga","Gc","gc","gE","ge","ge","ge","Gf","gf","gg","gl","gl","gl","gn","gn","Ha","hf","Hf","Ic","ic","if","if","If","in","In","Jc","jc","Jf","jf","Kc","kc","Kf","kf","la","la","Lc","lc","lE","le","le","le","Lf","lf","lg","ln","ln","lo","lr","ls","Ls","Ma","ma","Mc","mc","Mf","mf","mh","mi","na","Nc","nc","Nf","nf","ng","ng","nG","nG","ng","ni","ni","nl","nl","nL","nL","nl","No","no","np","ns","nu","Oc","oc","Of","of","og","oh","ol","or","or","pa","Pc","pc","Pf","pf","Ph","ph","pi","pr","pr","Ps","ps","Qf","qf","Rc","rc","re","RE","rf","Rf","Rh","rh","rl","rs","Rs","sc","sc","Sc","sc","Sf","sf","sh","si","sm","so","sq","su","Su","su","Su","su","Su","Ta","Ta","ta","Tc","tc","Tf","tf","to","Uc","uc","Uf","uf","um","Vc","vc","ve","Ve","Vf","vf","Wf","wf","Xf","xf","Yc","yc","ye","Yf","yf","Zc","zc","zf","Zf","zw"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 7;
                        output += ["\u223F","\u223E\u0333","\u0410","\u0430","\uD835\uDD04","\uD835\uDD1E","&","&","\u2A53","\u2227","\u2220","\u2A70","\u224A","*","\u0411","\u0431","\uD835\uDD05","\uD835\uDD1F","=\u20E5","\u22A5","\u2229","\u22D2","\uD835\uDD20","\u212D","\u03A7","\u03C7","\u25CB","\u222A","\u22D3","\u0414","\u0434","\xB0","\u2207","\uD835\uDD07","\uD835\uDD21","\xA8","\xF7","\xA8","\u02D9","\u042D","\u044D","\uD835\uDD08","\uD835\uDD22","\u2A96","\u2113","\u2A95","\u014A","\u014B","\u0397","\u03B7","\xD0","\xF0","\u0424","\u0444","\uD835\uDD09","\uD835\uDD23","\u2A86","\u0413","\u0433","\u2A8C","\u22DB","\u2265","\u2A7E","\uD835\uDD0A","\uD835\uDD24","\u22D9","\u2AA5","\u2A92","\u2AA4","\u2A88","\u2269","^","\uD835\uDD25","\u210C","\u0418","\u0438","\u21D4","\uD835\uDD26","\u2111","\u222B","\u222C","\u0419","\u0439","\uD835\uDD0D","\uD835\uDD27","\u041A","\u043A","\uD835\uDD0E","\uD835\uDD28","\u2A85","\u2AAB","\u041B","\u043B","\u2A8B","\u22DA","\u2264","\u2A7D","\uD835\uDD0F","\uD835\uDD29","\u2A91","\u2A87","\u2268","\u25CA","\u200E","\u21B0","\u21B0","\u2905","\u21A6","\u041C","\u043C","\uD835\uDD10","\uD835\uDD2A","\u2127","\u2223","\u2249","\u041D","\u043D","\uD835\uDD11","\uD835\uDD2B","\u2267\u0338","\u2271","\u22D9\u0338","\u226B\u20D2","\u226F","\u22FC","\u220B","\u2266\u0338","\u2270","\u22D8\u0338","\u226A\u20D2","\u226E","\u2AEC","\xAC","\u2280","\u2281","#","\u041E","\u043E","\uD835\uDD12","\uD835\uDD2C","\u29C1","\u03A9","\u29C0","\u2A5D","\u2A5B","\u2225","\u041F","\u043F","\uD835\uDD13","\uD835\uDD2D","\u03A6","\u03C6","\u03D6","\u2AAF","\u2AB3","\u03A8","\u03C8","\uD835\uDD14","\uD835\uDD2E","\u0420","\u0440","\xAE","\xAE","\uD835\uDD2F","\u211C","\u03A1","\u03C1","\u200F","\u21B1","\u21B1","\u2AB0","\u2AB4","\u0421","\u0441","\uD835\uDD16","\uD835\uDD30","\xAD","\u223C","\u2AAA","/","\u25A1","\u2282","\u22D0","\u2211","\u2211","\u2283","\u22D1","\x09","\u03A4","\u03C4","\u0422","\u0442","\uD835\uDD17","\uD835\uDD31","\u22A4","\u0423","\u0443","\uD835\uDD18","\uD835\uDD32","\xA8","\u0412","\u0432","\u2228","\u22C1","\uD835\uDD19","\uD835\uDD33","\uD835\uDD1A","\uD835\uDD34","\uD835\uDD1B","\uD835\uDD35","\u042B","\u044B","\xA5","\uD835\uDD1C","\uD835\uDD36","\u0417","\u0437","\uD835\uDD37","\u2128","\u200D"][j];
                        continue;
                    }
                }
            } else if (i + 7 < len) {
                if (input.charAt(i+7) == ';') {
                    candidateStr = input.substring(i+1,i+7);
                    j = ["and","and","ang","Aop","aop","api","apo","Asc","asc","Aum","aum","Bar","bbr","Bet","bet","bet","bNo","bno","Bop","bop","box","box","box","box","bsc","Bsc","bsi","bso","bul","bum","cap","Cdo","cdo","cen","CHc","chc","cir","cir","cir","com","con","cop","Cop","cop","COP","Csc","csc","csu","csu","cup","dar","Dar","dAr","das","dHa","dia","DJc","djc","Dop","dop","Dsc","dsc","DSc","dsc","dso","dtr","DZc","dzc","eci","Edo","edo","eDo","ems","ens","Eop","eop","epa","eps","esc","Esc","Esi","esi","Eum","eum","eur","exc","fla","fno","Fop","fop","for","fsc","Fsc","Gdo","gdo","geq","ges","GJc","gjc","gna","gne","Gop","gop","Gsc","gsc","gsi","gtc","gvn","hal","har","hAr","hba","hop","Hop","hsc","Hsc","Ido","IEc","iec","imo","IOc","ioc","Iop","iop","Iot","iot","isc","Isc","isi","Ium","ium","Jop","jop","Jsc","jsc","KHc","khc","KJc","kjc","Kop","kop","Ksc","ksc","lan","Lan","lar","Lar","lAr","lat","lcu","ldc","lds","leq","les","lHa","LJc","ljc","lna","lne","Lop","lop","loz","lpa","lsc","Lsc","lsi","lsq","ltc","ltr","lvn","mac","mal","mal","mlc","mld","Mop","mop","msc","Msc","nan","nap","nbs","nca","ncu","nge","nge","ngt","nGt","nis","NJc","njc","nld","nle","nle","nLt","nmi","nop","Nop","npa","npr","nsc","Nsc","nsc","nsi","nsu","nsu","ntg","ntl","nva","nvg","nvg","nvl","nvl","oas","oci","odi","odo","ogo","oin","omi","Oop","oop","opa","ord","ord","oro","Osc","osc","oso","Oum","oum","par","par","per","phi","plu","pop","Pop","pra","pre","prn","pro","pro","Psc","psc","qin","qop","Qop","Qsc","qsc","quo","QUO","rac","ran","Ran","rar","Rar","rAr","rcu","rdc","rds","rea","rec","rHa","rho","rin","rop","Rop","rpa","rsc","Rsc","rsq","rtr","sca","scn","sdo","sec","sem","sex","SHc","shc","sim","sim","sim","smi","smt","sol","Sop","sop","spa","Sqr","squ","Ssc","ssc","Sta","sta","sub","sub","suc","sun","sup","sup","sup","sup","sup","tbr","tdo","tin","toe","Top","top","tos","tri","Tsc","tsc","TSc","tsc","uar","Uar","uAr","uHa","Uop","uop","ups","Ups","Usc","usc","utr","Uum","uum","var","vAr","vBa","Vba","ver","Ver","Vop","vop","Vsc","vsc","Wop","wop","Wsc","wsc","xca","xcu","xma","xni","Xop","xop","Xsc","xsc","xve","YAc","yac","YIc","yic","Yop","yop","Ysc","ysc","YUc","yuc","yum","Yum","Zdo","zdo","Zet","zet","ZHc","zhc","zop","Zop","Zsc","zsc","zwn"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 8;
                        output += ["\u2A5C","\u2A5A","\u29A4","\uD835\uDD38","\uD835\uDD52","\u224B","'","\uD835\uDC9C","\uD835\uDCB6","\xC4","\xE4","\u2AE7","\u23B5","\u0392","\u03B2","\u2136","\u2AED","\u2310","\uD835\uDD39","\uD835\uDD53","\u2500","\u2550","\u2502","\u2551","\uD835\uDCB7","\u212C","\u223D","\\","\u2022","\u224E","\u2229\uFE00","\u010A","\u010B","\xA2","\u0427","\u0447","\u02C6","\u29C3","\u2257","\u2201","\u2245","\uD835\uDD54","\u2102","\xA9","\xA9","\uD835\uDC9E","\uD835\uDCB8","\u2ACF","\u2AD0","\u222A\uFE00","\u2193","\u21A1","\u21D3","\u2010","\u2965","\u22C4","\u0402","\u0452","\uD835\uDD3B","\uD835\uDD55","\uD835\uDC9F","\uD835\uDCB9","\u0405","\u0455","\u29F6","\u25BF","\u040F","\u045F","\u2256","\u0116","\u0117","\u2251","\u2003","\u2002","\uD835\uDD3C","\uD835\uDD56","\u22D5","\u03B5","\u212F","\u2130","\u2A73","\u2242","\xCB","\xEB","\u20AC","!","\u266D","\u0192","\uD835\uDD3D","\uD835\uDD57","\u22D4","\uD835\uDCBB","\u2131","\u0120","\u0121","\u2267","\u22DB\uFE00","\u0403","\u0453","\u2A8A","\u2A88","\uD835\uDD3E","\uD835\uDD58","\uD835\uDCA2","\u210A","\u2273","\u2AA7","\u2269\uFE00","\xBD","\u2194","\u21D4","\u210F","\uD835\uDD59","\u210D","\uD835\uDCBD","\u210B","\u0130","\u0415","\u0435","\u22B7","\u0401","\u0451","\uD835\uDD40","\uD835\uDD5A","\u0399","\u03B9","\uD835\uDCBE","\u2110","\u2208","\xCF","\xEF","\uD835\uDD41","\uD835\uDD5B","\uD835\uDCA5","\uD835\uDCBF","\u0425","\u0445","\u040C","\u045C","\uD835\uDD42","\uD835\uDD5C","\uD835\uDCA6","\uD835\uDCC0","\u27E8","\u27EA","\u2190","\u219E","\u21D0","\u2AAD","{","\u2936","\u21B2","\u2266","\u22DA\uFE00","\u2962","\u0409","\u0459","\u2A89","\u2A87","\uD835\uDD43","\uD835\uDD5D","\u29EB","(","\uD835\uDCC1","\u2112","\u2272","[","\u2AA6","\u25C3","\u2268\uFE00","\xAF","\u2642","\u2720","\u2ADB","\u2026","\uD835\uDD44","\uD835\uDD5E","\uD835\uDCC2","\u2133","\u2220\u20D2","\u2A70\u0338","\xA0","\u2A43","\u2A42","\u2271","\u2A7E\u0338","\u226F","\u226B\u0338","\u22FA","\u040A","\u045A","\u2025","\u2270","\u2A7D\u0338","\u226A\u0338","\u2224","\uD835\uDD5F","\u2115","\u2226","\u2AAF\u0338","\u2AB0\u0338","\uD835\uDCA9","\uD835\uDCC3","\u2241","\u2284","\u2285","\u2279","\u2278","\u224D\u20D2","\u2265\u20D2",">\u20D2","\u2264\u20D2","<\u20D2","\u229B","\u229A","\u2A38","\u2299","\u02DB","\u222E","\u29B6","\uD835\uDD46","\uD835\uDD60","\u29B7","\xAA","\xBA","\u2A56","\uD835\uDCAA","\u2134","\u2298","\xD6","\xF6","\xB6","\u2202","\u22A5","\u03D5","+","\uD835\uDD61","\u2119","\u2AB7","\u227A","\u2AB5","\u220F","\u221D","\uD835\uDCAB","\uD835\uDCC5","\u2A0C","\uD835\uDD62","\u211A","\uD835\uDCAC","\uD835\uDCC6","\"","\"","\u223D\u0331","\u27E9","\u27EB","\u2192","\u21A0","\u21D2","}","\u2937","\u21B3","\u211C","\u25AD","\u2964","\u03F1","\u02DA","\uD835\uDD63","\u211D",")","\uD835\uDCC7","\u211B","]","\u25B9","\u2AB8","\u2AB6","\u22C5","\xA7",";","\u2736","\u0428","\u0448","\u2243","\u2A9E","\u2A9D","\u2223","\u2AAC","\u29C4","\uD835\uDD4A","\uD835\uDD64","\u2225","\u221A","\u25AA","\uD835\uDCAE","\uD835\uDCC8","\u22C6","\u2606","\u2AC5","\u2286","\u227B","\u266A","\xB9","\xB2","\xB3","\u2AC6","\u2287","\u23B4","\u20DB","\u222D","\u2928","\uD835\uDD4B","\uD835\uDD65","\u2929","\u225C","\uD835\uDCAF","\uD835\uDCC9","\u0426","\u0446","\u2191","\u219F","\u21D1","\u2963","\uD835\uDD4C","\uD835\uDD66","\u03C5","\u03D2","\uD835\uDCB0","\uD835\uDCCA","\u25B5","\xDC","\xFC","\u2195","\u21D5","\u2AE8","\u2AEB","|","\u2016","\uD835\uDD4D","\uD835\uDD67","\uD835\uDCB1","\uD835\uDCCB","\uD835\uDD4E","\uD835\uDD68","\uD835\uDCB2","\uD835\uDCCC","\u22C2","\u22C3","\u27FC","\u22FB","\uD835\uDD4F","\uD835\uDD69","\uD835\uDCB3","\uD835\uDCCD","\u22C1","\u042F","\u044F","\u0407","\u0457","\uD835\uDD50","\uD835\uDD6A","\uD835\uDCB4","\uD835\uDCCE","\u042E","\u044E","\xFF","\u0178","\u017B","\u017C","\u0396","\u03B6","\u0416","\u0436","\uD835\uDD6B","\u2124","\uD835\uDCB5","\uD835\uDCCF","\u200C"][j];
                        continue;
                    }
                }
            } else if (i + 8 < len) {
                if (input.charAt(i+8) == ';') {
                    candidateStr = input.substring(i+1,i+8);
                    j = ["Acir","acir","acut","AEli","aeli","alep","Alph","alph","Amac","amac","amal","angl","angr","angs","Aogo","aogo","Arin","arin","asym","awin","bcon","bdqu","beps","blan","blk1","blk1","blk3","bloc","boxd","boxd","boxD","boxD","boxd","boxd","boxD","boxD","boxh","boxH","boxh","boxH","boxh","boxH","boxh","boxH","boxu","boxu","boxU","boxU","boxu","boxu","boxU","boxU","boxv","boxv","boxV","boxV","boxv","boxv","boxV","boxV","boxv","boxv","boxV","boxV","brev","Brev","bsem","bsim","bsol","bump","bump","care","caro","ccap","Ccir","ccir","ccup","cedi","chec","club","colo","Colo","comm","crar","cros","Cros","csub","csup","ctdo","cuep","cues","cupo","cuve","cuwe","cwin","Dash","dash","dbla","ddar","Delt","delt","dhar","dhar","diam","disi","dote","dtdo","dtri","duar","duha","Ecir","ecir","eDDo","efDo","Emac","emac","empt","Eogo","eogo","eplu","epsi","eqsi","Equa","equi","erar","erDo","esdo","exis","ffli","fili","fjli","flli","fltn","fork","fras","frow","Gamm","gamm","Gcir","gcir","gesc","gime","gneq","gnsi","grav","gsim","gsim","gtci","gtdo","Hace","harr","Hcir","hcir","hoar","Icir","icir","iexc","iiin","iiot","IJli","ijli","Imac","imac","imag","imat","impe","infi","Iogo","iogo","ipro","isin","isin","isin","Iukc","iukc","Jcir","jcir","jmat","Jukc","jukc","Kapp","kapp","lAar","lang","laqu","larr","late","lbar","lBar","lbbr","lbrk","lcei","ldqu","lesc","lhar","lhar","lhbl","llar","lltr","lneq","lnsi","loan","loar","lobr","lopa","lrar","lrha","lrtr","lsim","lsim","lsqu","ltci","ltdo","ltri","ltri","mdas","mDDo","micr","minu","muma","nabl","napi","napo","natu","nbum","ncon","ndas","near","neAr","nedo","nesi","ngeq","ngsi","nhar","nhAr","nhpa","nlar","nlAr","nleq","nles","nlsi","nltr","noti","notn","npar","npre","nrar","nrAr","nrtr","nsim","nsmi","nspa","nsub","nsub","nsuc","nsup","nsup","nums","nvsi","nwar","nwAr","Ocir","ocir","odas","OEli","oeli","ofci","ohba","olar","olci","olin","Omac","omac","Omeg","omeg","oper","oplu","orar","orde","ovba","pars","phon","plus","plus","poun","prcu","prim","Prim","prna","prsi","ques","rAar","radi","rang","rang","raqu","rarr","rarr","rarr","rati","rbar","rBar","RBar","rbbr","rbrk","rcei","rdqu","real","rhar","rhar","rlar","rlha","rnmi","roan","roar","robr","ropa","rrar","rsqu","rtri","rtri","sbqu","sccu","Scir","scir","scna","scsi","sdot","sdot","sear","seAr","setm","shar","Sigm","sigm","sime","simg","siml","simn","slar","smil","smte","sqca","sqcu","sqsu","sqsu","srar","star","strn","subn","subn","supn","supn","swar","swAr","szli","Thet","thet","thka","THOR","thor","tild","Tild","time","trad","TRAD","tris","TSHc","tshc","twix","Ubrc","ubrc","Ucir","ucir","udar","udha","uhar","uhar","uhbl","ultr","Umac","umac","Unio","Uogo","uogo","uplu","upsi","UpTe","Urin","urin","urtr","utdo","utri","uuar","varp","vBar","vdas","vDas","Vdas","VDas","veee","vltr","vnsu","vnsu","vpro","vrtr","Wcir","wcir","wedg","Wedg","xcir","xdtr","xhar","xhAr","xlar","xlAr","xodo","xrar","xrAr","xutr","Ycir","ycir"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 9;
                        output += ["\xC2","\xE2","\xB4","\xC6","\xE6","\u2135","\u0391","\u03B1","\u0100","\u0101","\u2A3F","\u2220","\u221F","\xC5","\u0104","\u0105","\xC5","\xE5","\u2248","\u2A11","\u224C","\u201E","\u03F6","\u2423","\u2592","\u2591","\u2593","\u2588","\u2510","\u2555","\u2556","\u2557","\u250C","\u2552","\u2553","\u2554","\u252C","\u2564","\u2565","\u2566","\u2534","\u2567","\u2568","\u2569","\u2518","\u255B","\u255C","\u255D","\u2514","\u2558","\u2559","\u255A","\u253C","\u256A","\u256B","\u256C","\u2524","\u2561","\u2562","\u2563","\u251C","\u255E","\u255F","\u2560","\u02D8","\u02D8","\u204F","\u22CD","\u29C5","\u2AAE","\u224F","\u2041","\u02C7","\u2A4D","\u0108","\u0109","\u2A4C","\xB8","\u2713","\u2663",":","\u2237",",","\u21B5","\u2717","\u2A2F","\u2AD1","\u2AD2","\u22EF","\u22DE","\u22DF","\u2A45","\u22CE","\u22CF","\u2231","\u2AE4","\u22A3","\u02DD","\u21CA","\u0394","\u03B4","\u21C3","\u21C2","\u2666","\u22F2","\u2250","\u22F1","\u25BE","\u21F5","\u296F","\xCA","\xEA","\u2A77","\u2252","\u0112","\u0113","\u2205","\u0118","\u0119","\u2A71","\u03F5","\u2242","\u2A75","\u2261","\u2971","\u2253","\u2250","\u2203","\uFB00","\uFB01","fj","\uFB02","\u25B1","\u2AD9","\u2044","\u2322","\u0393","\u03B3","\u011C","\u011D","\u2AA9","\u2137","\u2269","\u22E7","`","\u2A8E","\u2A90","\u2A7A","\u22D7","\u02C7","\u21AD","\u0124","\u0125","\u21FF","\xCE","\xEE","\xA1","\u222D","\u2129","\u0132","\u0133","\u012A","\u012B","\u2111","\u0131","\u01B5","\u221E","\u012E","\u012F","\u2A3C","\u22F9","\u22F4","\u2208","\u0406","\u0456","\u0134","\u0135","\u0237","\u0404","\u0454","\u039A","\u03BA","\u21DA","\u2991","\xAB","\u21E4","\u2AAD\uFE00","\u290C","\u290E","\u2772","\u298B","\u2308","\u201C","\u2AA8","\u21BD","\u21BC","\u2584","\u21C7","\u25FA","\u2268","\u22E6","\u27EC","\u21FD","\u27E6","\u2985","\u21C6","\u21CB","\u22BF","\u2A8D","\u2A8F","\u2018","\u2A79","\u22D6","\u22B4","\u25C2","\u2014","\u223A","\xB5","\u2212","\u22B8","\u2207","\u224B\u0338","\u0149","\u266E","\u224E\u0338","\u2247","\u2013","\u2197","\u21D7","\u2250\u0338","\u2242\u0338","\u2267\u0338","\u2275","\u21AE","\u21CE","\u2AF2","\u219A","\u21CD","\u2266\u0338","\u226E","\u2274","\u22EA","\u2209","\u220C","\u2202\u0338","\u2280","\u219B","\u21CF","\u22EB","\u2244","\u2224","\u2226","\u2AC5\u0338","\u2288","\u2281","\u2AC6\u0338","\u2289","\u2007","\u223C\u20D2","\u2196","\u21D6","\xD4","\xF4","\u229D","\u0152","\u0153","\u29BF","\u29B5","\u21BA","\u29BE","\u203E","\u014C","\u014D","\u03A9","\u03C9","\u29B9","\u2295","\u21BB","\u2134","\u233D","\u2AFD","\u260E","\u229E","\u2A72","\xA3","\u227C","\u2032","\u2033","\u2AB9","\u227E","?","\u21DB","\u221A","\u2992","\u29A5","\xBB","\u21E5","\u2933","\u219D","\u2236","\u290D","\u290F","\u2910","\u2773","\u298C","\u2309","\u201D","\u211D","\u21C1","\u21C0","\u21C4","\u21CC","\u2AEE","\u27ED","\u21FE","\u27E7","\u2986","\u21C9","\u2019","\u22B5","\u25B8","\u201A","\u227D","\u015C","\u015D","\u2ABA","\u227F","\u22A1","\u2A66","\u2198","\u21D8","\u2216","\u266F","\u03A3","\u03C3","\u2243","\u2AA0","\u2A9F","\u2246","\u2190","\u2323","\u2AAC\uFE00","\u2293","\u2294","\u228F","\u2290","\u2192","\u2605","\xAF","\u2ACB","\u228A","\u2ACC","\u228B","\u2199","\u21D9","\xDF","\u0398","\u03B8","\u2248","\xDE","\xFE","\u02DC","\u223C","\xD7","\u2122","\u2122","\u29CD","\u040B","\u045B","\u226C","\u040E","\u045E","\xDB","\xFB","\u21C5","\u296E","\u21BF","\u21BE","\u2580","\u25F8","\u016A","\u016B","\u22C3","\u0172","\u0173","\u228E","\u03D2","\u22A5","\u016E","\u016F","\u25F9","\u22F0","\u25B4","\u21C8","\u03D6","\u2AE9","\u22A2","\u22A8","\u22A9","\u22AB","\u225A","\u22B2","\u2282\u20D2","\u2283\u20D2","\u221D","\u22B3","\u0174","\u0175","\u2227","\u22C0","\u25EF","\u25BD","\u27F7","\u27FA","\u27F5","\u27F8","\u2A00","\u27F6","\u27F9","\u25B3","\u0176","\u0177"][j];
                        continue;
                    }
                }
            } else if (i + 9 < len) {
                if (input.charAt(i+9) == ';') {
                    candidateStr = input.substring(i+1,i+9);
                    j = ["Aacut","aacut","Abrev","abrev","Agrav","agrav","andan","angms","angsp","apaci","appro","Assig","Atild","atild","barve","barwe","Barwe","becau","berno","bigca","bigcu","bigve","bkaro","botto","bowti","boxbo","bprim","brvba","bulle","Bumpe","bumpe","Cacut","cacut","capan","capca","capcu","capdo","Ccaro","ccaro","Ccedi","ccedi","circe","cirmi","Colon","colon","comma","compf","conin","Conin","copro","copys","cular","cupca","CupCa","cupcu","cupdo","curar","curre","cylct","dagge","Dagge","dalet","Dcaro","dcaro","dfish","divid","divon","dlcor","dlcro","dolla","DotDo","drcor","drcro","Dstro","dstro","Eacut","eacut","easte","Ecaro","ecaro","ecolo","Egrav","egrav","egsdo","elsdo","empty","emsp1","emsp1","epars","eqcir","equal","eques","Exist","femal","ffili","fflli","foral","ForAl","frac1","frac1","frac1","frac1","frac1","frac1","frac2","frac2","frac3","frac3","frac3","frac4","frac5","frac5","frac7","gacut","Gamma","gamma","Gbrev","gbrev","Gcedi","gesdo","gesle","gtlPa","gtrar","gtrdo","gtrsi","hairs","hamil","HARDc","hardc","heart","helli","herco","homth","horba","hslas","Hstro","hstro","hybul","hyphe","Iacut","iacut","Igrav","igrav","iiiin","iinfi","incar","inodo","intca","iques","isins","Itild","itild","Jserc","jserc","kappa","Kcedi","kcedi","kgree","Lacut","lacut","lagra","Lambd","lambd","langl","larrf","larrh","larrl","larrp","larrt","latai","lAtai","lbrac","lbrac","Lcaro","lcaro","Lcedi","lcedi","ldquo","lesdo","lesge","lfish","lfloo","lharu","llhar","Lmido","lmido","lmous","loplu","lowas","lowba","lparl","lrhar","lsaqu","lsquo","Lstro","lstro","lthre","ltime","ltlar","ltrPa","mapst","marke","mcomm","midas","midci","middo","minus","minus","mnplu","model","mstpo","Nacut","nacut","nbump","Ncaro","ncaro","Ncedi","ncedi","nearh","nequi","nesea","nexis","nltri","notin","npars","nprcu","nrarr","nrarr","nrtri","nsccu","nsime","Ntild","ntild","numer","nvdas","nvDas","nVdas","nVDas","nvHar","nvlAr","nvrAr","nwarh","nwnea","Oacut","oacut","Odbla","odbla","odsol","Ograv","ograv","ominu","origo","Oslas","oslas","Otild","otild","Otime","otime","parsi","percn","perio","permi","phmma","planc","plank","plusd","plusd","plusm","prece","prime","prnsi","propt","prure","puncs","qprim","Racut","racut","rangl","rarra","rarrf","rarrh","rarrl","rarrp","Rarrt","rarrt","ratai","rAtai","rbrac","rbrac","Rcaro","rcaro","Rcedi","rcedi","rdquo","rfish","rfloo","rharu","rmous","roplu","rparg","rsaqu","rsquo","rthre","rtime","Sacut","sacut","Scaro","scaro","Scedi","scedi","scnsi","searh","seswa","sfrow","SHCHc","shchc","sigma","sigma","simdo","smash","SOFTc","softc","solba","spade","sqcap","sqcup","sqsub","sqsup","squar","Squar","squar","ssetm","ssmil","sstar","subdo","subse","Subse","subsi","subsu","subsu","succe","supdo","supse","Supse","supsi","supsu","supsu","swarh","swnwa","targe","Tcaro","tcaro","Tcedi","tcedi","telre","there","theta","thins","thksi","times","times","topbo","topci","tprim","trido","Tstro","tstro","Uacut","uacut","Ubrev","ubrev","Udbla","udbla","ufish","Ugrav","ugrav","ulcor","ulcro","urcor","urcro","Utild","utild","vangr","varph","varrh","Vdash","veeba","velli","verba","Verba","vsubn","vsubn","vsupn","vsupn","Vvdas","wedba","wedge","weier","wreat","xoplu","xotim","xsqcu","xuplu","xwedg","Yacut","yacut","Zacut","zacut","Zcaro","zcaro","zeetr"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 10;
                        output += ["\xC1","\xE1","\u0102","\u0103","\xC0","\xE0","\u2A55","\u2221","\u2222","\u2A6F","\u2248","\u2254","\xC3","\xE3","\u22BD","\u2305","\u2306","\u2235","\u212C","\u22C2","\u22C3","\u22C1","\u290D","\u22A5","\u22C8","\u29C9","\u2035","\xA6","\u2022","\u224E","\u224F","\u0106","\u0107","\u2A44","\u2A4B","\u2A47","\u2A40","\u010C","\u010D","\xC7","\xE7","\u2257","\u2AEF","\u2A74","\u2254","@","\u2218","\u222E","\u222F","\u2210","\u2117","\u21B6","\u2A46","\u224D","\u2A4A","\u228D","\u21B7","\xA4","\u232D","\u2020","\u2021","\u2138","\u010E","\u010F","\u297F","\xF7","\u22C7","\u231E","\u230D","$","\u20DC","\u231F","\u230C","\u0110","\u0111","\xC9","\xE9","\u2A6E","\u011A","\u011B","\u2255","\xC8","\xE8","\u2A98","\u2A97","\u2205","\u2004","\u2005","\u29E3","\u2256","=","\u225F","\u2203","\u2640","\uFB03","\uFB04","\u2200","\u2200","\xBD","\u2153","\xBC","\u2155","\u2159","\u215B","\u2154","\u2156","\xBE","\u2157","\u215C","\u2158","\u215A","\u215D","\u215E","\u01F5","\u03DC","\u03DD","\u011E","\u011F","\u0122","\u2A80","\u2A94","\u2995","\u2978","\u22D7","\u2273","\u200A","\u210B","\u042A","\u044A","\u2665","\u2026","\u22B9","\u223B","\u2015","\u210F","\u0126","\u0127","\u2043","\u2010","\xCD","\xED","\xCC","\xEC","\u2A0C","\u29DC","\u2105","\u0131","\u22BA","\xBF","\u22F3","\u0128","\u0129","\u0408","\u0458","\u03F0","\u0136","\u0137","\u0138","\u0139","\u013A","\u2112","\u039B","\u03BB","\u27E8","\u291D","\u21A9","\u21AB","\u2939","\u21A2","\u2919","\u291B","{","[","\u013D","\u013E","\u013B","\u013C","\u201E","\u2A7F","\u2A93","\u297C","\u230A","\u296A","\u296B","\u013F","\u0140","\u23B0","\u2A2D","\u2217","_","\u2993","\u296D","\u2039","\u201A","\u0141","\u0142","\u22CB","\u22C9","\u2976","\u2996","\u21A6","\u25AE","\u2A29","*","\u2AF0","\xB7","\u229F","\u2238","\u2213","\u22A7","\u223E","\u0143","\u0144","\u224F\u0338","\u0147","\u0148","\u0145","\u0146","\u2924","\u2262","\u2928","\u2204","\u22EC","\u22F9\u0338","\u2AFD\u20E5","\u22E0","\u2933\u0338","\u219D\u0338","\u22ED","\u22E1","\u2244","\xD1","\xF1","\u2116","\u22AC","\u22AD","\u22AE","\u22AF","\u2904","\u2902","\u2903","\u2923","\u2927","\xD3","\xF3","\u0150","\u0151","\u29BC","\xD2","\xF2","\u2296","\u22B6","\xD8","\xF8","\xD5","\xF5","\u2A37","\u2297","\u2AF3","%",".","\u2030","\u2133","\u210F","\u210F","\u2214","\u2A25","\xB1","\u2AAF","\u2119","\u22E8","\u221D","\u22B0","\u2008","\u2057","\u0154","\u0155","\u27E9","\u2975","\u291E","\u21AA","\u21AC","\u2945","\u2916","\u21A3","\u291A","\u291C","}","]","\u0158","\u0159","\u0156","\u0157","\u201D","\u297D","\u230B","\u296C","\u23B1","\u2A2E","\u2994","\u203A","\u2019","\u22CC","\u22CA","\u015A","\u015B","\u0160","\u0161","\u015E","\u015F","\u22E9","\u2925","\u2929","\u2322","\u0429","\u0449","\u03C2","\u03C2","\u2A6A","\u2A33","\u042C","\u044C","\u233F","\u2660","\u2293\uFE00","\u2294\uFE00","\u2291","\u2292","\u25A1","\u25A1","\u25AA","\u2216","\u2323","\u22C6","\u2ABD","\u2282","\u22D0","\u2AC7","\u2AD5","\u2AD3","\u2AB0","\u2ABE","\u2283","\u22D1","\u2AC8","\u2AD4","\u2AD6","\u2926","\u292A","\u2316","\u0164","\u0165","\u0162","\u0163","\u2315","\u2234","\u03D1","\u2009","\u223C","\u22A0","\u2A30","\u2336","\u2AF1","\u2034","\u25EC","\u0166","\u0167","\xDA","\xFA","\u016C","\u016D","\u0170","\u0171","\u297E","\xD9","\xF9","\u231C","\u230F","\u231D","\u230E","\u0168","\u0169","\u299C","\u03D5","\u03F1","\u2AE6","\u22BB","\u22EE","|","\u2016","\u2ACB\uFE00","\u228A\uFE00","\u2ACC\uFE00","\u228B\uFE00","\u22AA","\u2A5F","\u2259","\u2118","\u2240","\u2A01","\u2A02","\u2A06","\u2A04","\u22C0","\xDD","\xFD","\u0179","\u017A","\u017D","\u017E","\u2128"][j];
                        continue;
                    }
                }
            } else if (i + 10 < len) {
                if (input.charAt(i+10) == ';') {
                    candidateStr = input.substring(i+1,i+10);
                    j = ["alefsy","angrtv","angzar","asympe","backsi","becaus","Becaus","bempty","betwee","bigcir","bigodo","bigsta","bnequi","boxplu","Cayley","Cconin","ccupss","Cedill","cempty","cirsci","colone","congdo","cudarr","cudarr","cularr","curarr","dbkaro","ddagge","ddotse","dempty","diamon","Diamon","digamm","dotplu","DownTe","dwangl","Elemen","Epsilo","epsilo","eqcolo","equivD","gesdot","gtques","gtrles","harrci","Implie","intpro","isindo","larrbf","larrsi","lbrksl","lbrksl","ldrdha","LeftTe","lesdot","lessdo","lessgt","lesssi","lotime","lozeng","ltques","luruha","maltes","minusd","nappro","natura","nearro","NewLin","nexist","NoBrea","notinv","notinv","notinv","NotLes","notniv","notniv","notniv","npolin","nprece","nsqsub","nsqsup","nsubse","nsucce","nsupse","nvinfi","nvltri","nvrtri","nwarro","olcros","Omicro","omicro","ordero","orslop","OverBa","perten","planck","plusci","plussi","plustw","precsi","Produc","quatin","queste","rarrbf","rarrsi","rbrksl","rbrksl","rdldha","realin","rotime","ruluha","searro","simplu","simrar","subedo","submul","subplu","subrar","succsi","supdsu","supedo","suphso","suphsu","suplar","supmul","supplu","swarro","topfor","triplu","tritim","uparro","UpArro","Uparro","Upsilo","upsilo","uwangl","vzigza","zigrar"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 11;
                        output += ["\u2135","\u22BE","\u237C","\u224D","\u223D","\u2235","\u2235","\u29B0","\u226C","\u25EF","\u2A00","\u2605","\u2261\u20E5","\u229E","\u212D","\u2230","\u2A50","\xB8","\u29B2","\u29C2","\u2254","\u2A6D","\u2938","\u2935","\u293D","\u293C","\u290F","\u2021","\u2A77","\u29B1","\u22C4","\u22C4","\u03DD","\u2214","\u22A4","\u29A6","\u2208","\u0395","\u03B5","\u2255","\u2A78","\u2A82","\u2A7C","\u2277","\u2948","\u21D2","\u2A3C","\u22F5","\u291F","\u2973","\u298F","\u298D","\u2967","\u22A3","\u2A81","\u22D6","\u2276","\u2272","\u2A34","\u25CA","\u2A7B","\u2966","\u2720","\u2A2A","\u2249","\u266E","\u2197","\x0A","\u2204","\u2060","\u2209","\u22F7","\u22F6","\u226E","\u220C","\u22FE","\u22FD","\u2A14","\u2AAF\u0338","\u22E2","\u22E3","\u2282\u20D2","\u2AB0\u0338","\u2283\u20D2","\u29DE","\u22B4\u20D2","\u22B5\u20D2","\u2196","\u29BB","\u039F","\u03BF","\u2134","\u2A57","\u203E","\u2031","\u210E","\u2A22","\u2A26","\u2A27","\u227E","\u220F","\u2A16","\u225F","\u2920","\u2974","\u298E","\u2990","\u2969","\u211B","\u2A35","\u2968","\u2198","\u2A24","\u2972","\u2AC3","\u2AC1","\u2ABF","\u2979","\u227F","\u2AD8","\u2AC4","\u27C9","\u2AD7","\u297B","\u2AC2","\u2AC0","\u2199","\u2ADA","\u2A39","\u2A3B","\u2191","\u2191","\u21D1","\u03A5","\u03C5","\u29A7","\u299A","\u21DD"][j];
                        continue;
                    }
                }
            } else if (i + 11 < len) {
                if (input.charAt(i+11) == ';') {
                    candidateStr = input.substring(i+1,i+11);
                    j = ["andslop","angmsda","angmsda","angmsda","angmsda","angmsda","angmsda","angmsda","angmsda","angrtvb","approxe","awconin","backcon","barwedg","bbrktbr","bigoplu","bigsqcu","biguplu","bigwedg","boxminu","boxtime","bsolhsu","capbrcu","circled","circled","cirfnin","clubsui","cupbrca","curlyve","cwconin","DDotrah","doteqdo","DotEqua","dotminu","drbkaro","dzigrar","elinter","emptyse","eqvpars","fpartin","geqslan","gesdoto","gnappro","hksearo","hkswaro","imaglin","imagpar","infinti","integer","Integra","interca","intlarh","laempty","ldrusha","leqslan","lesdoto","LessLes","llcorne","lnappro","lrcorne","lurdsha","mapstou","multima","natural","ncongdo","NotEqua","notindo","NotTild","otimesa","paralle","Partial","plusaci","pointin","Precede","precneq","precnsi","profala","proflin","profsur","raempty","realpar","RightTe","rppolin","rtriltr","scpolin","setminu","shortmi","smepars","sqsubse","sqsupse","subsete","Succeed","succneq","succnsi","SuchTha","Superse","supsete","thetasy","thicksi","timesba","triangl","triminu","trpeziu","Uarroci","ulcorne","UnderBa","urcorne","varkapp","varsigm","varthet"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 12;
                        output += ["\u2A58","\u29A8","\u29A9","\u29AA","\u29AB","\u29AC","\u29AD","\u29AE","\u29AF","\u299D","\u224A","\u2233","\u224C","\u2305","\u23B6","\u2A01","\u2A06","\u2A04","\u22C0","\u229F","\u22A0","\u27C8","\u2A49","\xAE","\u24C8","\u2A10","\u2663","\u2A48","\u22CE","\u2232","\u2911","\u2251","\u2250","\u2238","\u2910","\u27FF","\u23E7","\u2205","\u29E5","\u2A0D","\u2A7E","\u2A84","\u2A8A","\u2925","\u2926","\u2110","\u2111","\u29DD","\u2124","\u222B","\u22BA","\u2A17","\u29B4","\u294B","\u2A7D","\u2A83","\u2AA1","\u231E","\u2A89","\u231F","\u294A","\u21A5","\u22B8","\u2115","\u2A6D\u0338","\u2260","\u22F5\u0338","\u2241","\u2A36","\u2225","\u2202","\u2A23","\u2A15","\u227A","\u2AB5","\u22E8","\u232E","\u2312","\u2313","\u29B3","\u211C","\u22A2","\u2A12","\u29CE","\u2A13","\u2216","\u2223","\u29E4","\u228F","\u2290","\u2286","\u227B","\u2AB6","\u22E9","\u220B","\u2283","\u2287","\u03D1","\u223C","\u2A31","\u25B5","\u2A3A","\u23E2","\u2949","\u231C","_","\u231D","\u03F0","\u03C2","\u03D1"][j];
                        continue;
                    }
                }
            } else if (i + 12 < len) {
                if (input.charAt(i+12) == ';') {
                    candidateStr = input.substring(i+1,i+12);
                    j = ["backprim","backsime","Backslas","bigotime","centerdo","CenterDo","checkmar","CircleDo","complexe","Congruen","Coproduc","dotsquar","DoubleDo","downarro","DownArro","Downarro","DownBrev","gtrappro","gtreqles","gvertneq","heartsui","HumpEqua","leftarro","LeftArro","Leftarro","LeftFloo","lesseqgt","LessTild","lvertneq","Mellintr","MinusPlu","ngeqslan","nleqslan","NotCupCa","NotExist","NotSubse","nparalle","nshortmi","nsubsete","nsupsete","OverBrac","pitchfor","PlusMinu","rational","spadesui","subseteq","subsetne","supseteq","supsetne","therefor","Therefor","ThinSpac","triangle","TripleDo","UnionPlu","varpropt"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 13;
                        output += ["\u2035","\u22CD","\u2216","\u2A02","\xB7","\xB7","\u2713","\u2299","\u2102","\u2261","\u2210","\u22A1","\xA8","\u2193","\u2193","\u21D3","\u0311","\u2A86","\u22DB","\u2269\uFE00","\u2665","\u224F","\u2190","\u2190","\u21D0","\u230A","\u22DA","\u2272","\u2268\uFE00","\u2133","\u2213","\u2A7E\u0338","\u2A7D\u0338","\u226D","\u2204","\u2282\u20D2","\u2226","\u2224","\u2288","\u2289","\u23DE","\u22D4","\xB1","\u211A","\u2660","\u2AC5","\u228A","\u2AC6","\u228B","\u2234","\u2234","\u2009","\u225C","\u20DB","\u228E","\u221D"][j];
                        continue;
                    }
                }
            } else if (i + 13 < len) {
                if (input.charAt(i+13) == ';') {
                    candidateStr = input.substring(i+1,i+13);
                    j = ["Bernoulli","circledas","CirclePlu","complemen","curlywedg","eqslantgt","EqualTild","Fouriertr","gtreqqles","Imaginary","Laplacetr","LeftVecto","lessappro","lesseqqgt","Lleftarro","lmoustach","longmapst","mapstodow","mapstolef","nleftarro","nLeftarro","NotElemen","NotGreate","nsubseteq","nsupseteq","precappro","Proportio","rightarro","RightArro","Rightarro","RightFloo","rmoustach","sqsubsete","sqsupsete","subsetneq","succappro","supsetneq","ThickSpac","TildeEqua","TildeTild","UnderBrac","UpArrowBa","UpTeeArro","upuparrow","varepsilo","varnothin"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 14;
                        output += ["\u212C","\u229B","\u2295","\u2201","\u22CF","\u2A96","\u2242","\u2131","\u2A8C","\u2148","\u2112","\u21BC","\u2A85","\u2A8B","\u21DA","\u23B0","\u27FC","\u21A7","\u21A4","\u219A","\u21CD","\u2209","\u226F","\u2AC5\u0338","\u2AC6\u0338","\u2AB7","\u2237","\u2192","\u2192","\u21D2","\u230B","\u23B1","\u2291","\u2292","\u2ACB","\u2AB8","\u2ACC","\u205F\u200A","\u2243","\u2248","\u23DF","\u2912","\u21A5","\u21C8","\u03F5","\u2205"][j];
                        continue;
                    }
                }
            } else if (i + 14 < len) {
                if (input.charAt(i+14) == ';') {
                    candidateStr = input.substring(i+1,i+14);
                    j = ["backepsilo","blacksquar","circledcir","circleddas","CircleMinu","CircleTime","curlyeqpre","curlyeqsuc","diamondsui","eqslantles","Equilibriu","expectatio","GreaterLes","LeftCeilin","LessGreate","MediumSpac","NotLessLes","NotPrecede","NotSucceed","NotSuperse","nrightarro","nRightarro","OverBracke","preccurlye","precnappro","quaternion","RightVecto","Rrightarro","RuleDelaye","SmallCircl","SquareUnio","straightph","SubsetEqua","succcurlye","succnappro","thickappro","updownarro","UpDownArro","Updownarro","VerticalBa"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 15;
                        output += ["\u03F6","\u25AA","\u229A","\u229D","\u2296","\u2297","\u22DE","\u22DF","\u2666","\u2A95","\u21CC","\u2130","\u2277","\u2308","\u2276","\u205F","\u226A\u0338","\u2280","\u2281","\u2283\u20D2","\u219B","\u21CF","\u23B4","\u227C","\u2AB9","\u210D","\u21C0","\u21DB","\u29F4","\u2218","\u2294","\u03D5","\u2286","\u227D","\u2ABA","\u2248","\u2195","\u2195","\u21D5","\u2223"][j];
                        continue;
                    }
                }
            } else if (i + 15 < len) {
                if (input.charAt(i+15) == ';') {
                    candidateStr = input.substring(i+1,i+15);
                    j = ["blacklozeng","DownArrowBa","DownTeeArro","exponential","Exponential","GreaterEqua","GreaterTild","HilbertSpac","HumpDownHum","Intersectio","LeftArrowBa","LeftTeeArro","LeftTriangl","LeftUpVecto","NotCongruen","NotHumpEqua","NotLessEqua","NotLessTild","Proportiona","RightCeilin","risingdotse","RoundImplie","ShortUpArro","SquareSubse","triangledow","trianglelef","UnderBracke","varsubsetne","varsupsetne","VerticalLin"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 16;
                        output += ["\u29EB","\u2913","\u21A7","\u2147","\u2147","\u2265","\u2273","\u210B","\u224E","\u22C2","\u21E4","\u21A4","\u22B2","\u21BF","\u2262","\u224F\u0338","\u2270","\u2274","\u221D","\u2309","\u2253","\u2970","\u2191","\u228F","\u25BF","\u25C3","\u23B5","\u228A\uFE00","\u228B\uFE00","|"][j];
                        continue;
                    }
                }
            } else if (i + 16 < len) {
                if (input.charAt(i+16) == ';') {
                    candidateStr = input.substring(i+1,i+16);
                    j = ["ApplyFunctio","bigtriangleu","blacktriangl","Differential","divideontime","DoubleLeftTe","DoubleUpArro","fallingdotse","hookleftarro","leftarrowtai","leftharpoonu","LeftTeeVecto","LeftVectorBa","LessFullEqua","longleftarro","LongLeftArro","Longleftarro","looparrowlef","measuredangl","NotEqualTild","NotTildeEqua","NotTildeTild","ntrianglelef","Poincareplan","PrecedesEqua","PrecedesTild","RightArrowBa","RightTeeArro","RightTriangl","RightUpVecto","shortparalle","smallsetminu","SucceedsEqua","SucceedsTild","SupersetEqua","trianglerigh","UpEquilibriu","upharpoonlef","varsubsetneq","varsupsetneq","VerticalTild","VeryThinSpac"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 17;
                        output += ["\u2061","\u25B3","\u25B4","\u2146","\u22C7","\u2AE4","\u21D1","\u2252","\u21A9","\u21A2","\u21BC","\u295A","\u2952","\u2266","\u27F5","\u27F5","\u27F8","\u21AB","\u2221","\u2242\u0338","\u2244","\u2249","\u22EA","\u210C","\u2AAF","\u227E","\u21E5","\u21A6","\u22B3","\u21BE","\u2225","\u2216","\u2AB0","\u227F","\u2287","\u25B9","\u296E","\u21BF","\u2ACB\uFE00","\u2ACC\uFE00","\u2240","\u200A"][j];
                        continue;
                    }
                }
            } else if (i + 17 < len) {
                if (input.charAt(i+17) == ';') {
                    candidateStr = input.substring(i+1,i+17);
                    j = ["curvearrowlef","DiacriticalDo","doublebarwedg","DoubleRightTe","downdownarrow","DownLeftVecto","GreaterGreate","hookrightarro","HorizontalLin","InvisibleComm","InvisibleTime","LeftDownVecto","leftleftarrow","leftrightarro","LeftRightArro","Leftrightarro","leftthreetime","LessSlantEqua","longrightarro","LongRightArro","Longrightarro","looparrowrigh","LowerLeftArro","NestedLessLes","NotGreaterLes","NotLessGreate","NotSubsetEqua","NotVerticalBa","nshortparalle","ntrianglerigh","OpenCurlyQuot","ReverseElemen","rightarrowtai","rightharpoonu","RightTeeVecto","RightVectorBa","ShortDownArro","ShortLeftArro","SquareSuperse","TildeFullEqua","trianglelefte","upharpoonrigh","UpperLeftArro","ZeroWidthSpac"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 18;
                        output += ["\u21B6","\u02D9","\u2306","\u22A8","\u21CA","\u21BD","\u2AA2","\u21AA","\u2500","\u2063","\u2062","\u21C3","\u21C7","\u2194","\u2194","\u21D4","\u22CB","\u2A7D","\u27F6","\u27F6","\u27F9","\u21AC","\u2199","\u226A","\u2279","\u2278","\u2288","\u2224","\u2226","\u22EB","\u2018","\u220B","\u21A3","\u21C0","\u295B","\u2953","\u2193","\u2190","\u2290","\u2245","\u22B4","\u21BE","\u2196","\u200B"][j];
                        continue;
                    }
                }
            } else if (i + 18 < len) {
                if (input.charAt(i+18) == ';') {
                    candidateStr = input.substring(i+1,i+18);
                    j = ["bigtriangledow","circlearrowlef","CloseCurlyQuot","ContourIntegra","curvearrowrigh","DoubleDownArro","DoubleLeftArro","downharpoonlef","DownRightVecto","leftharpoondow","leftrightarrow","LeftRightVecto","LeftTriangleBa","LeftUpTeeVecto","LeftUpVectorBa","LowerRightArro","nleftrightarro","nLeftrightarro","NotGreaterEqua","NotGreaterTild","NotHumpDownHum","NotLeftTriangl","NotSquareSubse","ntrianglelefte","OverParenthesi","RightDownVecto","rightleftarrow","rightsquigarro","rightthreetime","ShortRightArro","straightepsilo","trianglerighte","UpperRightArro","vartrianglelef"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 19;
                        output += ["\u25BD","\u21BA","\u2019","\u222E","\u21B7","\u21D3","\u21D0","\u21C3","\u21C1","\u21BD","\u21C6","\u294E","\u29CF","\u2960","\u2958","\u2198","\u21AE","\u21CE","\u2271","\u2275","\u224E\u0338","\u22EA","\u228F\u0338","\u22EC","\u23DC","\u21C2","\u21C4","\u219D","\u22CC","\u2192","\u03F5","\u22B5","\u2197","\u22B2"][j];
                        continue;
                    }
                }
            } else if (i + 19 < len) {
                if (input.charAt(i+19) == ';') {
                    candidateStr = input.substring(i+1,i+19);
                    j = ["circlearrowrigh","DiacriticalAcut","DiacriticalGrav","DiacriticalTild","DoubleRightArro","DownArrowUpArro","downharpoonrigh","EmptySmallSquar","GreaterEqualLes","GreaterFullEqua","LeftAngleBracke","LeftUpDownVecto","LessEqualGreate","NonBreakingSpac","NotPrecedesEqua","NotRightTriangl","NotSucceedsEqua","NotSucceedsTild","NotSupersetEqua","ntrianglerighte","rightharpoondow","rightrightarrow","RightTriangleBa","RightUpTeeVecto","RightUpVectorBa","twoheadleftarro","UnderParenthesi","UpArrowDownArro","vartrianglerigh"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 20;
                        output += ["\u21BB","\xB4","`","\u02DC","\u21D2","\u21F5","\u21C2","\u25FB","\u22DB","\u2267","\u27E8","\u2951","\u22DA","\xA0","\u2AAF\u0338","\u22EB","\u2AB0\u0338","\u227F\u0338","\u2289","\u22ED","\u21C1","\u21C9","\u29D0","\u295C","\u2954","\u219E","\u23DD","\u21C5","\u22B3"][j];
                        continue;
                    }
                }
            } else if (i + 20 < len) {
                if (input.charAt(i+20) == ';') {
                    candidateStr = input.substring(i+1,i+20);
                    j = ["blacktriangledow","blacktrianglelef","DoubleUpDownArro","DoubleVerticalBa","DownLeftTeeVecto","DownLeftVectorBa","FilledSmallSquar","GreaterSlantEqua","LeftDoubleBracke","LeftDownTeeVecto","LeftDownVectorBa","leftrightharpoon","LeftTriangleEqua","NegativeThinSpac","NotGreaterGreate","NotLessSlantEqua","NotNestedLessLes","NotReverseElemen","NotSquareSuperse","NotTildeFullEqua","RightAngleBracke","rightleftharpoon","RightUpDownVecto","SquareSubsetEqua","twoheadrightarro","VerticalSeparato"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 21;
                        output += ["\u25BE","\u25C2","\u21D5","\u2225","\u295E","\u2956","\u25FC","\u2A7E","\u27E6","\u2961","\u2959","\u21CB","\u22B4","\u200B","\u226B\u0338","\u2A7D\u0338","\u2AA1\u0338","\u220C","\u2290\u0338","\u2247","\u27E9","\u21CC","\u294F","\u2291","\u21A0","\u2758"][j];
                        continue;
                    }
                }
            } else if (i + 21 < len) {
                if (input.charAt(i+21) == ';') {
                    candidateStr = input.substring(i+1,i+21);
                    j = ["blacktrianglerigh","DownRightTeeVecto","DownRightVectorBa","longleftrightarro","LongLeftRightArro","Longleftrightarro","NegativeThickSpac","NotLeftTriangleBa","PrecedesSlantEqua","ReverseEquilibriu","RightDoubleBracke","RightDownTeeVecto","RightDownVectorBa","RightTriangleEqua","SquareIntersectio","SucceedsSlantEqua"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 22;
                        output += ["\u25B8","\u295F","\u2957","\u27F7","\u27F7","\u27FA","\u200B","\u29CF\u0338","\u227C","\u21CB","\u27E7","\u295D","\u2955","\u22B5","\u2293","\u227D"][j];
                        continue;
                    }
                }
            } else if (i + 22 < len) {
                if (input.charAt(i+22) == ';') {
                    candidateStr = input.substring(i+1,i+22);
                    j = ["DoubleLongLeftArro","DownLeftRightVecto","LeftArrowRightArro","leftrightsquigarro","NegativeMediumSpac","NotGreaterFullEqua","NotRightTriangleBa","RightArrowLeftArro","SquareSupersetEqua"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 23;
                        output += ["\u27F8","\u2950","\u21C6","\u21AD","\u200B","\u2267\u0338","\u29D0\u0338","\u21C4","\u2292"][j];
                        continue;
                    }
                }
            } else if (i + 23 < len) {
                if (input.charAt(i+23) == ';') {
                    candidateStr = input.substring(i+1,i+23);
                    j = ["CapitalDifferential","DoubleLeftRightArro","DoubleLongRightArro","EmptyVerySmallSquar","NestedGreaterGreate","NotDoubleVerticalBa","NotGreaterSlantEqua","NotLeftTriangleEqua","NotSquareSubsetEqua","OpenCurlyDoubleQuot","ReverseUpEquilibriu"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 24;
                        output += ["\u2145","\u21D4","\u27F9","\u25AB","\u226B","\u2226","\u2A7E\u0338","\u22EC","\u22E2","\u201C","\u296F"][j];
                        continue;
                    }
                }
            } else if (i + 24 < len) {
                if (input.charAt(i+24) == ';') {
                    candidateStr = input.substring(i+1,i+24);
                    j = ["CloseCurlyDoubleQuot","DoubleContourIntegra","FilledVerySmallSquar","NegativeVeryThinSpac","NotPrecedesSlantEqua","NotRightTriangleEqua","NotSucceedsSlantEqua"].indexOf(candidateStr);
                    if (j >= 0) {
                        i += 25;
                        output += ["\u201D","\u222F","\u25AA","\u200B","\u22E0","\u22ED","\u22E1"][j];
                        continue;
                    }
                }
            } else if (i + 25 < len) {
                if (input.charAt(i+25) == ';') {
                    candidateStr = input.substring(i+1,i+25);
                    if (candidateStr == "DiacriticalDoubleAcut") {
                        i += 26;
                        output += "\u02DD";
                        continue;
                    } else if (candidateStr == "NotSquareSupersetEqua") {
                        i += 26;
                        output += "\u22E3";
                        continue;
                    }
                }
            } else if (i + 26 < len) {
                if (input.charAt(i+26) == ';') {
                    candidateStr = input.substring(i+1,i+26);
                    if (candidateStr == "NotNestedGreaterGreate") {
                        i += 27;
                        output += "\u2AA2\u0338";
                        continue;
                    }
                }
            } else if (i + 27 < len) {
                if (input.charAt(i+27) == ';') {
                    candidateStr = input.substring(i+1,i+27);
                    if (candidateStr == "ClockwiseContourIntegra") {
                        i += 28;
                        output += "\u2232";
                        continue;
                    } else if (candidateStr == "DoubleLongLeftRightArro") {
                        i += 28;
                        output += "\u27FA";
                        continue;
                    }
                }
            } else if (i + 34 < len) {
                if (input.charAt(i+34) == ';') {
                    candidateStr = input.substring(i+1,i+34);
                    if (candidateStr == "CounterClockwiseContourIntegra") {
                        i += 35;
                        output += "\u2233";
                        continue;
                    }
                }
            }
        }
        i++;
        output += char;
    }
    return output;
}

module.exports = {decodeHTML5Entities, decodeHTML4Entities, decodeHTML5EntitiesStrict, decodeHTML4EntitiesStrict}