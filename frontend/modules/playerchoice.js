
export function playerChoice() {
  const form = document.forms[0];
  const radios = form.elements['questions'];
  const choice = `Du valde: ${radios.value}`;
  document.querySelector('.game-choice').innerHTML = choice;

  // Todo implement this
  //document.querySelector(`.${currentPlayer}-info-rightanswer`).innerHTML = `Antal rätt: players${players.rightAnswerNr}`; 
  //

  return radios.value;
};