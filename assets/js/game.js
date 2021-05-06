/* game states

WIN - Player robot has defeated all enemy-robots 
*figth all enemy robots 
defeat each enemy-robot
LOSE - PLAYER ROBOTS HEALTH IS ZERO OR LESS




*/



var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple valuse at once like this 
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);



var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' ");

        //if player picks skip confirm and then stop the loop 
        if (promptFight == "skip" || promptFight == "SKIP") {
            // Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            //if yes (true) leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye");
                //subtract player money for quitting
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }


        }


        //remove enemys health by subtracting the amount set in the player attack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + ' attacked ' + enemyName + '.  ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');

        //check enemys health 

        if (enemyHealth <=0) {
            window.alert(enemyName + ' has died!');


            //award player money for winning 
            playerMoney = playerMoney + 20;

            //leave while loop since enemy is dead
            break;

        }

        else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health remaining');
        }

        // remove players health by subtracting the amount set in the enemy attack variable
        playerHealth = playerHealth - enemyAttack;
        console.log (enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining. ');


        // checks player health 

        if (playerHealth <= 0) {
            window.alert(playerName + ' has died! ');
            //leave loop since player ded
            break;

        }
        else {
            window.alert(playerName + ' still has ' + playerHealth + ' health remaining,');

        }
    
     }
}

// fight each enemy robot by looping over them and fighting them one at a time 

for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive keep fighting 
    if (playerHealth > 0) { 
        window.alert(' welcome to Robot Gladiators! Round ' + (i + 1));

        // pick new enemy to fight based on the index of the enemyNames array 
        var pickedEnemyName = enemyNames[i];

        // reset enemy health before starting new fight
        enemyHealth = 50;

        // pass the picked enemyname variables value into the fight function where it will assume the value of the enemyname parameter
        fight(pickedEnemyName);
    }
    else {
        window.alert(" you have lost your robot in battle! GAME OVER");
        break;
    }
 }




























































































































