//task 1
function compact (arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
            if (newArr.includes(arr[i])){
                continue;
            } else {
                newArr.push(arr[i]);
            }
        
    }
return newArr;
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2);

//task 2
function createArray(a, b){
    let rangeArray = [];
    for (let i = a; i <= b; i++){
        rangeArray.push(i);
    }
    return rangeArray;
}

let arrTask2 = createArray(2, 9);
console.log(arrTask2); // [2,3,4,5,6,7,8,9]

//task 3
let a = +prompt("A: ");
let b = +prompt("B: ");

for (let i = 0; i <= (b - a); i++){
    for (let j = 0; j <= i; j++){
        console.log(a + i);
    }
}

//task 4
function randArray(k){
    let arr = [];
    for (let i = 0;  i < k; i++){
        arr.push((Math.floor(Math.random() * (500 - 1 + 1)) + 1));
    }
    return arr;
}

console.log(randArray(5));

//task 5
function sortByData(arr) {
    let newArr = [];
    let arrNumbers = [];
    let arrStr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
          switch (typeof arr[i][j]) {
            case "number":
              arrNumbers.push(arr[i][j]);
              break;
            case "string":
              arrStr.push(arr[i][j]);
              break;
            default:
              newArr.push(arr[i][j]);
          }
        }
      } else {
        switch (typeof arr[i]) {
          case "number":
            arrNumbers.push(arr[i]);
            break;
          case "string":
            arrStr.push(arr[i]);
            break;
          default:
            newArr.push(arr[i]);
        }
      }
    }
    newArr.push(arrNumbers);
    newArr.push(arrStr);
    return newArr;
  }  

let array = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
let arrNew = sortByData(array);
console.log(arrNew);

//task 6
function calc(a, b, op){
    switch (op){
        case 1:
            return a - b;
            break;
        case 2:
            return a * b;
            break;
        case 3:
            return a / b;
            break;
        default:
            return a + b;
            break;
    }
}

let n = +prompt("First number: ");
let m = +prompt("Second number: ");
let op = +prompt("Operation: ");

console.log(`You entered ${n} and ${m} and result is ${calc(n, m, op)}`);

//task 7
function findUnique(arr){
    for (let i = 0; i < arr.length; i++){
        let count = 0;
        for (let j = 0; j < arr.length; j++){
            if (arr[i] === arr[j]) count++;
        }
        if (count > 1) return false;
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true