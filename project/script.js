

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