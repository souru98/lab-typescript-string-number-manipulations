"use strict";
//progression-2
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(3));
        console.log(word.concat(" kulkarni"));
        console.log(word.slice(3, -1));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence);
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log(str);
        console.log(str.replace(/[^aeiou]/gi, "").length);
    };
    return StringManipulations;
}());
var object = new StringManipulations();
object.print("sourabh");
object.printWithSpace("kulkarni");
object.findVowel("sourabh");
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        console.log(num);
        if (num % 2 === 0) {
            console.log("not a prime number");
        }
        else {
            console.log("prime number");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        console.log(num);
        if (num % 9 == 1) {
            console.log("MAGIC NUMBER");
        }
        else {
            console.log("NOT MAGIC NUMBER");
        }
    };
    return NumbersManipulations;
}());
var obj = new NumbersManipulations();
obj.findPrime(21);
obj.findMagic(199);
