
console.clear();

//Todo JavaScript Numbers

var num1 = 10;

var num2 = 10.9;

console.log(typeof(num1));
console.log(typeof(num2));

var numVal = 20.3;

console.log(numVal.toString());

//Parse Integer

var numberA = "3422.32";

console.log(parseFloat(numberA));

// ToFixed Function

var strF = 73746.4284294;

console.log(strF.toFixed());

//Todo JavaScripts Strings

var myValueStr = "I love JavScript";

console.log(myValueStr);

var mySecStr = "We will learn JavaScript";

console.log(typeof(mySecStr));

var doubleQUote = "This is a \"JavaScript\"  string";

console.log(doubleQUote);

var myStrLength = "Hello , I am JavaScript Developer";

console.log(myStrLength.length);

//Todo This is String postion or Object Postion See
console.log(myStrLength.indexOf('JavaScript'));

console.clear();

//Find last Index in JavScripts
console.log(myStrLength.lastIndexOf("I"));

//Get a part of our strings slice(Strat,End);
console.log(myStrLength.slice(0,6));

console.log(myStrLength.slice(8));

console.log(myStrLength.substr(0,6));

//Todo tooUpperCae() - It convert our string -> uppercase

var exampleString = "This is JavScript tutorial";

console.clear();

console.log(exampleString.toUpperCase());

//Todo Concat() -- Strings comincation
var firstName = "Ulvi";

var surname = "Nasirov";

console.log(exampleString.concat(" "+firstName+" "+surname));