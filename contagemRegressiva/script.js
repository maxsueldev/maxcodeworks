/* Passamos para variáveis, cada span em
que vamos trabalhar seu conteúdo, todas
vindo da DOM
*/

const daysSpan = 
  document.querySelector('[data-days]');
const hoursSpan = 
  document.querySelector('[data-hours]');
const minutesSpan = 
  document.querySelector('[data-minutes]');
const secondsSpan = 
  document.querySelector('[data-seconds]');

const lancamentoSpan = 
  document.querySelector('.dataLancamento');

/* Definimos o dia e horario do lançamento
do produto e passamos esse valor dinâmico
para o span do lançamento
*/
const dateTimeLancamento = 
  '06/04/2024 01:10:00';
lancamentoSpan.textContent = 
  dateTimeLancamento;

/* Função que vai pegar essa data de
lançamento e a retornar no formato ideal
para objeto do tipo Date
*/
function toIsoFormat(dateTime) {
  const [date, time] = dateTime.split(' ');
  const [DD, MM, YYYY] = date.split('/');
  const [HH, mm, ss] = time.split(':');
  return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}`;
}

/* Criamos uma variável com a data de 
lançamento formatada, do tipo Date
*/
const dateFormatLancamento = 
  new Date(toIsoFormat(dateTimeLancamento));

/* Função para renderizar em cada span
do countdown, seus valores
*/
function render(days, hours, minutes, seconds) {
  daysSpan.textContent = days;
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;
}

/* 
Função que vai ser responsável por
fazer o tempo de countdown de acordo
com a data e horário atual
*/
function countdown() {
    const dateNow = new Date();
  
    /* Caso a data de lançamento já passou,
    paramos o setInterval
    */
    if(dateFormatLancamento <= dateNow) {
      clearInterval(interval);
      render('00', '00', '00', '00');
      return;
    }
  
    /* Tempo restante em milissegundos
    */
    const timeLeft = 
      dateFormatLancamento - dateNow;

      let days = 
      Math.floor(timeLeft /
                (1000 * 60 * 60 * 24));
    let hours =
      Math.floor((timeLeft %
                 (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60));
    let minutes = 
      Math.floor((timeLeft %
                 (1000 * 60 * 60)) /
                (1000 * 60));
    let seconds = 
      Math.floor((timeLeft %
                 (1000 * 60) / 1000));
  /* Caso o valor seja menor que 10,
  acrescentamos um '0' antes dele
  */
  days = days < 10 ? '0' + days : days;
  hours = hours < 10 ? '0' + hours : hours;
  minutes =
    minutes < 10 ? '0' + minutes : minutes;
  seconds =
    seconds < 10 ? '0' + seconds : seconds;

  /* Os valores são renderizados na DOM
  a cada chamada da função
  */
  render(days, hours, minutes, seconds);
}

/* A cada 1 segundo, chamamos a função
countdown
*/
const interval = setInterval(countdown, 1000);
