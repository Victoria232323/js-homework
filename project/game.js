const cookieValue = document.cookie.split('; ').find(row => row.startsWith('value='));
const difficulty = cookieValue ? decodeURIComponent(cookieValue.split('=')[1]) : null;

function setTargets(targets){
    const allTargets = document.querySelector('.game');
    for (let i = 0; i < targets; i++) {
        allTargets.innerHTML += '<div class = "targetDiv"><img src="img/target.png" class="target"><div>';
    }
}

function moveTargets(speed){
    const targets = document.querySelectorAll('.target');

    let direction = 1; 
    let distance = 0; 

    setInterval(() => {
        targets.forEach(target => {
            distance += direction * speed;

            if (distance >= window.innerWidth - target.offsetWidth || distance <= 0) {
                direction *= -1;
            }

            target.style.transform = `translateX(${distance}px)`;
        });
    }, 1000 / 60);
}

function setLives(lives){
    const divLives = document.querySelector('.myLives');
    for (let i = 0; i < lives; i++) {
        divLives.innerHTML += '<img src="img/live.png" class="lives">';
    }
}

function setTimer(){
    const divTimer = document.querySelector('.timer');
    let countdown = 10; 

    function updateTimer() {
        if(countdown === 10){
            divTimer.innerHTML = `<h2>00:${countdown}</h2><br>`;
        } else{
            divTimer.innerHTML = `<h2>00:0${countdown}</h2><br>`;
        }
        countdown--; 

        if (countdown < 0) {
            clearInterval(timerId); 
            loose(); // Вызываем функцию loose(), когда таймер достигает 0
            return false;
        }
    }

    const timerId = setInterval(updateTimer, 1000);
}

function loose(){
    location.assign('loose.html');
}

function win(){
    location.assign('win.html');
}

function game(targets, lives, speed){
    setLives(lives);
    setTargets(targets);
    setTimer();
    moveTargets(speed);
    const allTargets = document.querySelectorAll('.target');
    let points = 0; 
    
    allTargets.forEach(target => {
        target.addEventListener('click', (event) => {
            event.preventDefault(); 
            event.stopPropagation();
            points++; 

            if (points >= targets) { 
                win();
            }

            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'empty'; 
            event.target.parentNode.replaceChild(emptyDiv, event.target);
        });
    });

    const field = document.querySelector('.game');
    const allLives = document.querySelectorAll('.lives');

    field.addEventListener('click', () => {
        if (lives > 0 && allLives.length > 0) { 
            lives--; 
            document.querySelector('.lives').remove();
        }

        if (lives === 0) {
            loose();
        }
    });
}

if(difficulty === 'easy'){
    game(3, 5, 0.7);
} else if(difficulty === 'normal'){
    game(4, 4, 0.8);
} else{
    game(5, 3, 0.9);
}