export class controls extends HTMLElement {
  
  constructor() {
    super();
   
    let templateElement = document.createElement('template');
    templateElement.innerHTML = `
    
    <div class="player1-info-rightanswer">Antal rätt svar: 0</span>

      <div><button class="player-input-button">Lämna (ej funktionell)</button></div>

      <div class="player-bet game-hide">

        <div class="game-slider">
          <label for="playerslider">Att satsa:</label>
          <input id="playerslider" type="range" min="10" max="100" value="10" step="10" class="bet-slider">
          <output class="bet-slider-output"></output>
        </div>
        <div class="player-input">
            <div><button disabled class="js-player-bet player-input-button">Betta</button></div>
            <div><button disabled class="js-player-pass player-input-button">Passa</button></div>
            <div><button disabled class="js-player-fold player-input-button">Lägga sig</button></div>
        </div>
      
      </div>
      
    
    `;
    this.appendChild(templateElement.content.cloneNode(true));
  };

};
window.customElements.define('player-controls', controls);