console.clear();

// Todo Implicit Type Coercion in Javscript

var mStr = "Ulvi";

var mNum = 12;

var nSum = mStr + mNum;

console.log(nSum);

console.log(typeof (nSum));

console.log(+'2');

var mValue = +'22';

console.log(mValue);

console.log(typeof (mValue));

var boolValue = 2 >= '2';

console.log(boolValue);

console.log(typeof (boolValue));

console.clear();

if ('') { console.log('True') } else { console.log('False') };

// Todo Explicit Type Coercion in Javscript

console.clear();

var numA = 932;

// Explict to String

console.log(typeof (String(numA)));

console.log(typeof (String(true)));

// Explict to Number

console.log(typeof (Number('2')));

console.log(Number(numA));

console.log(Number(true), typeof (Number(true)));

console.clear();

console.log(Number('apple'), typeof (Number('apple')));

//Explict To Boolean

console.clear();

console.log(Boolean(1), typeof (Boolean(0)));

console.log(Boolean(''), typeof (Boolean('')));

console.log(Boolean('1'), typeof (Boolean('0')));

