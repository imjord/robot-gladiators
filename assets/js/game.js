







var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' ");

        //if player picks skip confirm and then stop the loop 
        if (promptFight == "skip" || promptFight == "SKIP") {
            // Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            //if yes (true) leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye");
                //subtract player money for quitting
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }


        }


        //remove enemys health by subtracting the amount set in the player attack variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(playerInfo.name + ' attacked ' + enemy.name + '.  ' + enemy.name + ' now has ' + enemy.health + ' health remaining.');

        //check enemys health 

        if (enemy.health <=0) {
            window.alert(enemy.name + ' has died!');


            //award player money for winning 
            playerInfo.money = playerInfo.money + 20;

            //leave while loop since enemy is dead
            break;

        }

        else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health remaining');
        }

        // remove players health by subtracting the amount set in the enemy attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log (enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining. ');


        // checks player health 

        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died! ');
            //leave loop since player ded
            break;

        }
        else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health remaining,');

        }
    
     }
}





//function to start a new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();




    // fight each enemy robot by looping over them and fighting them one at a time 

    for (var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive keep fighting 
        if (playerInfo.health > 0) { 
            window.alert(' welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array 
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass the picked enemyname variables value into the fight function where it will assume the value of the enemyname parameter
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")

                if (storeConfirm) {
                    shop();
                }



            }
        }
        else {
            window.alert(" you have lost your robot in battle! GAME OVER");
            break;
        }
    }

    endGame();

}

var endGame = function() {
  
    window.alert("The game has now ended. Lets see how you did!");
  // if player is still alive player wins! 
  if (playerInfo.health > 0) {
      window.alert("great job youve survived the game you now have a score of " + playerInfo.money + ". ");
  }
  else {
      window.alert("youve lost your robot in battle")
  }

  // ask play again
  var playerAgainConfirm = window.confirm(" Do you want to play again? ");


  if (playerAgainConfirm) {
      startGame();
  } 
  else {

      window.alert("Thanks for playing Robot Gladiators!");
  }

};

var shop = function() {
   
    //ASK PLAYER WHAT THEY WOULD LIKE
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health UPGRADE Your attack or LEAVE the shop? please enter one UPGRADE REFILL OR LEAVE"
    );
        switch (shopOptionPrompt) {
            case "REFILL": 
            case "refill":
            playerInfo.refillHealth();
            break;
            case "UPGRADE": 
            case "upgrade":
            playerInfo.upgradeAttack();
            break;
            case "LEAVE": 
            case"leave":
            window.alert("Leaving the store");
            break;

            //do nothing function will end
            
            default:
                window.alert("You did not pick a valid option. Try again");
                shop();
                break;
         }
}



var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) +min);

    return value;
}

// game variables 

var playerInfo = {
    name: window.prompt("What is your robots name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, 
    refillHealth: function() {
        if (thismoney >= 7) {
            window.alert("refilling players halth by 20 for 7 dollars. ");
            this.health += 20;
            this.money -= 7;
        } 
        else {
            window.alert("You dont have enough money!");
        }
    },


    upgradeAttack: function() {
        if(this.money >= 7) {
            window.alert("Upgrading players attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
            else {
                window.alert("You have no money!");
            }
    }
};

// object array 

var enemyInfo = [
    {
        name:'Roborto',
        attack: randomNumber(10, 14)
    },
    {
        name:"Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];



startGame();



























































































































