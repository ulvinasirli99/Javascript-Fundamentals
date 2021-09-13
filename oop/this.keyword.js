console.clear();

// Todo Javascript OOP ........

// Javascript [@param this ] keyword

var fisrtName = 'Jhon';

var person = {
   
    firstName: "Jhon",
   
    age: 21,
   
    job: 'Software Developer',
   
    getName: function () {

        console.log(this.firstName);

    },
   
    parents: {

        firstName: "Ulvi",

        age: 22,

        job: 'Flutter Developer',

        getName: function () {

            console.log(this.firstName);

        }

    }
}

person.getName()

person.parents.getName();