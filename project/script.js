const easy = document.querySelector('#easy');
const normal = document.querySelector('#normal');
const hard = document.querySelector('#hard');
const res = document.querySelector('#res');

function win();
function loose();
function game(targets, lives, speed){
    document.body.style.display = 'none';
    let points = 0;

    if(lives === 0) return false;
    setTimeout(()=> {
        if(points !== targets){
        return false;
    }
    }, 10000)
}
easy.addEventListener('click', () =>{
    if(game(3, 5, 2)){
        win();
    } else{
        loose();
    }
});
normal.addEventListener('click', () =>{
    if(game(5, 3, 3)){
        win();
    } else{
        loose();
    }
});
hard.addEventListener('click', () =>{
    if(game(8, 1, 5)){
        win();
    } else{
        loose();
    }
});

function win(){
    res.innerHTML += '<h2>You won!</h2>';
}

function loose(){
    res.innerHTML += '<h2>Try again!</h2>';
}