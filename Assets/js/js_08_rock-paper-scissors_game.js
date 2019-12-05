//task8 Getting the startGame button
const startGameBtn = document.getElementById('start-game-btn'); 

//task8: object to have common pieces like enums
//https://stackoverflow.com/questions/59150018/proper-use-of-this-in-javascript-objects?noredirect=1#comment104525531_59150018
//https://stackoverflow.com/questions/4616202/self-references-in-object-literals-initializers
const app = {
  enums: {
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSORS: 'SCISSORS',
    //DEFAULT_USER_CHOICE: this.ROCK //doesn't work 
    get DEFAULT_USER_CHOICE() {
      //return this.ROCK;
      return app.enums.ROCK;
    }
  },
  enumsResult: {
    DRAW: 'DRAW',
    PLAYER_WINS: 'PLAYER WINS',
    COMPUTER_WINS: 'COMPUTER WINS'
  },
  prop: {
    isGameRunning: false
  }
};

//task8: player choice arrow function
const isValidSelection = (selection) => {
  if (selection === null || selection === undefined)
    return false;
  selection = selection.toUpperCase();
  //if not valid selection then below line will turn to TRUE, need to negate since in FALSE means not valid
  //or write with logical OR as ||
  const isValid = !(selection !== app.enums.ROCK && selection !== app.enums.PAPER && selection !== app.enums.SCISSORS);
  //console.log(selection, isValid);
  return isValid;
}
const getPlayerChoice = () => {
  //working with radio buttons but here can get via a prompt as well
  let selection = document.querySelector('input[name="rdoSelection"]:checked').value;
  if (!isValidSelection(selection)) {
    alert(`Invalid choice! We chose ${app.enums.DEFAULT_USER_CHOICE} for you!`);
    selection = app.enums.DEFAULT_USER_CHOICE;
  }
  return selection.toUpperCase();
};

//task8: Game choice function
const gameChoice = () => {
  //generate a random value
  const randomValue = Math.random();
  //default choice
  let choice = app.enums.SCISSORS;
  //make a choice
  if(randomValue < 0.34)
    choice = app.enums.ROCK;
  else if(randomValue < 0.67)
    choice = app.enums.PAPER;
  //return a choice
  return choice;
};

//task8: determine winner function
const determineWinner = (playerSelection, gameChoice) => {
  let result;
  if(gameChoice === playerSelection){
    result = app.enumsResult.DRAW;
  }
  else if(
      (gameChoice === app.enums.ROCK && playerSelection === app.enums.PAPER) ||
      (gameChoice === app.enums.PAPER && playerSelection === app.enums.SCISSORS) || 
      (gameChoice === app.enums.SCISSORS && playerSelection === app.enums.ROCK)
    ){
    result = app.enumsResult.PLAYER_WINS;
  }
  else
    result = app.enumsResult.COMPUTER_WINS;
  return result;
};

//task08: event listener
startGameBtn.addEventListener('click', () => {
  if(!app.prop.isGameRunning) {
    app.prop.isGameRunning = true;
    console.log('Game is starting...');
  }
  const playerSelection = getPlayerChoice();
  const gameSelection = gameChoice();
  const winner = determineWinner(playerSelection, gameSelection);
  let result = `Player: ${playerSelection} Computer: ${gameSelection} \r\nYou `;
  switch (winner){
    case app.enumsResult.PLAYER_WINS: 
      result += 'have Won';
      break;
    case app.enumsResult.COMPUTER_WINS: 
      result += 'have Lost';
      break;
    default:
        result += 'had a Draw';
  }
  alert(result);
});
