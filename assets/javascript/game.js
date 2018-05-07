
var movies = { // object for the whole game, possible useful to copypaste for other categories

rand: -1, //stores a random number
btnMenuDisplay: 1, //Start this variable at 1 for display_btn function
under: [], //Array create to display the underscores according to the randPick from oscarsArray
userGuess: "", //variable to save the key typed by the user
//array of options to pick from random
oscarsArray : ["the_shape_of_water", "moonlight","spotlight","birdman", "12_years_a_slave", "argo", "the_artist", "the_hurt_locker", "slumdog_millionaire", "no_country_for_old_men", "the_departed", "crash", "chicago", "a_beautiful_mind", "gladiator", "american_beauty", "shakespeare_in_love", "titanic", "the_english_patient", "braveheart", "forrest_gump", "unforgiven", "the_silence_of_the_lamb", "dances_with_wolves", "driving_miss_daisy", "rain_man", "the_last_emperor", "platoon", "out_of_africa", "amadeus", "terms_of_endearment", "gandhi", "chariots_of_fire", "ordinary_people" ],
oscarsArraySRC : ["the_shape_of_water.gif", "moonlight.gif","spotlight.gif","birdman.gif", "12_years_a_slave.gif", "argo.gif", "the_artist.gif", "the_hurt_locker.gif", "slumdog_millionaire.gif", "no_country_for_old_men.gif", "the_departed.gif", "crash.gif", "chicago.gif", "a_beautiful_mind.gif", "gladiator.gif", "american_beauty.gif", "shakespeare_in_love.gif", "titanic.gif", "the_english_patient.gif", "braveheart.gif", "forrest_gump.gif", "unforgiven.gif", "the_silence_of_the_lamb.gif", "dances_with_wolves.gif", "driving_miss_daisy.gif", "rain_man.gif", "the_last_emperor.gif", "platoon.gif", "out_of_africa.gif", "amadeus.gif", "terms_of_endearment.gif", "gandhi.gif", "chariots_of_fire.gif", "ordinary_people.gif" ],
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

    //generates a random number
    this.rand = Math.floor(Math.random() * this.oscarsArray.length);

    //stores a random string from oscarsArray into randPick variable
    this.randPick = this.oscarsArray[this.rand];

    // ***************TO BE REMOVED****************
    console.log(this.randPick); 

    //loop to create under array with underscores and spaces
    for (i=0 ; i < this.randPick.length ; i++) {
        if (this.randPick.charAt(i) !== "_"){
        this.under.push("__ ");
        }
        else{
        this.under.push("&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;");
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
        document.getElementById("mobile").style.display= "block";
        document.getElementById("gameMode").style.display = "none";
        document.getElementById("backMenu").style.display = "none";
        document.getElementById("livesDiv").style.display = "none";
        document.getElementById("winsDiv").style.display = "none";
        document.getElementById("underscores").style.display = "none";
        document.getElementById("tried").style.display = "none";
    }
    else if (this.btnMenuDisplay == 2){
        this.wins = 0;
        document.getElementById("startGame").style.display= "none";
        document.getElementById("mobile").style.display= "none";
        document.getElementById("gameMode").style.display = "flex";
        document.getElementById("backMenu").style.display = "none";
        document.getElementById("livesDiv").style.display = "none";
        document.getElementById("winsDiv").style.display = "none";
        document.getElementById("underscores").style.display = "none";
        document.getElementById("tried").style.display = "none";
    }
    else if (this.btnMenuDisplay == 3){
        console.log(this.wins);
        document.getElementById("startGame").style.display= "none";
        document.getElementById("mobile").style.display= "none";
        document.getElementById("gameMode").style.display = "none";
        document.getElementById("backMenu").style.display = "flex";
        document.getElementById("livesDiv").style.display = "flex";
        document.getElementById("winsDiv").style.display = "flex";
        document.getElementById("underscores").style.display = "block";
        document.getElementById("tried").style.display = "block";
    }
},

//displays the gif according to the movie selected
display_gif: function (gifPick) {

    var sourceString = ("assets/images/" + this.oscarsArraySRC[gifPick]);
    document.getElementById("underscores").style.display = "none";
    console.log(sourceString);
    document.getElementById("gifHolder").src = sourceString;
    document.getElementById("gifHolder").style.display = "flex";
    
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
    this.triedArray.length = 0;
    this.joinTried="";
    document.getElementById("gifHolder").style.display = "none";
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
                    movies.wins+=1;
                    var audioWin = document.getElementById("audioWinner");
                    audioWin.play();
                    movies.display_gif(movies.rand);
                    setTimeout(function(){movies.game_mode(movies.livesI,3)}, 4000);
                    
                }
            }
        }
    }



};

document.getElementById("livesDiv").style.display = "none";
document.getElementById("tried").style.display = "none";
document.getElementById("gameMode").style.display = "none";
document.getElementById("backMenu").style.display = "none";
document.getElementById("winsDiv").style.display = "none";
document.getElementById("audioWinner").style.display = "none";
document.getElementById("gifHolder").style.display = "none";

