export function createQuestionForm(currentQuestion) {
document.querySelector('.game-questions').style.display = 'block';
  const templateElement = document.createElement('template');
  templateElement.innerHTML = `
  <div class="game-wait"></div>
    <div class="game-countdown"></div>
    <h2>${currentQuestion.question}</h2>
    <form id="game-form">
      <fieldset>
        <div>
        <label style="display: none;">
          ${currentQuestion.alternative1}
          <input  type="radio" value="${currentQuestion.alternative1}" name="questions">
        </label>
        <button class="game-button">${currentQuestion.alternative1}</button>
        </div>
        <div>
        <label style="display: none;">
          ${currentQuestion.alternative2}
          <input type="radio" value="${currentQuestion.alternative2}" name="questions">
        </label>
        <button class="game-button">${currentQuestion.alternative2}</button>
      </div>
        <div>
        <label style="display: none;">
          ${currentQuestion.alternative3}
          <input type="radio" value="${currentQuestion.alternative3}" name="questions">
        </label>
        <button class="game-button">${currentQuestion.alternative3}</button>
      </div>
        </fieldset>
      </form>
    </div>
  
    `;

    
  // Put template into DOM (web page)
  let element = document.querySelector('.game-questions');
  // This is only for refeshing display of game questions, otherwise we show the question under each other.
  element.innerHTML = "";
  let myTemplate = templateElement.content.cloneNode(true);
  element.appendChild(myTemplate);

};