// Store the statement in to an string
// Remove is and replace it with : using the replace method
// store it in an array using split
// loop through the array using for each
// store each person as an object.
var friends = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27";

FriendsArray = [];
newFriends = [];
var myObj = {};

//console.log(FriendsArray);
//fixing the is to :.
var splitfriends = friends.replace(/ is/g, ":");
//created a new array
var FriendsArray = splitfriends.split(", ");

//looping through the array and creating new array inside another
FriendsArray.forEach(function(friends) {
  newFriends.push(friends.split(" "))
});
//console.log(newFriends);

newFriends.forEach(function(item){
var name = item[0];
var age = Number(item[1]);
myObj[name] = age;
});

 var newFriends = Object.keys(myObj).map(function (key) {
   for (var prop in myObj) {
    // console.log("obj." + prop + " = " + myObj[prop]);
   }

   return myObj[key];

 });


 var min = Math.min.apply( null, newFriends);
 var max = Math.max.apply( null, newFriends);

// console.log(newFriends)
console.log(myObj);
 console.log(min,"youngest friend");
 console.log(max,"oldest friend");
