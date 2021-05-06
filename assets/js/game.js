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
    while (enemyHealth > 0) {

    

        //alerts players that they are starting the round
        window.alert("Welcome to Robot Gladiators!");

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        console.log(promptFight);



        // if player chooses to fight then fight 
        if (promptFight == "fight" || promptFight == "FIGHT") {

        

            //subtract the value of playerattack from value of enemyhealth and use that result to update enemyhealth variable
            enemyHealth = enemyHealth - playerAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " Attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " Health remaining!");

            //check enemys health 
            if (enemyHealth <= 0) {
                window.alert(enemyName + " Has died!");
            }
            else {
                window.alert(enemyName + " Still has " + enemyHealth + " Health Remaining.");
            }

            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " Attacked you! " + playerName + " Now has " + playerHealth + " Health Left ");

            //check players health 
            if (playerHealth <= 0) {
                window.alert(playerName + " Has Died. ");
            }
            else {
                window.alert(playerName + " Still has " + playerHealth + " health Remaining! ");
            }
            // if player chooses to skip 
            } else if (promptFight == "skip" || promptFight == "SKIP") {
                window.alert(playerName + " has chosen to skip the fight!");
            
                // confirm player wants to skip 
                var confirmSkip = window.confirm("Are you sure youd like to quit?");

                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    //subtract player money
                    playerMoney = playerMoney - 2;
                }
                else {
                    fight();
                }
            
            } 
            
            else {
                window.alert("You need to choose a valid option. Try again!");
            }
            console.log(playerMoney);
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
     fight(pickedEnemyName);


}


















































































































/* this creates a function named "fight"


//declared functions start !!!

// this is a function with the name of fight and parenthese which is always needed.
//function fight() // start of code block the function named fight will only execute this block of code within the curly brackets
{
    window.alert("The fight has begun!");  // browser function alerting the player fight has begun 


}





// window function (window=browser)
// window.prompt("What is your robot's name?");   // browser function asking for player input that is sent back to program, USER INPUT 







var playerName = window.prompt("What is your robot's name?"); // can call on this var name by using playerName USER INPUT WILL BE PLACED INTO THE VAR playerName

// what is this?
console.log(playerName)



console.log("This logs a string, good for leaving youself a message");
// this will do math and log 20
console.log(10 +10);
// what is this?
console.log("Our robots name is " + playerName);






// window.alert(playerName);
// note the lack of quotation marks around playerName




























// fight();  // a call to the function we declared ^ */