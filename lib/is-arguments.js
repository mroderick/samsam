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
    var recognizedArgumentsWithGetClass = getClass(object) === "Arguments";
    var recognizedArgumentsWithCallee = typeof object.callee === "function"; // needed for ie11

    return recognizedArgumentsWithGetClass || recognizedArgumentsWithCallee;
}

module.exports = isArguments;
