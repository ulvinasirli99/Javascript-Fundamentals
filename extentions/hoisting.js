console.clear();

// Todo Variable Hoisting in Javascript.....

console.log(num1);

num1 = 10;

var num1;

strl = "Demo String Value";

console.log(strl);

var strl;

// Todo Functions Hoisintgs

console.clear();

sum(5,6);

function sum(num1,num2) {

    total = num1+num2;
    
    var total;

    console.log(total);
    
}