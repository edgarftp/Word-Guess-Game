
var movies = { // object for the whole game, possible useful to copypaste for other categories

btnMenuDisplay: 1, //Start this variable at 1 for display_btn function
under: [], //Array create to display the underscores according to the randPick from oscarsArray
userGuess: "", //variable to save the key typed by the user
//array of options to pick from random
oscarsArray : ["the shape of water", "moonlight","spotlight","birdman", "12 years a slave", "argo", "the artist", "the hurt locker", "slumdog millionaire", "no country for old men", "the departed", "crash", "chicago", "a beautiful mind", "gladiator", "american beauty", "shakespeare in love", "titanic", "the english patient", "braveheart", "forest gump", "unforgiven", "the silence of the lamb", "dances with wolves", "driving miss daisy", "rain man", "the last emperor", "platoon", "out of africa", "amadeus", "terms of endearment", "ghandi", "chariots of fire", "ordinary people" ],
randPick : "", //stores the string randomly selected from oscarsArray
joinUnder: "", //stores under array converted to a string using join("")
triedArray: [], //gets pushed with a new letter everytime the user guess a wrong letter
joinTried:[],   //displays as a string triedArray using join("")
livesI: "",     //stores the amount of lives selected by the user with the gameMode selected
wrongGuess: true, //boolean to enter the if, in case the user guessed a wrong letter
wins: 0, //keeps track of wins

//Function to randomly pick a string from oscarsArray
pick_word : function (){
    this.under =[]; //clears under Array

    //stores a random string from oscarsArray into randPick variable
    this.randPick = this.oscarsArray[Math.floor(Math.random() * this.oscarsArray.length)];

    // ***************TO BE REMOVED****************
    console.log(this.randPick); 

    //loop to create under array with underscores and spaces
    for (i=0 ; i < this.randPick.length ; i++) {
        if (this.randPick.charAt(i) !== " "){
        this.under.push("__ ");
        }
        else{
        this.under.push("&nbsp" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;");
        }
    }
    //transforms under array into a string with join("")
    this.joinUnder = this.under.join("");
    //displays joinUnder array
    document.getElementById("underscores").innerHTML = this.joinUnder;
},

//function to display parts of the html
display_btn: function(id) {
    this.btnMenuDisplay = id;
    if (this.btnMenuDisplay == 1) {
        document.getElementById("startGame").style.display= "block";
        document.getElementById("gameMode").style.display = "none";
        document.getElementById("backMenu").style.display = "none";
        document.getElementById("livesDiv").style.display = "none";
        document.getElementById("wins").style.display = "none";
        document.getElementById("underscores").style.display = "none";
        document.getElementById("tried").style.display = "none";
    }
    else if (this.btnMenuDisplay == 2){
        document.getElementById("startGame").style.display= "none";
        document.getElementById("gameMode").style.display = "flex";
        document.getElementById("backMenu").style.display = "none";
        document.getElementById("livesDiv").style.display = "none";
        document.getElementById("wins").style.display = "none";
        document.getElementById("underscores").style.display = "none";
        document.getElementById("tried").style.display = "none";
    }
    else if (this.btnMenuDisplay == 3){
        document.getElementById("startGame").style.display= "none";
        document.getElementById("gameMode").style.display = "none";
        document.getElementById("backMenu").style.display = "flex";
        document.getElementById("livesDiv").style.display = "flex";
        document.getElementById("wins").style.display = "flex";
        document.getElementById("underscores").style.display = "block";
        document.getElementById("tried").style.display = "block";
    }
},
//function to give livesI the value of lives selected by the user, display game and calls game_logic function
game_mode: function (j, id) {
    this.livesI = j;
    this.display_btn(id);
    document.getElementById("underscores").innerHTML = "";
    document.getElementById("lives").innerHTML = this.livesI;
    document.getElementById("winsh3").innerHTML = this.wins;
    this.game_logic(this.livesI);
},

//the key function for the game to work
game_logic: function (j) {
    this.pick_word();
    document.getElementById("tried").innerHTML= "You have tried: ";
    document.onkeyup = function(event) {

        movies.userGuess = event.key.toLowerCase();
        movies.wrongGuess = true;
        console.log (movies.triedArray.indexOf(event.key));

        if (((event.keyCode >= 48 && event.keyCode <=57) ||(event.keyCode >= 65 && event.keyCode <= 90)) && (movies.triedArray.indexOf(event.key)<0) && j > 0) {
            for (i=0 ; i < movies.randPick.length ; i++){
                if (movies.userGuess == movies.randPick.charAt(i)){
                    console.log(movies.userGuess);
                    movies.winner+=1;
                    movies.under[i] = (movies.userGuess + "&nbsp;" + "&nbsp;");
                    movies.joinUnder = movies.under.join("");
                    document.getElementById("underscores").innerHTML = movies.joinUnder;
                    movies.wrongGuess = false;
                }
            }

            if (movies.wrongGuess) {
                j-=1;
                movies.wrongGuess = true;
                movies.triedArray.push(movies.userGuess);
                movies.triedArray.push("&nbsp;" + "&nbsp;");
                movies.joinTried= movies.triedArray.join("");
                document.getElementById("tried").innerHTML = ("You have tried:  " + "&nbsp;" + "&nbsp;" + movies.joinTried);
                document.getElementById("lives").innerHTML = j;
            }

            if (j==0){
                
                alert ("you lost :(");
                movies.display_btn(1);
            }

            if (movies.under.indexOf("__ ") == -1){
                
                alert ("You WON!!!")
                movies.wins +=1;
                movies.game_mode(movies.livesI, 3);
            }

        }
    }
}


};

document.getElementById("livesDiv").style.display = "none";
document.getElementById("tried").style.display = "none";
document.getElementById("gameMode").style.display = "none";
document.getElementById("backMenu").style.display = "none";
document.getElementById("wins").style.display = "none";


