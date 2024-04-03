const timerHoursSpan = document.querySelector('.timerHours');
const timerMinutesSpan = document.querySelector('.timerMinutes');
const timerSecondsSpan = document.querySelector('.timerSeconds');

const controlPlay = document.querySelector('.play');
const controlStop = document.querySelector('.stop');
const controlReset = document.querySelector('.reset');

let timeAtual = [0, 0, 0];

function verificaUnidade(horarioAtual) {
    const dezenaAjustada = horarioAtual.map(element => {
        if (element.toString().length === 1) {
            element = '0' + element;
        }
        return element;
    });
    return dezenaAjustada;
}

setInterval(function () {
    if (controlPlay.classList.contains('active')) {
        hours = timeAtual[0];
        minutes = timeAtual[1];
        seconds = timeAtual[2];

        seconds++;

        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }

        if (minutes > 59) {
            hours++;
            minutes = 0;
        }

        timeAtual = [hours, minutes, seconds];
        let time = verificaUnidade([hours, minutes, seconds]);

        timerHoursSpan.textContent = time[0];
        timerMinutesSpan.textContent = time[1];
        timerSecondsSpan.textContent = time[2];
    }
}, 1000);

controlPlay.addEventListener('click', function () {
    controlPlay.classList.toggle('active');
    controlPlay.classList.contains('active') ? 
        controlPlay.src = './img/pause-button.svg' : 
        controlPlay.src = './img/play-button.svg';
        
    // if (controlPlay.classList.contains('active')) {
    //     controlPlay.src = './img/pause-button.svg';
    // } else {
    //     controlPlay.src = './img/play-button.svg';
    // }
});

controlStop.addEventListener('click', function () {
    timeAtual = [0, 0, 0];
    controlPlay.classList.remove('active');
    controlPlay.src = './img/play-button.svg';
    timerHoursSpan.textContent = '00';
    timerMinutesSpan.textContent = '00';
    timerSecondsSpan.textContent = '00';
});

controlReset.addEventListener('click', function () {
    timeAtual = [0, 0, 0];
    controlPlay.classList.add('active');
});



