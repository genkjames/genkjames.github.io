function main() {

       var userSymbol;
       var computerSymbol;
       var symbols = ["rock", "paper", "scissors"];

       document.querySelector("#rock").onclick = function(){
            gamePlay("rock");
       };

       document.querySelector("#paper").onclick = function(){
            gamePlay("paper");
       };

       document.querySelector("#scissors").onclick = function(){
            gamePlay("scissors");
       };

       function gamePlay(userSymbol) {
            document.querySelector("#symbols").style.display = "none";
            document.querySelector(".result").style.visibility = "hidden";
            document.querySelector("#answer").style.display = "block";
            document.querySelector("#won").style.display = "block";
            battle(userSymbol, computer());
       }

       function battle(symbol1, symbol2) {
            var result = document.querySelector(".result");
            results(symbol1, symbol2);

            if (symbol1 === symbol2) {
                result.innerHTML = "It's a tie :/";                
            }

            else if (symbol1 === "rock") {
                if (symbol2 === "scissors") {
                    result.innerHTML = "Rock beats Scissors! Congrats :)";
                }
                else {                    
                    result.innerHTML = "Paper beats Rock! Sorry :(";
                }
            }

            else if (symbol1 === "paper") {
                if (symbol2 === "rock") {
                    result.innerHTML = "Paper beats Rock! Congrats! :)";
                }
                else {
                    result.innerHTML = "Scissors beats Paper! Sorry :(";
                }
            }

            else {
                if (symbol2 === "paper") {
                    result.innerHTML = "Scissors beats Paper! Congrats :)";
                }

                else {
                    result.innerHTML = "Rock beats Scissors! Sorry :(";
                }
            }
       }

       function computer() {
            var randomNumber = Math.floor(Math.random()* 3);
            return symbols[randomNumber];
       }
    }

    function results(symbol1, symbol2) {
        var img1 = document.querySelector("#image1");
        var img2 = document.querySelector("#image2");

        img1.setAttribute("src", "images/"+ symbol1+".svg")
        img2.setAttribute("src", "images/"+ symbol2+".svg")

        var pos = 0;
        var id = setInterval(move, 4);
        var theWidth = ((document.querySelector("#answer").offsetWidth)/2);
        var id2;

        function move() {
            if (pos > theWidth) {
                clearInterval(id);
                setTimeout(reset, 150);
            }

            else {
                pos++;
                img1.style.left = pos + "px";
                img2.style.right = pos + "px";
            }
        }

        function reset() {
            img1.style.left = "0px";
            img2.style.right = "0px";
            document.querySelector(".result").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#symbols").style.display = "block";}, 500);           
        }

    }

    if (document.readyState!="loading") main();
    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
    else document.attachEvent("onreadystatechange", function(){
        if (document.readyState=="complete") main();
    });