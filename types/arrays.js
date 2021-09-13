console.clear();

// Todo Arrays in Javascript

var myFrineds = 

["Jeyn","Jacob","Keta","Dina","Clera","Shaw",

"Khumar","Kun","Li","Vab"];

console.log(myFrineds);

console.log(typeof(myFrineds));

console.log(myFrineds[3]);

console.clear();

myFrineds[0] = "Lena";

console.log(myFrineds[0]);

console.clear();

console.log(myFrineds.length);

// New Value added function

myFrineds.push('Jack');

console.log(myFrineds);

// Delete a value

var namE = myFrineds.pop();

console.log(namE);

console.log(myFrineds);

// Todo Arrays Part 2

console.clear();

// Added new value only start and end bettwen numbes in array list 

myFrineds.splice(4,0,'Dinara','Vahab');

console.log(myFrineds);

// Delete item at specific postion

myFrineds.splice(0,1);

console.log(myFrineds);

// Concatenation

console.clear();

var mOfficeFriends = ['Nina','Aron','Baron','JeckMa'];

var allFriends = myFrineds.concat(mOfficeFriends);

console.log(allFriends);

// If array list is sorting
console.clear();

allFriends.sort();

console.log(allFriends);

// If array list is reverse sorting
console.clear();

allFriends.reverse();

console.log(allFriends);
