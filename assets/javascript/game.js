
var movies = {


under: [],
userGuess: "",
oscarsArray : ["the shape of water", "moonlight","spotlight","birdman", "12 years a slave", "argo", "the artist", "the hurt locker", "slumdog millionaire", "no country for old men", "the departed", "crash", "chicago", "a beautiful mind", "gladiator", "american beauty", "shakespeare in love", "titanic", "the english patient", "braveheart", "forest gump", "unforgiven", "the silence of the lamb", "dances with wolves", "driving miss daisy", "rain man", "the last emperor", "platoon", "out of africa", "amadeus", "terms of endearment", "ghandi", "chariots of fire", "ordinary people" ],
randPick : "",
joinUnder: "",
triedArray: [],
joinTried:[],

pick_word : function (){
    this.randPick = this.oscarsArray[Math.floor(Math.random() * this.oscarsArray.length)];
    console.log(this.randPick);
    for (i=0 ; i < this.randPick.length ; i++) {
        if (this.randPick.charAt(i) !== " "){
        this.under.push("__ ");
        }
        else{
        this.under.push("&nbsp" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;");
        }
    }
    this.joinUnder = this.under.join("");
    document.getElementById("underscores").innerHTML = this.joinUnder;
}

};

document.getElementById("livesDiv").style.display = "none";
document.getElementById("tried").style.display = "none";
document.getElementById("gameMode").style.display = "none";

start_Game= function(){
    document.getElementById("startGame").style.display = "none";
    document.getElementById("gameMode").style.display = "flex";
} 

game_mode = function (j){
    document.getElementById("gameMode").style.display = "none";
    document.getElementById("livesDiv").style.display = "block";
    document.getElementById("tried").style.display = "block";
    document.getElementById("lives").innerHTML = j;
    movies.pick_word();
    document.onkeyup = function(event) {

        console.log(event);
        movies.userGuess = event.key.toLowerCase();
        var wrongGuess = true;
        document.getElementById("lives").innerHTML = j;
        
            if (((event.keyCode >= 48 && event.keyCode <=57) ||(event.keyCode >= 65 && event.keyCode <= 90)) && (movies.triedArray.indexOf(event.key)<0) && j > 0) {
                for (i=0 ; i < movies.randPick.length ; i++){
                    if (movies.userGuess == movies.randPick.charAt(i)){
                        console.log(movies.userGuess);
                        movies.under[i] = (movies.userGuess + "&nbsp;" + "&nbsp;");
                        movies.joinUnder = movies.under.join("");
                        document.getElementById("underscores").innerHTML = movies.joinUnder;
                        wrongGuess = false;
                    }
                }

                if (wrongGuess) {
                    j-=1;
                    wrongGuess = true;
                    movies.triedArray.push(movies.userGuess);
                    movies.triedArray.push("&nbsp;");
                    movies.joinTried= movies.triedArray.join("");
                    document.getElementById("tried").innerHTML = ("You have already tried: " + movies.joinTried);
                    document.getElementById("lives").innerHTML = j;
                }
            }
    }
}

