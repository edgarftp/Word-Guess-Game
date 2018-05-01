
var movies = {
    
under: [],
userGuess: "",
oscarsArray : ["the shape of water", "moonlight","spotlight","birdman", "12 years a slave", "argo", "the artist", "the hurt locker", "slumdog millionaire", "no country for old men", "the departed", "crash", "chicago", "a beautiful mind", "gladiator", "american beauty", "shakespeare in love", "titanic", "the english patient", "braveheart", "forest gump", "unforgiven", "the silence of the lamb", "dances with wolves", "driving miss daisy", "rain man", "the last emperor", "platoon", "out of africa", "amadeus", "terms of endearment", "ghandi", "chariots of fire", "ordinary people" ],
randPick : "",
joinUnder: "",

pick_word : function (){
    this.randPick = this.oscarsArray[Math.floor(Math.random() * this.oscarsArray.length)];
    console.log(this.randPick);
    for (i=0 ; i < this.randPick.length ; i++) {
        if (this.randPick.charAt(i) !== " "){
        this.under.push("_ ");
        }
        else{
        this.under.push("&nbsp" + "&nbsp;" + "&nbsp;");
        }
    }
    this.joinUnder = this.under.join("");
    document.getElementById("underscores").innerHTML = this.joinUnder;
}

};



movies.pick_word();

document.onkeyup = function(event) {
    console.log(event);
    movies.userGuess = event.key;

    for (i=0 ; i < movies.randPick.length ; i++){
        if (movies.userGuess == movies.randPick.charAt(i)){
            console.log(movies.userGuess);
            movies.under[i] = movies.userGuess;
            movies.joinUnder = movies.under.join("");
            document.getElementById("underscores").innerHTML = movies.joinUnder;
        }
    }
}


