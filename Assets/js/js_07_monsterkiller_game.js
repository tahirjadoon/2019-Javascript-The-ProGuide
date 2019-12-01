/**********************************************************************/
/**** This JS is dependent upon the js_07_monsterkiller_startup.js ****/
/**********************************************************************/

//use the object for the global values and for using the enums for checking the mode
const app = {
    ATTACK_VALUE: 10,
    STRONG_ATTACK_VALUE: 17,
    MONSTER_ATTACK_VALUE: 14,
    HEAL_VALUE: 20,
    MODE_ENUM: {
        ATTACK: 0,
        STRONG_ATTACK: 1
    },
    LOG_EVENT_ENUM: {
        PLAYER_ATTACK: 'PLAYER_ATTACK',
        PLAYER_STRONG_ATTACK: 'PLAYER_STRONG_ATTACK',
        MONSTER_ATTACK: 'MONSTER_ATTACK',
        MONSTER_STRONG_ATTACK: 'MONSTER_STRONG_ATTACK',
        PLAYER_HEAL: 'PLAYER_HEAL',
        GAME_OVER: 'GAME_OVER'
    }
};

//get the user input
function getMaxLife(){
    const enteredtValue = prompt('Maximum life', '100');
    let parsedValue = +enteredtValue; //can use parseInt or just +
    if(isNaN(parsedValue) || parsedValue <= 0){
        //parsedValue = 100; //rather than settiing to a valid value will be using try/catch so throw error
        throw {message: 'Invalid user input!'};
    }
    return parsedValue;
}

//since this is crucial code, wrap it in try/catch block
let chosenMaxLife;
try{
    chosenMaxLife = getMaxLife();
}
catch(e){
    console.log(e);
    alert(e.message + '\r\nA default of 100 has been used');
    chosenMaxLife = 100;
}
 
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let initialPlayerHealth;

//for logging
let log = [];

//reset the bars
adjustHealthBars(chosenMaxLife);

//functions to keep the code dry

function writeToLog(event, value, monsterHealth, playerHealth){
    //build the object
    let logEntry = {
        event: event,
        value: value,
        target: '', //will fill the target below
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };

    //using a switch rather than if else and doing practive so not keeping it dry for a reason
    switch(event){
        case app.LOG_EVENT_ENUM.PLAYER_ATTACK:
            logEntry.target = "MONSTER";
            break;
        case app.LOG_EVENT_ENUM.PLAYER_STRONG_ATTACK:
            logEntry.target = "MONSTER";
            break;
        case app.LOG_EVENT_ENUM.MONSTER_ATTACK:
            logEntry.target = "PLAYER";
            break;
        case app.LOG_EVENT_ENUM.MONSTER_STRONG_ATTACK:
            logEntry.target = "PLAYER";
            break;
        case app.LOG_EVENT_ENUM.PLAYER_HEAL:
            logEntry.target = "PLAYER";
            break;
        case app.LOG_EVENT_ENUM.GAME_OVER:
            logEntry.target = "";
            break;
        default:
            return; //dont push
    }
    //push to array
    log.push(logEntry);
}

function reset(){
    //do not use let here since these are global variables
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    //ceset game
    resetGame(chosenMaxLife);
}

function isWon(){
    //resetting bonus life
    if (hasBonusLife && currentPlayerHealth <= 0){
        //turn of the flag
        hasBonusLife = false;
        //update the UI
        removeBonusLife();
        //set the current player health to initial player health
        if(initialPlayerHealth)
            currentPlayerHealth = initialPlayerHealth;
        //reset player health
        setPlayerHealth(currentPlayerHealth);
        alert('You would be dead but the bonus life save you!')
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("You won!");
        writeToLog(app.LOG_EVENT_ENUM.GAME_OVER, 'Player Won', currentMonsterHealth, currentPlayerHealth);
        reset();//reset game
        return true;
    }
    else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert("You lost!");
        writeToLog(app.LOG_EVENT_ENUM.GAME_OVER, 'Monster Won', currentMonsterHealth, currentPlayerHealth);
        reset();//reset game
        return true;
    }
    else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert("You have a draw!");
        writeToLog(app.LOG_EVENT_ENUM.GAME_OVER, 'Draw', currentMonsterHealth, currentPlayerHealth);
        reset();//reset game
        return true;
    }
    return false;
}

function attackMonster(mode){
    //using a single line if statement, it is called Ternary Conditional statement
    //after the ? is the true value and after : is the false value
    const maxDamage = mode === app.MODE_ENUM.ATTACK ? app.ATTACK_VALUE : app.STRONG_ATTACK_VALUE;

    //attack the monster, it will return a random number
    const damage = dealMonsterDamage(maxDamage);
    //reduce the currentMonsterHealth by the damage value
    currentMonsterHealth -= damage;
    //srite to log
    const attack = mode === app.MODE_ENUM.ATTACK ? app.LOG_EVENT_ENUM.PLAYER_ATTACK : app.LOG_EVENT_ENUM.PLAYER_STRONG_ATTACK;
    writeToLog(attack, damage, currentMonsterHealth, currentPlayerHealth);
}

function attackPlayer(){
    initialPlayerHealth = currentPlayerHealth;
    //monster needs to attack the player as well
    const playerDamage = dealPlayerDamage(app.MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    //write to log
    writeToLog(app.LOG_EVENT_ENUM.MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);
}

function doAttack(mode){

    if(isWon()) return;

    //attack monster
    attackMonster(mode);

    if(isWon()) return;

    //attack player
    attackPlayer();

    isWon();
}

//Attack function
function onAttack(){
    doAttack(app.MODE_ENUM.ATTACK);
}

//Strong attack function
function onStrongAttack(){
    doAttack(app.MODE_ENUM.STRONG_ATTACK);
}

//heal player handler
function onHealPlayer(){
    //initially apply the full HEAL_VALUE but then check overwrite
    let healValue = app.HEAL_VALUE;
    if(currentPlayerHealth >= chosenMaxLife - app.HEAL_VALUE){
        alert("You can't heal more than initial value!");
        //heal the player back up to initial health
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    //write log
    writeToLog(app.LOG_EVENT_ENUM.PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);

    //attack the player
    attackPlayer();

    isWon();
}

//write log
function onPrintLog(){
    //use a for loop to print the results
    //console.log(log);
    //normal for loop
    /*
    for(let i=0; i<log.length; i++){
        console.log(log[i]);
        console.log('--------------------------');
    }
    */
    //for-of loop with for-in
    let i = 1;
    for(const el of log){
        console.log(`#${i} Log...`);
        //since we have an object in the loop, we can use forn in here
        for(const key in el){
            console.log(`${key} : ${el[key]}`);
        }
        i++;
    }
    //while loop
    /*
    let j = 0;
    while(j < log.length){
        console.log(log[i]);
        console.log('--------------------------');
        j += 1;
    }
    */
    //do while loop
    /*
    let j = 0;
    do{
        console.log(log[i]);
        console.log('--------------------------');
        j += 1;
    } while(j < log.length);
    */
}

//button handlers, since we haven't yet learned how to pass the param to a function, using a param less function at this time
attackBtn.addEventListener('click', onAttack);
strongAttackBtn.addEventListener('click', onStrongAttack);
healBtn.addEventListener('click', onHealPlayer);
logBtn.addEventListener('click', onPrintLog);