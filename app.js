const squares = document.querySelectorAll('.square');
const timerLeft = document.querySelector('#time-left');
const score = document.querySelector('score');

let moleSquareID;
let result = 0;
let currentTime = 60;

function RandomPosition() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    moleSquareID = randomSquare.id;
}

function checkHitMole() {
    squares.forEach((square => {
        square.addEventListener('click', () => {
            if (square.id == moleSquareID) {
                console.log('hit');
                moleSquareID = null;
                result++;
                RandomPosition();
            }
        })
    }))
    setInterval(RandomPosition, 1000);
}

function countDown() {
    currentTime--
    //timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        //clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
    }

}

let countDownTimerId = setInterval(countDown, 100);

RandomPosition();
checkHitMole();
