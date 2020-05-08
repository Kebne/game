
export function playerChoice() {
  const form = document.forms[0];
  const radios = form.elements['questions'];
  console.log(`Du valde: ${radios.value}`);

  // Todo implement this
  //document.querySelector(`.${currentPlayer}-info-rightanswer`).innerHTML = `Antal rätt: players${players.rightAnswerNr}`; 
  //

  return radios.value;
};