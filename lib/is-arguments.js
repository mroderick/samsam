"use strict";

var getClass = require("./get-class");

/**
 * Returns `true` when `object` is an `arguments` object, `false` otherwise
 *
 * @alias module:samsam.isArguments
 * @param  {*}  object - The object to examine
 * @returns {boolean} `true` when `object` is an `arguments` object
 */
function isArguments(object) {
    if (getClass(object) === "Arguments") {
        return true;
    }

    // needed for ie11
    try {
        return typeof object.callee === "function";
    } catch (e) {
        return false;
    }
}

module.exports = isArguments;
