"use strict";

var getClass = require("./get-class");

// This is for IE11, which can't reliably detect arguments
// However, it allows use of callee in strict mode without blowing up
var engineCanDetectArguments = (function test() {
    return getClass(arguments) === "Arguments";
})();

/**
 * Returns true when object is an arguments object, false otherwise
 *
 * @alias module:samsam.isArguments
 * @param  {*}  object - The object to examine
 * @returns {boolean} true when object is an arguments object
 */
function isArguments(object) {
    return engineCanDetectArguments
        ? isArgumentsFromClass(object)
        : isArgumentsFromCallee(object);
}

function isArgumentsFromClass(object) {
    return getClass(object) === "Arguments";
}

function isArgumentsFromCallee(object) {
    return typeof object.callee === "function";
}

module.exports = isArguments;
