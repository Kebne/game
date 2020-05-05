
export function playerChoice() {
const form = document.forms[0];
const radios = form.elements['questions'];
console.log('radios', radios);
  const choice = `Du valde: ${radios.value}`;
  console.log('const choice: ', radios.value);
  const outputEl = document.querySelector('.game-choice').innerHTML = choice;
  return radios.value;

};