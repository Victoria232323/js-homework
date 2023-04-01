let btn = document.querySelector('.btn');
let out = document.querySelector('.out');
let inputs = document.querySelectorAll('.arr');

btn.addEventListener('click', () => {
  for (let i = 0; i < inputs.length; i++) {
    out.innerHTML += inputs[i].value + '<br>';
  }
});
