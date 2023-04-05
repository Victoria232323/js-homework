//task 1

const newWindow = window.open('/', 'new tab', "width=300,height=300");

setTimeout(() => {
    newWindow.resizeTo(500, 500);

    setTimeout(() => {
        newWindow.moveTo(200, 200);
    }, 2000);

    setTimeout(() => {
        newWindow.close();
    }, 2000);

}, 2000);

//task 2
function changeCSS(){
    let button = document.querySelector('button');
    let p = document.querySelector('#text');
    button.addEventListener('click', () =>{
        p.style.color = 'orange';
        p.style.fontSize = '20px';
        p.style.fontFamily = "Comic Sans MS";
    })
}

changeCSS();

//task 3

let blue = document.querySelector('#blue');
let pink = document.querySelector('#pink');
let brown = document.querySelector('#brown');
let yellow = document.querySelector('#yellow');

blue.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'blue';
})

pink.addEventListener('dblclick', () =>{
    document.body.style.backgroundColor = 'pink';
})

brown.addEventListener('mousedown', () =>{
    document.body.style.backgroundColor = 'brown';
})
brown.addEventListener('mouseup', () =>{
    document.body.style.backgroundColor = 'white';
})

yellow.addEventListener('mouseover', () =>{
    document.body.style.backgroundColor = 'yellow';
})

//task 4
let dropdown = document.querySelector('#dropdown');
let btn = document.querySelector('#del');

btn.addEventListener('click', () =>{
    let selected = dropdown.options[dropdown.selectedIndex];
    dropdown.removeChild(selected);
})

//task 5

let b = document.querySelector('#live');
let text = document.querySelector('#liveText');

b.addEventListener('click', () =>{
    text.innerHTML += 'I was pressed.' + '<br>';
})

b.addEventListener('mouseover', () =>{
    text.innerHTML += 'Mouse on me!' + '<br>';
})

b.addEventListener('mouseout', () =>{
    text.innerHTML += 'Mouse is not on me!' + '<br>';
})

//task 6

let body = document.body;

window.addEventListener('resize', () =>{
    text.innerHTML += `Width: ${window.innerWidth} Heigth: ${window.innerHeight}` + '<br>';
})

//task 7
const citiesByCountry = {
    ger: ["Berlin", "Frankfurt", "Hamburg", "Munich"],
    usa: ["New York", "Chicago", "Washington", "Atlanta"],
    ukr: ["Kyiv", "Odesa", "Lviv", "Ivano-Frankivsk"]
};

const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const selectionParagraph = document.getElementById("selection");

function updateCities() {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry];

    citiesSelect.innerHTML = "";
    cities.forEach(city => {
        const option = document.createElement("option");
        option.text = city;
        citiesSelect.add(option);
    });

    const selectedCity = citiesSelect.value;
    selectionParagraph.innerHTML = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, selected city: ${selectedCity}`;
}

citiesSelect.addEventListener("change", function () {
    const selectedCity = citiesSelect.value;
    selectionParagraph.innerHTML = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, selected city: ${selectedCity}`;
});


countrySelect.addEventListener("change", updateCities);


updateCities();