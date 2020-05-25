export class playerBox extends HTMLElement {
  
  constructor() {
    super();

    let whichPlayer = this.getAttribute('player');
    
    let templateElement = document.createElement('template');
    templateElement.innerHTML = `
    <div class="${whichPlayer}-avatar">
      <img class="img-player-avatar" src="images/${whichPlayer}-avatar.png" alt="${whichPlayer} avatar">
    </div>
    <div class="mark-wrapper-display-none mark-${whichPlayer}">
      <img class="img-mark-${whichPlayer}" src="images/mark.png" alt="${whichPlayer} mark"></div>
    </div>
    <div class="${whichPlayer}-info">
      <span class="${whichPlayer}-info-name"></span><br>
      <span class="${whichPlayer}-info-marks"></span><br>
      <span class="${whichPlayer}-info-rightanswer">Antal rätt svar: 0</span><br>
      <span class="${whichPlayer}-info-ready"></span>
    </div>
    <div><button class="${whichPlayer}-leave">Lämna</button></div>
    `;
    this.appendChild(templateElement.content.cloneNode(true));
  };

};
window.customElements.define('player-box', playerBox);