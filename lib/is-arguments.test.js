"use strict";

var assert = require("@sinonjs/referee").assert;
var sinon = require("sinon");
var proxyquire = require("proxyquire").noCallThru();

describe.only("isArguments", function() {
    ["Arguments", "Object"].forEach(function(value) {
        var isArguments = proxyquire("./is-arguments", {
            "./get-class": sinon.fake.returns(value),
            "@noCallThru": true
        });

        context("When getClass returns" + value, function() {
            it("returns true if arguments", function() {
                var checkArgs = isArguments(arguments);
                assert.isTrue(checkArgs);
            });

            it("returns false if arguments is an array", function() {
                var checkArgs = isArguments([]);
                assert.isFalse(checkArgs);
            });

            it("returns false if number", function() {
                var checkArgs = isArguments(24);
                assert.isFalse(checkArgs);
            });

            it("returns false if empty object", function() {
                var checkArgs = isArguments({});
                assert.isFalse(checkArgs);
            });

            it("returns false if string", function() {
                var checkArgs = isArguments("");
                assert.isFalse(checkArgs);
            });

            it("returns true if arguments object from strict-mode function", function() {
                var returnArgs = function() {
                    return arguments;
                };
                var checkArgs = isArguments(returnArgs());
                assert.isTrue(checkArgs);
            });
        });
    });
});
