"use strict";

/**
 * Returns `true` when the argument is an instance of Set, `false otherwise
 * @param  {*}  val - A value to examine
 * @return {Boolean}
 */
function isSet(val) {
    return (typeof Set !== "undefined" && val instanceof Set) || false;
}

module.exports = isSet;
