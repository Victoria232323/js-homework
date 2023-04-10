const cookieValue = document.cookie.split('; ').find(row => row.startsWith('value='));
const difficulty = cookieValue ? decodeURIComponent(cookieValue.split('=')[1]) : null;

function setTargets(targets){
    const targetsField = document.querySelector('.game');
    const target = '<img src="img/target.png" class="target">';
    
    for (let i = 0; i < targets; i++) {
        const movingImageContainer = document.createElement('div');
        movingImageContainer.id = 'movingImageContainer';
        movingImageContainer.classList.add('game');
        document.body.appendChild(movingImageContainer);

        const movingImage = document.createElement('img');
        movingImage.src = 'img/target.png';
        movingImage.classList.add('target');
        movingImageContainer.appendChild(movingImage);

        // Установка начальных координат и стилей
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const initialX = Math.random() * (screenWidth - movingImageContainer.offsetWidth);
        const initialY = Math.random() * (screenHeight - movingImageContainer.offsetHeight);
        const initialTransform = `translate(${initialX}px, ${initialY}px)`;
        movingImageContainer.style.transform = initialTransform;
    }
    
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
    let points = 0;
    if(lives === 0) return false;
    setTimeout(()=> {
        if(points !== targets){
        return false;
    }
    }, 10000)
}

if(difficulty === 'easy'){
    game(3, 5, 2);
} else if(difficulty === 'normal'){
    game(5, 3, 3);
} else{
    game(8, 1, 5);
}