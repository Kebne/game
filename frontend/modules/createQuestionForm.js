export function createQuestionForm(currentQuestion) {
    const templateElement = document.createElement('template');
    //implement a loop belove so we dont need repeating the html code
    templateElement.innerHTML = `
    <div class="game-wait"></div>
      <div class="game-countdown"></div>
      <h2>${currentQuestion.question}</h2>
      <div>
          <div>
            <button id="game-question-button1" class="game-button">${currentQuestion.alternative1}</button>
          </div>
          <div>
            <button id="game-question-button2" class="game-button">${currentQuestion.alternative2}</button>
          </div>
          <div>
            <button id="game-question-button3" class="game-button">${currentQuestion.alternative3}</button>
          </div>
          <div>
          <button id="game-question-button4" class="game-button">${currentQuestion.alternative4}</button>
        </div>
      </div>
      `;
      
    let element = document.querySelector('.game-questions');
    // This is only for refeshing display of game questions, otherwise we show the question under each other.
    element.innerHTML = "";
    let myTemplate = templateElement.content.cloneNode(true);
    element.appendChild(myTemplate);
  
  };