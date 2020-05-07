export function createGameBoard(data) {

class gameBoard extends HTMLElement {
  constructor() {
    super();
    
    
    function showSeating(playerNumber = 1) {
      data.forEach((element) => {
        document.querySelector(`.player${playerNumber}-info-name`).innerHTML =  `Namn: ${element.name}<br>`;
        document.querySelector(`.player${playerNumber}-info-marks`).innerHTML = `Marker: ${element.marks}<br>`;
        document.querySelector(`.player${playerNumber}-info-chair`).innerHTML = `Stolnr: ${element.seat}<br>`;
        playerNumber++;
      });
    };

    let templateStyle = document.createElement('style');
    templateStyle.innerHTML = `
      
      .game-board {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 150px 150px 150px auto;
        grid-template-areas: 
        "player1 board player4 log"
        "player2 board player3 log"
        ". player5 . gamelog"
        "gamelog gamelog gamelog"
        ;
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
        background-image: url('images/game-table.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        /*background: url(images/game-board.jpg) no-repeat center center fixed; 
        background-size: contain;*/
      }
      .player1 {
        grid-area: player1; 
        background-color: #153244; 
        box-sizing: border-box; 
        padding: var(--standard-padding);
        display: flex;
        gap: 8px;
      }

      .player2 {
        grid-area: player2; 
        background-color: #4D4940; 
        box-sizing: border-box;
        padding: var(--standard-padding);
        display: flex;
        gap: 8px;
      }
      .player3 {
        grid-area: player3; 
        background-color: #805238; 
        box-sizing: border-box;
        padding: var(--standard-padding);
        display: flex;
        gap: 8px;
      }
      .player4 {
        grid-area: player4; 
        background-color: #94855A; 
        box-sizing: border-box;
        padding: var(--standard-padding);
        display: flex;
        gap: 8px;
      }
      .player5 {
        grid-area: player5; 
        background-color: #5a8f93; 
        box-sizing: border-box;
        padding: var(--standard-padding);
        display: flex;
        gap: 8px;
      }
      .game-log {
        grid-area: gamelog; 
        box-sizing: border-box;
        padding: var(--standard-padding);
        color: #333;
      }
      .img-mark-player1, .img-mark-player2, .img-mark-player3, .img-mark-player4, .img-mark-player5 {
        width: 100%;
        display: relative;
      }
      .mark-player1, .mark-player2, .mark-player3, .mark-player4, .mark-player5 {
        width: 60px;
        height: 60px;
      }
      
    `;

    let templateElement = document.createElement('template');
    templateElement.innerHTML = `
      <div class="game-board">
        <div class="dealer">Dealer</div>

        <div class="player1 player">
          <div class="player1-info">
            <span class="player1-info-name"></span>
            <span class="player1-info-marks"></span>
            <span class="player1-info-chair"></span>
            <span class="player1-info-rightanswer"></span>
          </div>
          <div class="player1-avatar"><img class="img-player-avatar" src="images/player1-avatar.png" alt="player1 avatar"></div>
          <div class="mark-player1"><img class="img-mark-player1" src="images/mark.png" alt="player1 mark"></div>
        </div>

        <div class="board"></div>
        
        <div class="player4 player">
          <div class="player4-info">
            <span class="player4-info-name"></span>
            <span class="player4-info-marks"></span>
            <span class="player4-info-chair"></span>
            <span class="player4-info-rightanswer"></span>
          </div>
          <div class="player4-avatar"><img class="img-player-avatar"  src="images/player2-avatar.png" alt="player4 avatar"></div>
          <div class="mark-player4"><img class="img-mark-player4" src="images/mark.png" alt="player4 mark"></div>
        </div>

        <div class="player2 player">
          <div class="player2-info">
            <span class="player2-info-name"></span>
            <span class="player2-info-marks"></span>
            <span class="player2-info-chair"></span>
            <span class="player2-info-rightanswer"></span>
          </div>
          <div class="player2-avatar"><img class="img-player-avatar" src="images/player3-avatar.png" alt="player2 avatar"></div>
          <div class="mark-player2"><img class="img-mark-player2" src="images/mark.png" alt="player2 mark"></div>
      </div>

      <div class="player3 player">
        <div class="player3-info">
          <span class="player3-info-name"></span>
          <span class="player3-info-marks"></span>
          <span class="player3-info-chair"></span>
          <span class="player3-info-rightanswer"></span>
        </div>
          <div class="player3-avatar"><img class="img-player-avatar" src="images/player3-avatar.png" alt="player3 avatar"></div>
          <div class="mark-player3"><img class="img-mark-player3" src="images/mark.png" alt="player3 mark"></div>
      </div>

      <div class="player5 player">
        <div class="player5-info">
          <span class="player5-info-name"></span>
          <span class="player5-info-marks"></span>
          <span class="player5-info-chair"></span>
          <span class="player5-info-rightanswer"></span>
        </div>
          <div class="player5-avatar"><img class="img-player-avatar" src="images/player5-avatar.jpg" alt="player5 avatar"></div>
          <div class="mark-player5"><img class="img-mark-player5" src="images/mark.png" alt="player5 mark"></div>
      </div>

      <div class="game-log"></div>


      </div>
    `;
    this.append(templateStyle);
    this.appendChild(templateElement.content.cloneNode(true));
    
   
    showSeating();
  }
};
window.customElements.define('game-board', gameBoard);


};
