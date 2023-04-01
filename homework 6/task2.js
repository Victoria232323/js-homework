let title = document.getElementsByTagName('h1');

for (let i = 0; i < title.length; i++) {
  title[i].style.backgroundColor = "green";
}

let div = document.querySelector('#myDiv');
let firstChild = div.firstElementChild;
firstChild.style.fontWeight = 'bold';

let secondChild = firstChild.nextElementSibling;
secondChild.style.color = 'red';

let thirdChild = secondChild.nextElementSibling;
thirdChild.style.textDecoration = 'underline';

let fourthChild = thirdChild.nextElementSibling;
fourthChild.style.fontStyle = 'italic';

let list = document.querySelector('#myList');
list.innerHTML = list.textContent;

let span = document.querySelector('span');

span.style.color = 'white';
