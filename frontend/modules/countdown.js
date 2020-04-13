  // Countdown function
  export function countDown(currentQuestion) {
    let timeleft = 2;
    let downloadTimer = setInterval( ()=> {
      if(timeleft <= 0) {
        clearInterval(downloadTimer);
        document.querySelector('.game-countdown').innerHTML = 'Time is up';
        document.querySelector('fieldset').setAttribute('disabled', true);
        document.querySelector('.game-correct-answer').innerHTML = `The correct answer ${questions.question1.correctAnswer}`;
        checkIfPlayerIsCorrect(currentQuestion);
      } else {
      document.querySelector('.game-countdown').innerHTML = `${timeleft} seconds left`;
      }
      timeleft -= 1;
    }, 1100);
  };
  