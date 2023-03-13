//task 2
console.log("Cherepiy");

//task 3
let season;
let day;

season = "spring";
day = 13;

alert(season);
alert(day);

season = day;

alert(season);
alert(day);

//task 4
let obj = {
    "String" : "hello",
    "Number" : 512,
    "Boolean": true,
    "Undefined" : undefined,
    "Null" : null
}

//task 5
let isAdult = confirm("are you an adult?");
console.log(isAdult);

//task 6
let myName;
let surname;
let group;
let yearOrBirth;
let isSingle = true;
let r = null;
let x = undefined;

myName = "Victoria";
surname = "Cherepiy";
group = 1;
yearOrBirth = 2005;

console.log(group);
console.log(yearOrBirth);
console.log(isSingle);
console.log(myName);
console.log(surname);
console.log(typeof(r));
console.log(typeof(x));

//task 7
let email = prompt("Login?");
let password = prompt("Password?");
alert("Dear User, your email is " + email + "your password is " + password);

//task 8
let secondInMinute = 60;
let minuteInHour = 60;
let secondInHour = secondInMinute * minuteInHour;
let hourInDay = 24;
let secondInDay = secondInHour * hourInDay;
let dayInMonth = 30;
let secondInMonth = secondInDay * dayInMonth;
console.log(secondInHour);
console.log(secondInDay);
console.log(secondInMonth);