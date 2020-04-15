
export function playerChoice(radios) {
/*const form = document.forms[0];
const radios = form.elements['questions'];*/
  const choice = `Du valde: ${radios.value}`;
  console.log('const choice: ', radios.value);
  const outputEl = document.querySelector('.game-choice').innerHTML = choice;
  return radios.value;

};