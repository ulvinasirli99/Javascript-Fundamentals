console.clear();

// Todo Javascript Constructor Functions......

var person = {
  
    name : "Ulvi",
  
    oldYear : 1999,
  
    job : 'Flutter Developer'

};

function Person(pName,pYear,pJob) {

    this.name = pName;

    this.oldYear = pYear;

    this.job = pJob;
    
}

// Prototype Implemantation in Javascript....

var myVal = new Person('Ulvi',1999,'Developer');

Person.prototype.calculateAge = function () {

    console.log(2021-this.oldYear);
    
};

console.log(myVal);

console.log(myVal.calculateAge());