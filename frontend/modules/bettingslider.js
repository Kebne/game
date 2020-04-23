export class bettingSlider extends HTMLElement {
  // remove this file
  constructor() {
    super();
    //const shadow = this.attachShadow({mode: 'open'});
    
    
    let playerInputStyle = document.createElement('style');
    playerInputStyle.innerHTML = `
      :host {display: block;} 
    `;

    let templateElement = document.createElement('template');
    templateElement.innerHTML = `
      <div class="game-slider">
        <input type="range" min="10" max="100" value="10" step="10" class="bet-slider">
        <output class="bet-slider-output"></output>
      </div>
    `;
    this.append(playerInputStyle);
    this.appendChild(templateElement.content.cloneNode(true));

    const slider = shadow.querySelector('.bet-slider');
    const output = shadow.querySelector('.bet-slider-output');
    output.innerHTML = slider.value;
    slider.addEventListener('change', sliderOutput);
    function sliderOutput() {
      output.innerHTML = slider.value;
    };
  }
};
window.customElements.define('game-betting-slider', bettingSlider);