// var today = new Date();
// console.log('today is ',today);
// var hourNow = today.getHours();
// console.log('hour now is ',hourNow);
// var hourNow = prompt('what is the hour now');

//function block of code 
function greeting(hourNow) {
  //input
  var greeting;//


  //processing
  if (hourNow > 18 && hourNow <= 23) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12 && hourNow <= 18) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0 && hourNow <= 12) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
  //output
  return greeting;
}

// console.log('greeting',greeting);
// var name = "shihab";
// console.log('new greeting',greeting);


// document.write('<h3>'+greeting(5)+'</h3>');
// document.write('<h3>'+greeting(10)+'</h3>');
// document.write('<h3>'+greeting(20)+'</h3>');
// document.write('<h3>'+greeting("hi")+'</h3>');



// function sum(x,y){
//   console.log(x + y);
// }

// sum(10,10);
// sum(2,3);
var showOrder = function () {
  var userInput = prompt('what would you like to order house or hotel');
  //the userInput should equal to house or hotel only
  while (userInput !== "house" && userInput !== "hotel") {
    userInput = prompt('what would you like to order house or hotel');
  }
  //input
  var userOrder = "";
  var numberOfImage = prompt("how many images do you want to print");
  //numberOfImage = 3
  for (var count = 0; count < numberOfImage; count++) {
    if (userInput == "house") {
      // document.write("<img src='images/house.png' alt=''>");
      userOrder = userOrder + "<img src='images/house.png' alt=''>";
      console.log(userOrder);
    }
    else if (userInput == "hotel") {
      // document.write("<img src='images/hotel.png' alt=''>");
      userOrder = userOrder + "<img src='images/hotel.png' alt=''>";
      console.log(userOrder);
    }
  }
  //output
  return userOrder;
}

// var x =1;

// function calc(){
//  var x = 2;
//  console.log('the inside value is ',x);
// }

// console.log('the outside value is ',x);
var age = 2;

while (age < 10) {
  console.log("yes");
  // age++;
  age = age + 2;
}

//age = 2 yes
//age = 4 yes
//age = 6 yes 
//age = 8 yes
//age = 10 

for (var count = 1; count < 10; count++) {
  //my code
}