  // Countdown function
  export function countDown(timeLimit) {
    let timeleft = timeLimit;
    let downloadTimer = setInterval( ()=> {
      if(timeleft <= 0) {
        clearInterval(downloadTimer);
        document.querySelector('.game-countdown').innerHTML = 'Tiden är slut';
        document.querySelector('fieldset').setAttribute('disabled', true);
      } else {
      document.querySelector('.game-countdown').innerHTML = `${timeleft} sekunder kvar`;
      }
      timeleft -= 1;
    }, 1100);
  };
  