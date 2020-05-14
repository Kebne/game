export function countDown(timeLimit, currentQuestion, done) {
    let timeleft = timeLimit;
    let downloadTimer = setInterval( ()=> {
      if(timeleft <= 0) {
        clearInterval(downloadTimer);
        document.querySelector('.game-countdown').innerHTML = 'Tiden är slut';
        //document.querySelector('fieldset').setAttribute('disabled', true);
        let customEvent = new CustomEvent("gameEvent", {detail: `Rätt svar är: ${currentQuestion.correctAnswer}`, bubbles: true, cancelable: true });
        document.querySelector('.game-countdown').dispatchEvent(customEvent);
    
        done();        
      } 
      else {
        document.querySelector('.game-countdown').innerHTML = `0:${timeleft} sekunder kvar`;
      }
      timeleft -= 1;
    }, 1000);
  };
  