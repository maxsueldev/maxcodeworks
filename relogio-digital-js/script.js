const clockHoursSpan = document.querySelector('.clockHours');
const clockMinutesSpan = document.querySelector('.clockMinutes');
const clockSecondsSpan = document.querySelector('.clockSeconds');

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
    let dataAtual = new Date();
    let hours = dataAtual.getHours();
    let minutes = dataAtual.getMinutes();
    let seconds = dataAtual.getSeconds();

    let horario = verificaUnidade([hours, minutes, seconds]);

    clockHoursSpan.textContent = horario[0];
    clockMinutesSpan.textContent = horario[1];
    clockSecondsSpan.textContent = horario[2];

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