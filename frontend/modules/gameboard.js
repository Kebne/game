export function createGameBoard(seats) {

class gameBoard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    
    function showSeating(seats, playerNumber = 1) {
      seats.forEach((element) => {
        let name = `${element}`;
        shadow.querySelector(`.player${playerNumber}`).innerHTML = name;
        shadow.querySelector(`.player${playerNumber}`).style.border = '2px solid pink';
        playerNumber++;
      });
      console.log('all players seated');
    };
    
    
    let templateStyle = document.createElement('style');
    templateStyle.innerHTML = `
      :host {display: block;} 
      .game-board {
        display: grid;
        grid-template-columns: 150px 400px 150px;
        grid-template-rows: 150px 150px 150px;
        grid-template-areas: 
        ". dealer ."
        "player1 board player4"
        "player2 board player3";
        margin-bottom: 1rem;
      }
      .dealer{grid-area: dealer; background-color: pink;}
      .board{grid-area: board; background-color: green;}
      .player1{grid-area: player1; background-color: blue; box-sizing: border-box;}
      .player2{grid-area: player2; background-color: black; box-sizing: border-box;}
      .player3{grid-area: player3; background-color: yellow; box-sizing: border-box;}
      .player4{grid-area: player4; background-color: grey; box-sizing: border-box;}
    `;

    let templateElement = document.createElement('template');
    templateElement.innerHTML = `
      <div class="game-board">
        <div class="dealer">dealer</div>

        <div class="player1 player">p1</div>
        <div class="board">board</div>
        <div class="player4 player">p4</div>

        <div class="player2 player">p2</div>
        <div class="player3 player">p3</div>
      </div>
    `;
    shadow.append(templateStyle);
    shadow.appendChild(templateElement.content.cloneNode(true));
    
    showSeating(seats);
  }
};
window.customElements.define('game-board', gameBoard);


};
