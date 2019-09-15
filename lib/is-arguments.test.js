"use strict";

var assert = require("@sinonjs/referee").assert;
var sinon = require("sinon");
var proxyquire = require("proxyquire");

describe("isArguments", function() {
    ["Arguments", "Object"].forEach(function(value) {
        context("When getClass returns" + value, function() {
            var samsam;
            beforeEach(function() {
                samsam = proxyquire("./samsam", {
                    "./get-class": sinon.fake.returns(value)
                });
            });

            it("returns true if arguments", function() {
                var checkArgs = samsam.isArguments(arguments);
                assert.isTrue(checkArgs);
            });

            it("returns false if arguments is an array", function() {
                var checkArgs = samsam.isArguments([]);
                assert.isFalse(checkArgs);
            });

            it("returns false if number", function() {
                var checkArgs = samsam.isArguments(24);
                assert.isFalse(checkArgs);
            });

            it("returns false if empty object", function() {
                var checkArgs = samsam.isArguments({});
                assert.isFalse(checkArgs);
            });

            it("returns false if string", function() {
                var checkArgs = samsam.isArguments("");
                assert.isFalse(checkArgs);
            });

            it("returns true if arguments object from strict-mode function", function() {
                var returnArgs = function() {
                    return arguments;
                };
                var checkArgs = samsam.isArguments(returnArgs());
                assert.isTrue(checkArgs);
            });
        });
    });
});
