export function createGameBoard(players, gamePot) {

class gameBoard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    
    
    function showSeating(playerNumber = 1) {
      let data = Object.values(players);
      //this need to be updated
      shadow.querySelector('.board').insertAdjacentHTML('afterbegin', `Potten är: ${gamePot}`);
      data.forEach((element) => {
        shadow.querySelector(`.player${playerNumber}`).insertAdjacentHTML('afterbegin', `Namn: ${element.name}<br>`);
        shadow.querySelector(`.player${playerNumber}`).insertAdjacentHTML('beforeend', `Marker: ${element.marks}<br>`);
        shadow.querySelector(`.player${playerNumber}`).insertAdjacentHTML('beforeend', `Stolnr: ${element.seat}`);
        
        playerNumber++;
      });
      console.log('Alla spelare sitter');
    };

   
    
    
    
    let templateStyle = document.createElement('style');
    templateStyle.innerHTML = `
      :host {display: block;} 
      .game-board {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 150px 150px;
        grid-template-areas: 
       
        "player1 board player4"
        "player2 board player3";
        margin-bottom: 1rem;
        color: #eee;
      }
      .dealer {
        grid-area: dealer; 
        background-color: #7f384b;
        padding: 1rem;
        display: none;
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
          <progress value="900" max="1000"></progress>
        </div>
        <div class="board"></div>
        <div class="player4 player">
          <progress value="900" max="1000">70 %</progress>
        </div>

        <div class="player2 player">
          <progress value="900" max="1000">70 %</progress>
        </div>
        <div class="player3 player">
          <progress value="900" max="1000">70 %</progress>
        </div>
      </div>
    `;
    shadow.append(templateStyle);
    shadow.appendChild(templateElement.content.cloneNode(true));
    
   
    showSeating();
  }
};
window.customElements.define('game-board', gameBoard);


};
