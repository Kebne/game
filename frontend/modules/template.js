// Create game form, e.g questions
export function createQuestionForm(currentQuestion) {
  const templateElement = document.createElement('template');
  templateElement.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <form id="game-form" name="demo">
      <fieldset>
        <div>
        <label>
          ${currentQuestion.alternative1}
          <input type="radio" value="${currentQuestion.alternative1}" name="questions">
        </label>
        </div>
        <div>
        <label>
          ${currentQuestion.alternative2}
          <input type="radio" value="${currentQuestion.alternative2}" name="questions">
        </label>
      </div>
        <div>
        <label>
          ${currentQuestion.alternative3}
          <input type="radio" value="${currentQuestion.alternative3}" name="questions">
        </label>
      </div>
        </fieldset>
      </form>
    </div>
  
    `;

    
  // Put template into DOM (web page)
  let el = document.querySelector('.game-questions');
  let myTemplate = templateElement.content.cloneNode(true);
  el.appendChild(myTemplate);

};