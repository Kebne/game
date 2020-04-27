export function createGameBoard(players) {

class gameBoard extends HTMLElement {
  constructor() {
    super();
    
    
    function showSeating(playerNumber = 1) {
      let data = Object.values(players);
      //this need to be updated
      
      data.forEach((element) => {
        document.querySelector(`.player${playerNumber}-info`).insertAdjacentHTML('afterbegin', `Namn: ${element.name}<br>`);
        document.querySelector(`.player${playerNumber}-info`).insertAdjacentHTML('beforeend', `Marker: ${element.marks}<br>`);
        document.querySelector(`.player${playerNumber}-info`).insertAdjacentHTML('beforeend', `Stolnr: ${element.seat}`);
        document.querySelector(`.player${playerNumber} .player-mark-meter`).insertAdjacentHTML('beforeend', `<progress value="${element.marks}" max="1000" class="player${playerNumber}-progress"></progress>`);
        
        playerNumber++;
      });
      
    };

   
    
    
    
    let templateStyle = document.createElement('style');
    templateStyle.innerHTML = `
      
      .game-board {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 150px 150px;
        grid-template-areas: 
        "player1 board player4"
        "player2 board player3";
        margin-bottom: 1rem;
        color: #eee;
        
      }
      .img-player-avatar {
        max-height: 120px;
        min-height: 70px;
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
        /*background: url(images/game-board.jpg) no-repeat center center fixed; 
        background-size: contain;*/
      }
      .player1 {
        grid-area: player1; 
        background-color: #153244; 
        box-sizing: border-box; 
        padding: 1rem;
        display: flex;
        gap: 8px;
      }

      .player2 {
        grid-area: player2; 
        background-color: #4D4940; 
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        gap: 8px;
      }
      .player3 {
        grid-area: player3; 
        background-color: #805238; 
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        gap: 8px;
      }
      .player4 {
        grid-area: player4; 
        background-color: #94855A; 
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        gap: 8px;
      }
      
    `;

    let templateElement = document.createElement('template');
    templateElement.innerHTML = `
      <div class="game-board">
        <div class="dealer">Dealer</div>

        <div class="player1 player">
          <div class="player1-info">
            <div class="player-mark-meter"></div>
          </div>
          <div class="player1-avatar"><img class="img-player-avatar" src="images/player1-avatar.png" alt="player1 avatar"></div>
        </div>

        <div class="board"></div>
        
        <div class="player4 player">
          <div class="player4-info">
            <div class="player-mark-meter"></div>
          </div>
          <div class="player4-avatar"><img class="img-player-avatar"  src="images/player2-avatar.png" alt="player4 avatar"></div>
        </div>

        <div class="player2 player">
        <div class="player2-info">
          <div class="player-mark-meter"></div>
        </div>
        <div class="player2-avatar"><img class="img-player-avatar" src="images/player3-avatar.png" alt="player2 avatar"></div>
      </div>

      <div class="player3 player">
      <div class="player3-info">
        <div class="player-mark-meter"></div>
      </div>
        <div class="player3-avatar"><img class="img-player-avatar" src="images/player4-avatar.png" alt="player3 avatar"></div>
      </div>


      </div>
    `;
    this.append(templateStyle);
    this.appendChild(templateElement.content.cloneNode(true));
    
   
    showSeating();
  }
};
window.customElements.define('game-board', gameBoard);


};
