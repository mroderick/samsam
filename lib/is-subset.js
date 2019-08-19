"use strict";

/**
 * Returns `true` when `s1` is a subset of `s2`, false otherwise
 * @private
 * @param  {array|set}  s1      The target value
 * @param  {array|set}  s2      The containing value
 * @param  {function}  compare A comparison function, should return `true` when values are considered equal
 * @return {Boolean}
 */
function isSubset(s1, s2, compare) {
    var allContained = true;
    s1.forEach(function(v1) {
        var includes = false;
        s2.forEach(function(v2) {
            if (compare(v2, v1)) {
                includes = true;
            }
        });
        allContained = allContained && includes;
    });

    return allContained;
}

module.exports = isSubset;
