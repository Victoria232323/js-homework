//task 1
let n = 1;
let m = 2;
let z = 3;
console.log( n < m < z);

//task 2
let x = 1;
let y = 2;

let res1 = String(x) + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x / 0; // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//task 3
let years = prompt("How old are you?");
if (years < 18){
    alert("You are not adult.");
} else {
    alert("You are adult.");
}

//task 4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = Math.max(...arr);
arr = arr.filter(el => el !== Number(data));
console.log(arr);

//task 5
let a = +prompt("Сторона А:");
let b = +prompt("Сторона Б:");
let c = +prompt("Сторона С");
let p = (a + b + c)/2;
let s = p * (p - a) * (p - b) * (p - c);

console.log(`Площа трикутника: ${ Math.sqrt(s)}`);

function check(a, b, c){
    const messageTrue = "Трикутник є прямокутним";
    const messageFalse = "Трикутник не є прямокутним";
    if (a > b && a > c){
        if (a**2 === b**2 + c**2){
            return messageTrue;
        }
    } else if (b > a && b > c){
        if (b**2 === a**2 + c**2){
            return messageTrue;
        }
    } else if (c > a && c > b){
        if (c**2 === b**2 + a**2){
            return messageTrue;
        }
    }
    return messageFalse;
}
console.log(check(a, b, c));

//task 6
const now = new Date();

switch(true){
    case (now.getHours() > 5 && now.getHours() <= 11):
        alert("Good morning!");
        break;
    case (now.getHours() <= 17 && now.getHours() > 11):
        alert("Good afternoon!");
        break;
    case (now.getHours() <= 23 && now.getHours() > 17):
        alert("Good evening!");
        break;
    default:
        alert("Good night!");
        break;
}

//task ***
