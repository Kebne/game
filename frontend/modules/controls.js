export class controls extends HTMLElement {
  
  constructor() {
    super();
   
    let templateElement = document.createElement('template');
    templateElement.innerHTML = `
    <div>
      <div class="player-status"></div>
      <div class="game-progress-buttons">
        <button class="js-player-ready player-input-button">Klar (starta)</button>
        <button class="js-player-ready-q player-input-button">2 frågor</button>
        <button class="js-player-ready-betting-done player-input-button">Betting done</button>
      </div>
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
    
      <div>
        <div class="player-switch">
          <i>Detta är endast till för testning, detta är inte en del av spelet</i><br>
          <label for="player-switch-select">Välj spelare:</label>
          <select class="player-switch-select">
            <!--options in here dynamical -->
          </select>
        </div>
        <hr>
        <div>
          <span>Välj fråga att visa:</span>
          <input id="get-question-nr" type="number" min="1" max="4" value="1">
          <button class="question-button player-input-button">Få fråga</button>
        </div>
      </div>

     
    `;
    this.appendChild(templateElement.content.cloneNode(true));
  };

};
window.customElements.define('player-controls', controls);