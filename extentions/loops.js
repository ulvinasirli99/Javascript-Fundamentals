console.clear();

// Todo Javascript Loops....

// While Loop ic coding.......

var mValue = 0;

while (mValue < 100) {

    mValue++;

    if (mValue == 30) {

        console.log("Value is 30");

        continue;

    }

    console.log(mValue);

    if (mValue == 41) {

        console.log(mValue);

        break;

    }

}

console.log(mValue);

console.clear();

// For loops is Coding....

var myList = [1, 2, 3, 5, 9, 23, 54, 21, 45, 64, 221, 44, 553, 87];

var postion;

for (postion = 0; postion < myList.length; postion++) {

    console.log('Position => ' + postion + ' : Value => ' + myList[postion]);

}

console.clear();

var post;

for (post = 0; post < myList.length; post++) {

    if (post >= 10) {

        console.log('Positon is biggest of 40...');

        break;

    }

    console.log(myList[post]);

}