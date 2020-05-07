export class playerBox extends HTMLElement {
  
  constructor() {
    super();

    let whichPlayer = this.getAttribute('player');
   
    let templateElement = document.createElement('template');
    templateElement.innerHTML = `
    
      <div class="${whichPlayer}-info">
        <span class="${whichPlayer}-info-name"></span>
        <span class="${whichPlayer}-info-marks"></span>
        <span class="${whichPlayer}-info-chair"></span>
        <span class="${whichPlayer}-info-rightanswer"></span>
      </div>
      <div class="${whichPlayer}-avatar">
        <img class="img-player-avatar" src="images/${whichPlayer}-avatar.png" alt="${whichPlayer} avatar">
      </div>
      <div class="mark-${whichPlayer}">
        <img class="img-mark-${whichPlayer}" src="images/mark.png" alt="${whichPlayer} mark"></div>
      </div>
   
    `;
    this.appendChild(templateElement.content.cloneNode(true));
  };

};
window.customElements.define('player-box', playerBox);