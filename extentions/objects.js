console.clear();

// Todo Object in Javascript

var mCars = {

    "p1": "350 km",

    "gallardo": "230km",

    "BMW": "300 km",

    "porshe": "123 km",

};

console.log(mCars);

console.log(typeof (mCars));

console.clear();


var mBMW = {

    name: "BMW",

    manufactur: {

        name: "520",

        location: "Baku"

    },

    toSpeed: 400,

    color: "Teal",

    spoilers: false,

    applyBreaks: function () {

        setTimeout(function () {

            console.log("Car Stopped.....");

        },
            3000
        );

    }

};

console.log(mBMW.name);

console.log(mBMW.spoilers);

console.log(mBMW.manufactur);

console.log(mBMW.manufactur.name);

console.log(mBMW.toSpeed);

console.log(mBMW.color);

console.log(mBMW.applyBreaks());