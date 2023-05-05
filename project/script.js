const res = document.querySelector('#res');
const cookieValue = document.cookie.split('; ').find(row => row.startsWith('value='));
const result = cookieValue ? decodeURIComponent(cookieValue.split('=')[1]) : null;
if (result === 'win'){
    res.innerHTML += '<h2>You won!</h2>';
}
if (result === 'loose'){
    res.innerHTML += '<h2>Try again!</h2>';
}

const easy = document.querySelector('#easy');
const normal = document.querySelector('#normal');
const hard = document.querySelector('#hard');

easy.addEventListener('click', () =>{
    const value = 'easy';
    document.cookie = `value=${encodeURIComponent(value)}`;
    location.href = "game.html";
});

normal.addEventListener('click', () =>{
    const value = 'normal';
    document.cookie = `value=${encodeURIComponent(value)}`;
    location.href = "game.html";
});
hard.addEventListener('click', () =>{
    const value = 'hard';
    document.cookie = `value=${encodeURIComponent(value)}`;
    location.href = "game.html";
});