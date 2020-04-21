export function createGameBoard(players) {

class gameBoard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    
    function showSeating(playerNumber = 1) {
      let data = Object.values(players);
      data.forEach((element) => {
        shadow.querySelector(`.player${playerNumber}`).insertAdjacentHTML('afterbegin', `${element.name}<br>`);
        shadow.querySelector(`.player${playerNumber}`).insertAdjacentHTML('beforeend', `Marker: ${element.marks}`);
        playerNumber++;
      });
      console.log('Alla spelare sitter');
    };

    function pool(pot = 100) {
      shadow.querySelector('.board').insertAdjacentHTML('afterbegin', `Potten är: ${pot}`);
    };
    
    
    
    let templateStyle = document.createElement('style');
    templateStyle.innerHTML = `
      :host {display: block;} 
      .game-board {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 150px 150px 150px;
        grid-template-areas: 
        ". dealer ."
        "player1 board player4"
        "player2 board player3";
        margin-bottom: 3rem;
        color: #eee;
      }
      .dealer {
        grid-area: dealer; 
        background-color: #7f384b;
        padding: 1rem;
      }
      .board {
        grid-area: board; 
        background-color: #3e7f38;
        padding: 1rem;
      }
      .player1 {
        grid-area: player1; 
        background-color: #153244; 
        box-sizing: border-box; 
        padding: 1rem;
      }
      .player2 {
        grid-area: player2; 
        background-color: #4D4940; 
        box-sizing: border-box;
        padding: 1rem;
      }
      .player3 {
        grid-area: player3; 
        background-color: #805238; 
        box-sizing: border-box;
        padding: 1rem;
      }
      .player4 {
        grid-area: player4; 
        background-color: #94855A; 
        box-sizing: border-box;
        padding: 1rem;
      }
      
    `;

    let templateElement = document.createElement('template');
    templateElement.innerHTML = `
      <div class="game-board">
        <div class="dealer">Dealer</div>

        <div class="player1 player">
        </div>
        <div class="board"></div>
        <div class="player4 player"></div>

        <div class="player2 player"></div>
        <div class="player3 player"></div>
      </div>
    `;
    shadow.append(templateStyle);
    shadow.appendChild(templateElement.content.cloneNode(true));
    
    pool();
    showSeating();
  }
};
window.customElements.define('game-board', gameBoard);


};
