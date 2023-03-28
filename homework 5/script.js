//task 1

class Circle{
    constructor (x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    lengthOfCircle(){
        l = 2 * Math.PI * this.radius;
        return l;
    }
    static calculateLength(radius){
        return (L = 2 * Math.PI * radius);
    }
    get copyCircle(){
        return new Circle (this.x, this.y, this.radius);
    }
    static objWithParametres(x, y, radius){
        return new Circle(x, y, radius);
    }
    toString(){
        return `Circle: x = ${this.x}, y = ${this.y}, radius = ${this.radius}.`;
    }
}

//task 2
function propsCount(currentObject){
    let count = 0;
    for (key in currentObject){
        count++;
    }
    return count;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
console.log(propsCount(mentor));

//task 3
class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        console.log(`${this.name} ${this.surname}`);
    }
}

class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName){
        return `${this.name} ${this.surname} ${midleName}`;
    }
    showCourse(){
        let date = new Date();
        let currentYear = date.getFullYear();
        let course = currentYear - this.year;
        return course;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

//task 4
class Marker{
    constructor(color, ink){
        this.color = color;
        this.ink = ink;
    }
    print(str){
        let printed = "";
        for (let i = 0; i < str.length; i++){
            if (str[i] !== " "){ 
                this.ink = this.ink - 0.5;
            }
            printed += str[i];
            if (this.ink < 0.5) break;
        }
        console.log(`%c ${printed}`, `color: ${this.color}`);
    }
}

class FillMarker extends Marker{
    fillMarker(amount){
        this.ink += amount;
    }
}

let m = new Marker("red", 50);
m.print("Hello world");
console.log(m.ink);
let a = new FillMarker("yellow", 3);
a.fillMarker(10);
console.log(a.ink);

//task 5
class Worker{
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.salary = this.dayRate * this.workingDays;
    }
    showSalary(){
        console.log(`${this.fullName} salary: ${this.salary}`);
    }
    #experience = 1.2;
    showSalaryWithExperience(){
        console.log(`${this.fullName} salary: ${this.salary * this.#experience}`)
    }
}