//task 1
function sumSliceArray(arr, first, second){
    if (isNaN(first) || isNaN(second)) return console.error('This is not a number');
    if (first > arr.length || second > arr.length) return console.error('Number is bigger than length of array');
    return arr[first] + arr[second];
}

let first = +prompt('First number: ');
let second = +prompt('Second number: ');

let arr = [1, 4, 6, 7, 2, 8, 1, 6, 3, 6, 9, 5, 1, 2];

console.log(sumSliceArray(arr, first, second));

//task 2
function checkAge(){
    try{
        let name = prompt("Name: ");
        let age = +prompt("Age: ");
        if (age > 70 || age < 18) throw new RangeError();
        let status = prompt("Status: ");
        if (age === '' || name === '' || status === '') throw new Error('The field is empty! Please enter your age');
        if (status.toLowerCase() !== 'user' && status.toLowerCase() !== 'admin' && status.toLowerCase() !== 'moderator' || isNaN(age)) throw new EvalError();
        alert("Now you're allowed to watch the movie!");
    } catch(error){
        alert(error);
    }
}

checkAge();

//task 3
function calcRectangleArea(){
    try{
        const width = +prompt("Width: ");
        const height = +prompt("Heigth: ");
        if(isNaN(width) || isNaN(height)) throw new Error('This is not a number!');
        if(width < 1 || height < 1) throw new Error('Please enter a positive number.');
        alert(width * height);
    } catch (error){
        alert(error);
    }
}

calcRectangleArea();

//task 4
class MonthException{
    constructor(message){
        let name = 'MonthException';
    }
}
function showMonthName(month){
    try{
        switch (month){
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                throw new Error('Incorrect month number.');
        }
    } catch (exception){
        return (exception);
    }
}

console.log(showMonthName(14));
console.log(showMonthName(4));

//task 5
function showUser(id){
    try{
        if (id < 0) throw new Error('ID must not be negative.');
        return {'id' : id};
    } catch(err){
        console.log(err);
    }
}

function showUsers(ids){
    let newArr = [];
    for (let i = 0; i < ids.length; i++){
        if (showUser(ids[i]) !== undefined) newArr.push(showUser(ids[i]));
    }
    console.log(newArr);
}

showUsers([7, -12, 44, 22]);