"use strict";
//Literal Types
let myName;
let userName;
userName = "Amy";
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
const allAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
