//task 1

function upperCase(str){
    if (/[a-z]/.test(str[0])) return "String's not starts with uppercase character";
    if (/[A-Z]/.test(str[0])) return "String's starts with uppercase character";
    return "String doesn't start with a letter";
}

console.log(upperCase('regexp')); 
console.log(upperCase('Regexp')); 
console.log(upperCase('1Regexp')); 

//task 2

function checkEmail(str){
    const regexp = /(@gmail.com)/;
    return regexp.test(str);
}

console.log(checkEmail("Qmail2@gmail.com"));
console.log(checkEmail("@gmail.comQmail2"));
console.log(checkEmail("@gail.comQmail2"));

//task 3

let str = 'Java Script'
let re  = /(\w+)\s+(\w+)/;
let newStr = str.replace(re, '$2, $1');
console.log(newStr);

//task 4

function validCard(str){
    const re = /^(\d{4}-){3}\d{4}$/;
    return re.test(str);
}

console.log(validCard("9999-9999-9999-9999"));
console.log(validCard("1773-456-789")); 
console.log(validCard("13-456-789")); 

//task 5

function checkEmail(email) {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (regex.test(email)) {
        return "Email is correct!";
    } else {
        return "Email is not correct!";
    }
}

console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));

//task 6

function checkLogin(str){
    const re = /^(?!^\d)[a-zA-Z0-9.]{2,10}$/;
    return re.test(str);
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee11ret3'));
console.log(checkLogin('ee1*1ret3'));