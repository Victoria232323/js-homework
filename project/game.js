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

function game(targets, lives, speed){
    setLives(lives);
    setTargets(targets);
    moveTargets(speed);

    const allTargets = document.querySelectorAll('.target');
    let points = 0; 
    
    allTargets.forEach(target => {
        target.addEventListener('click', (event) => {
            points++; 
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'empty'; 
            event.target.parentNode.replaceChild(emptyDiv, event.target); 
            return false;
        });
    });

    const field = document.querySelector('.game');
    const allLives = document.querySelectorAll('.lives');
    
    field.addEventListener('click', () => {
        if (lives > 0 && allLives.length > 0) { 
            lives--; 
            const lastLife = allLives[allLives.length - 1]; 
            lastLife.parentNode.removeChild(lastLife); 
        }
    });
    

    if(lives === 0) return false;
    setTimeout(()=> {
        if(points !== targets){
        return false;
    }
    }, 10000)
}

if(difficulty === 'easy'){
    game(3, 5, 0.7);
} else if(difficulty === 'normal'){
    game(5, 3, 0.8);
} else{
    game(8, 1, 0.9);
}