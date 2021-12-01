var quote = "push yourself, because no one else is going to do it for you.failure is the condiment that gives success its flavor.wake up with determination. go to bed with satisfaction.it's going to be hard, but hard does not mean impossible.learning never exhausts the mind.";
  var timeLeft = 90;
  var timeGone;
  var timer;
  stringindex = 0;
  var score;


    function updateTimer () {
        if(timeLeft > 0) {
            timeGone++;
            document.getElementById('timer').innerHTML = timeLeft--;
        } else {
            finishGame(timeGone);
        }
    }
    function startGame () {
        document.getElementById('score').innerHTML = "Score is";
        timer = setInterval(updateTimer, 1000);
    }
    function finishGame() {
        clearInterval(timer);
        timeLeft = 90;
        document.getElementById('score').innerHTML += " " + stringindex;
        document.getElementById('timer').innerHTML = "";
        stringindex = 0;
    }
    function keyup(char) {
        document.getElementById('error').innerHTML = "";
        var key = char.key;
        if(key == "Backspace" && stringindex > 0) {
            stringindex--;
            return;
        }
        if(key == "Backspace") {
            return;
        }
        if (key == quote[stringindex]) {
            stringindex++;
        } else {  
            document.getElementById('error').innerHTML = "invalid char";
        }
        
    }