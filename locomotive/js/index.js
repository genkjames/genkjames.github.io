function main() {
  // Sidebar section

  var content;
  var sideScroll = document.getElementById("sidescroll");
  var sideView = 0;

  sideBarInit();

  function sideBarInit() {
    sideNav();
    sideOutput(0);
    toggleSideBar();
    hideSideBarUponSelection();
    goToThatSpot("#s_tower", "#stop_timer_clock");
    goToThatSpot("#c_view", "#calculate");
    goToThatSpot("#tv_reaction", "#reaction");
    goToThatSpot("#t_frame", "#tic_tac_toe");
    goToThatSpot("#r_view", "#review");
    goToThatSpot("#m_proj", "#footer");
    goToThatSpot("#u_arr", "#header-image");
  }  
  
  function sideNav () {
    content = '';
    for (var i = 0; i < 8; i++) {
      if(i == 0) {
        content += '<div class="sideline short"></div>';
        content += '<div class="sidebullet"></div>';
      }
      else if (i > 0 && i < 7) {
        content += '<div class="sideline"></div>';
        content += '<div class="sidebullet"></div>';
      }
      else {
        content += '<div class="sideline short"></div>';
      }
    } 
    document.getElementById("snavigate").innerHTML = content;
  }

  function toggleSideBar() {
    if(sideScroll.addEventListener) {
      sideScroll.addEventListener("click", sideScrolls, false);
    }
    else if(sideScroll.attachEvent) {
      sideScroll.attachEvent("onclick", sideScrolls, false);
    } 
  }  

  function sideScrolls() {
    if(sideView == 0) {
      sideView = 1;
      sideOutput(sideView);
    }

    else {
      sideView = 0;
      sideOutput(sideView);
    }
  }

  function sideOutput(num) {
    content = '';
    var arrow_array = ["&raquo;","&laquo;"];
    var letter_array = ["R","O","A","D","&nbsp;","M","A","P"];
    var sidenavigation = document.getElementById("sidenavigation");
    var sidebar = document.getElementById("sidebar");

    for(var i = 0; i < 10; i++) {
      if(num == 0) {
        if(i==0 || i==9) {
          content += '<p class="sc">'+arrow_array[0]+'</p>';
        }
        else {
          content += '<p>'+letter_array[i-1]+'</p>'
        }
        sidenavigation.style.backgroundColor = "transparent";
        sidebar.style.display = "none";
      }
      else {
        if(i==0 || i==9) {
          content += '<p class="sc">'+arrow_array[1]+'</p>';
        }
        else {
          content += '<p>'+letter_array[i-1]+'</p>'
        }
        sidenavigation.style.backgroundColor = "rgba(13,152,186,0.8)";
        sidebar.style.display = "block";
      }

    }
    sideScroll.innerHTML = content;
  }

  function hideSideBarUponSelection() {
    var select  = document.querySelectorAll("#navigate a");
    var sLength = select.length;

    for (var s2 = 0; s2 < sLength; s2++) {
      if(select[s2].addEventListener) {
        select[s2].addEventListener("click", selection, false);
      }
      else if(select[s2].attachEvent) {
        select[s2].attachEvent("onclick", selection, false);
      }   
    }
  }  

  function selection() {
    sideView = 0;
    sideOutput(sideView);
  }

  function goToThatSpot(spot1, spot2) {
    $(spot1).on('click', function(){
      var loc = spot2;
        $('html, body').animate({
            scrollTop: $(loc).offset().top
        }, 1000);
    });
  }

  // End of sidebar section

  // Start of clock, stopwatch, and timer section 
  // Clock section

  var clock_timer = setInterval(clockTimer, 1000);

  function clockTimer() {
      var time = new Date();
      document.getElementById("clock_display").innerHTML = time.toLocaleTimeString();
  }

  // End of clock section

  // Stopwatch section

  var hours = 0, minutes = 0, seconds = 0, myVar, stopwatch_run = 0;
  var stopwatchdisplay = document.getElementById("stopwatch_display");
  var swsb = document.getElementById("s_start_button");
  var swstb = document.getElementById("s_stop_button");
  var swrb = document.getElementById("s_reset_button");

  function startStopwatch(m,s,h) {
    if(s < 10) {
      s = "0" + s;
    }

    if(m < 10) {
      m = "0" + m;
    }

    if(h < 10) {
      h = "0" + h;
    }

    if(h == 0) {
        stopwatchdisplay.innerHTML = m + " : " + s;
    } else {
        stopwatchdisplay.innerHTML = h + " : " +m + " : " + s;
      }
  }

  function stopStopwatch() {
    clearInterval(myVar);
    stopwatch_run = 0;
  }

  function resetStopwatch() {
    stopStopwatch();
    hours = 0;
    minutes = 0;
    seconds = 0;
    stopwatch_run = 0;
    stopwatchdisplay.innerHTML = "0" + minutes + " : 0" + seconds;
  }

  function swStartButton() {
    if(stopwatch_run == 0) {
      stopwatch_run = 1;
      myVar = setInterval(function(){
        seconds++;
        if(seconds >= 60) {
          minutes++;
          seconds = 0;
        }

        if(minutes >= 60) {
          hours++;
          minutes = 0;
        }
        startStopwatch(minutes, seconds, hours);
      }, 1000);
    }
  }

  //stopwatch start button
  if(swsb.addEventListener) {
    swsb.addEventListener("click", function(){swStartButton();},false);
  }
  else if(swsb.attachEvent) {
    swsb.attachEvent("onclick", function(){swStartButton();}, false);
  }
  
  //stopwatch stop button
  if(swstb.addEventListener) {
    swstb.addEventListener("click", function(){stopStopwatch();},false);
  }
  else if(swstb.attachEvent) {
    swstb.attachEvent("onclick", function(){stopStopwatch();},false);
  }
  
  //stopwatch reset button
  if(swrb.addEventListener) {
    swrb.addEventListener("click", function(){resetStopwatch();}, false);
  }
  else if(swrb.attachEvent) {
    swrb.attachEvent("onclick", function(){resetStopwatch();}, false);
  }  

  // End of stopwatch section

  // Timer section

  var hourlist = document.getElementById("hour_list");
  var minutelist = document.getElementById("minute_list");
  var secondlist = document.getElementById("second_list");

  timerList(100, "t_hours", "timer_hours");
  timerList(60, "t_minutes", "timer_minutes");
  timerList(60, "t_seconds", "timer_seconds");

  function timerList(list_length, class_name, element_id) {
    var output = '';

    for(var i = 0; i < list_length; i++) {
      if(i < 10) {
        output += '<p class=\"' + class_name+'\">0'+i+'</p>';
      }
      else {
        output += '<p class=\"'+ class_name+'\">'+i+'</p>';
      }
            
    }
    document.getElementById(element_id).innerHTML = output;
  }

  function showList(list_name, list) {
    var listname = document.getElementById(list_name);

    if(listname.addEventListener) {
      listname.addEventListener("click",function() {toggleDisplay(list);},false);
    }
    else if(listname.attachEvent) {
      listname.attachEvent("onclick",function() {toggleDisplay(list);},false);
    }   
  }

  showList("hour_list", "timer_hours");
  showList("minute_list", "timer_minutes");
  showList("second_list", "timer_seconds"); 

  document.getElementById("timer_hours").style.display = "none";
  document.getElementById("timer_minutes").style.display = "none";
  document.getElementById("timer_seconds").style.display = "none";

  function toggleDisplay(element_ID) {
    var displaying = document.getElementById(element_ID);
    
    if(displaying.style.display == "none") {
      displaying.style.display = "block";
    }
    else {
      displaying.style.display = "none";
    }
  }
  
  function selectContent(class_name, id_name, select_name) {
    var content = document.querySelectorAll(class_name);
    var cLength = content.length;

    for (var i = 0; i < cLength; i++) {
      if(content[i].addEventListener) {
        content[i].addEventListener("click", function() {
            document.getElementById(id_name).innerHTML = (this.innerHTML);
            toggleDisplay(select_name);
          },false);
      }
      else if(content[i].attachEvent) {
        content[i].attachEvent("onclick", function() {
            document.getElementById(id_name).innerHTML = (this.innerHTML);
            toggleDisplay(select_name);
          },false);
      }
      
    };
  }

  selectContent(".t_hours", "hour_list", "timer_hours");
  selectContent(".t_minutes", "minute_list", "timer_minutes");
  selectContent(".t_seconds", "second_list", "timer_seconds");

  var timerhours, timerminutes, timerseconds, timer_run = 0, myVar2;  
  var tsb = document.getElementById("t_start_button");
  var tstb = document.getElementById("t_stop_button");
  var trb = document.getElementById("t_reset_button");

  //timer start button
  if(tsb.addEventListener) {
    tsb.addEventListener("click", function(){startTimerButton();},false);
  }
  else if(tsb.attachEvent) {
    tsb.attachEvent("onclick", function(){startTimerButton();},false);
  }
  
  //timer stop button
  if(tstb.addEventListener) {
    tstb.addEventListener("click", function(){stopTimer();},false);
  }
  else if(tstb.attachEvent) {
    tstb.attachEvent("onclick", function(){stopTimer();},false);
  }
  
  //timer reset button
  if(trb.addEventListener) {
    trb.addEventListener("click", function(){resetTimer();},false);
  }
  else if(trb.attachEvent) {
    trb.attachEvent("onclick", function(){resetTimer();},false);
  }

  function startTimerButton() {
    timerhours = parseInt(hourlist.innerHTML);
    timerminutes = parseInt(minutelist.innerHTML);
    timerseconds = parseInt(secondlist.innerHTML);
    var audio = document.getElementById("myAudio");


    if(timerhours != 0 || timerminutes != 0 || timerseconds != 0) {
      audio.muted = true;
      audio.play();
      if(timer_run == 0) {
        timer_run = 1;
        myVar2 = setInterval(function(){

          if(timerhours == 0 && timerminutes == 0 && timerseconds == 0 ) {
            audio.pause();
            audio.muted = false;
            audio.currentTime = 0;
            audio.play();
            stopTimer();
          }

          else {        

            if(timerseconds == 0) {
              timerseconds = 60;
              timerminutes--;
            }

            if(timerminutes == -1) {
              timerminutes = 59;
              timerhours--;
            }

            timerseconds--;

            startTimer(timerhours, timerminutes, timerseconds); 
          }   
        }, 1000);
      }
    }
  }

  function startTimer(h,m,s) {
    if(h < 10) {
      h = "0" + h;
    }

    if(m < 10) {
      m = "0" + m;
    }

    if(s < 10) {
      s = "0" + s;
    }

    hourlist.innerHTML = h;
    minutelist.innerHTML = m;
    secondlist.innerHTML = s;
  }

  function stopTimer() {
    clearInterval(myVar2);
    timer_run = 0;
  }

  function resetTimer() {
    stopTimer();
    hourlist.innerHTML = "00";
    minutelist.innerHTML = "00";
    secondlist.innerHTML = "00";
    timer_run = 0;
  }

  // End of timer section
  // End of stopwatch section

  // Start of calculator section

  buttons();

  function buttons() {
    makeButtons([0,1,4,7],1,4,'num');
    makeButtons([".",2,5,8],2,4,'num');
    makeButtons([3,6,9],3,3,'num');
    makeButtons(["/","*","-","+"],4,4,'oper');
  }

  function makeButtons(array, colNum, rowNum, ftn) {
    var output = '';
    for (var i = 0; i < array.length; i++) {
        output += '<button class=\"buttons row'+rowNum+' column'+colNum+' '+ftn+'Btn\">'+array[i]+'</button>';
        rowNum--;     
    }
    document.getElementById("calculate_container").innerHTML += output;
  }

  var input = $("#inputSection");
  var answer = $("#answerSection");
  var parentheses = 0;
  var period = 0;
  var inputhtml;
  var inputLength;
  var lastChar;
  
  $(".numBtn").on('click', function() {
    if(($(this).html() !== "0") && (!isNaN($(this).html()))) {
      input.append($(this).html());
      answer.html("");
    }

    if($(this).html() === "0") {
      if(input.html() != "") {
        input.append($(this).html());
      }
    }

    inputhtml = input.html();
    inputLength = inputhtml.length-1;
    lastChar = inputhtml.charAt(inputLength);

    if($(this).html() === "(") {
      if(parentheses === 0) {
        if((lastChar === "+") || (lastChar === "-") || (lastChar === "*") || (lastChar === "/") || (inputhtml==="")) {
          input.append($(this).html());
          parentheses = 1;          
        }       
      }
    }

    if($(this).html() == ")") {
      if(parentheses === 1) {
        if(!isNaN(lastChar)) {        
          input.append($(this).html());
          parentheses = 0;          
        }
      }     
    }

    if(($(this).html() == ".") && (lastChar !== ")")) {
      if(period === 0) {
        input.append($(this).html());
        period = 1;
      }     
    }
        
  });

  $("#buttonNegative").on('click', function() {
    inputhtml = input.html();
    inputLength = inputhtml.length-1;
    lastChar = inputhtml.charAt(inputLength);

    if(input.html() === "") {
      input.html("-");
      answer.html("");
    }
    else if(lastChar !== ".") {
      input.append("-");
    }
  });

  $(".operBtn").on('click', function() {
    inputhtml = input.html();
    inputLength = inputhtml.length-1;
    lastChar = inputhtml.charAt(inputLength);

    if((!isNaN(lastChar) && input.html() !== "") || (lastChar === ")")) {
      input.append($(this).html());
      answer.html("");
      period = 0;
    }

    if(answer.html() !== "") {
      input.append(answer.html()).append($(this).html());
      answer.html("");
    }
  });

  $("#buttonClear").on('click', function() {
    input.html("");
    period = 0;
    parentheses = 0;
  });

  $("#buttonEqual").on('click', function() {
    inputhtml = input.html();
    inputLength = inputhtml.length-1;
    lastChar = inputhtml.charAt(inputLength);
        
    if((!isNaN(lastChar) && inputhtml != "") || (lastChar === ")" && inputhtml != "")){
      answer.html(eval(inputhtml));
      input.html("");
      period = 0;
    }
  });

  // End of calculator section

  // Start of tv reaction section

  var clickedTime, createdTime, reactionTime, myVar;
  var box = document.getElementById("box");
  var power = false;
  var pbutton = document.getElementById("power_button");
  var tvscreen = document.getElementById("tv_screen");
  var time = document.getElementById("time");

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i =0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }
    
  function makeBox() {      
    var time = Math.random();
    time = time*3000;
      
    myVar = setTimeout(function() {
      var h = document.getElementById("tv_screen").offsetHeight;
      var w = document.getElementById("tv_screen").offsetWidth;
      var top;
      var left;

      if (w < 500) {
        top = Math.random()*(h - 80);
        left = Math.random()*(w - 100);
      }
      else {
        top = Math.random()*(h - 110);
        left = Math.random()*(w - 130);
      }


      box.style.top=top+"px";
      box.style.left=left+"px";
      box.style.backgroundColor=getRandomColor();
        
      if(Math.random()>0.5) {
        box.style.borderRadius="50px";
      } else {
        box.style.borderRadius="0px";
      }
        
      box.style.display="block";
      createdTime = Date.now();
    }, time);
  }

  if(pbutton.addEventListener) {
    pbutton.addEventListener("click", function() {powerButton();},false);
  }
  else if(pbutton.attachEvent) {
    pbutton.attachEvent("onclick", function() {powerButton();},false);
  }   

  function powerButton() {
    if(!power) {
      tvscreen.style.backgroundColor = "white";
      makeBox();
      power = true;
    }
    else {
      tvscreen.style.backgroundColor = "black";
      clearInterval(myVar);
      time.innerHTML = 0;
      box.style.display = "none";
      power = false;
    }
  }
  
  if(box.addEventListener) {
    box.addEventListener("click", function() {clickBox();},false);
  } 
  else if(box.attachEvent) {
    box.attachEvent("onclick", function() {clickBox();},false);
  }  

  function clickBox() {
    clickedTime = Date.now();
      
    reactionTime = (clickedTime - createdTime) /1000;
    time.innerHTML = reactionTime + " seconds";
      
    box.style.display = "none";
      
    makeBox();
  }

  // End of tv reaction section

  // Start of tic tac toe section

  var symbol = "X";
  var count = 0;
  var userSymbol = "X";
  var computerSymbol = "O";
  var session = 0;
  var results = document.querySelector("#result p");
  var playAgain = document.querySelector("#playAgain");
  var xsymbol = document.querySelector("#x");
  var osymbol = document.querySelector("#o");

  makeBoard();
  
  function makeBoard() {
    var content = '';
    var count = 0;

    content += '<table id="ttt_table">';

    for (var i = 0; i < 3; i++) {     

      if(i == 0 || i == 1) {
        content += '<tr class=\"borderBottom\">';

        for (var j = 0; j < 3; j++) {
          if(count == 2 || count == 5) {
            content += '<td id=\"ttt'+count+'\" class=\"board\"></td>';
          }
          else {
            content += '<td id=\"ttt'+count+'\" class=\"borderRight board\"></td>';
          }
          count++;
        }
      }

      else {
        content += '<tr>';

        for (var k = 0; k < 3; k++) {
          if(count == 8) {
            content += '<td id=\"ttt'+count+'\" class=\"board\"></td>';
          }
          else {
            content += '<td id=\"ttt'+count+'\" class=\"borderRight board\"></td>';
          }
          count++;
        }
        
      }

      content += '</tr>';
    }

    content += '</table>';
    document.getElementById("ttt_board").innerHTML = content;
  } 

  if(osymbol.addEventListener) {
    osymbol.addEventListener("click", function(){changetoO();},false);
  }
  else if(osymbol.attachEvent) {
    osymbol.attachEvent("onclick", function() {changetoO();},false);
  }
  
  if(xsymbol.addEventListener) {
    xsymbol.addEventListener("click", function() {changetoX();},false);
  }
  else if(xsymbol.attachEvent) {
    xsymbol.attachEvent("onclick", function() {changetoX();},false);
  }    

  function changetoO() {
    if (session == 0) {
      setSymbol("O", "X");
      osymbol.style.backgroundColor = "rgb(216,216,216)";
      xsymbol.style.backgroundColor = "white";
    }
  }

  function changetoX() {
    if (session == 0) {
      setSymbol("X", "O");
      xsymbol.style.backgroundColor = "rgb(216,216,216)";
      osymbol.style.backgroundColor = "white";
    }
  }

  function setSymbol(symbol1, symbol2) {
    symbol = symbol1;
    userSymbol = symbol;
    computerSymbol = symbol2;
  }

  function gamePlay(num) {
    if(symbol == "X" || symbol == "O") {
      session = 1;
      if (num.innerHTML === "") {
        num.innerHTML = symbol;
        symbol = getSymbol(symbol);

        if (!won()) {
          setTimeout(computer, 800);
        }
      }     
    }     
  }

  function getSymbol(symbol) {
    if(symbol == "X") {
      symbol = "O";
    } else {
      symbol = "X";
    }

    return symbol;
  }


  function computer() {
    var randomNum;

    if (count == 0) {
      randomNum = randomSpot();

      document.getElementById("ttt"+randomNum).innerHTML = symbol;
      symbol = getSymbol(symbol);
      count++;
      won();        
    }

    else if (count > 0 && count < 4) {
      var zero = document.getElementById("ttt0");
      var one = document.getElementById("ttt1");
      var two = document.getElementById("ttt2");
      var three = document.getElementById("ttt3");
      var four = document.getElementById("ttt4");
      var five = document.getElementById("ttt5");
      var six = document.getElementById("ttt6");
      var seven = document.getElementById("ttt7");
      var eight = document.getElementById("ttt8");

      var computer_array = [[zero, one, two], [zero, two, one], [one, two, zero], [three, four, five], [three, five, four], [four, five, three], [six, seven, eight], [six, eight, seven], [seven, eight, six], [zero, four, eight], [zero, eight, four], [four, eight, zero], [two, four, six], [two, six, four], [six, four, two], [zero, three, six], [zero, six, three], [three, six, zero], [one, four, seven], [one, seven, four], [four, seven, one], [two, five, eight], [two, eight, five], [five, eight, two]];
      var c1_length = computer_array.length;

      for(var c1 = 0; c1 < c1_length; c1++) {
        if(computer_array[c1][0].innerHTML != "" && computer_array[c1][1].innerHTML != "" && computer_array[c1][2].innerHTML == "") {
          if(computer_array[c1][0].innerHTML == computer_array[c1][1].innerHTML) {
            computer_array[c1][2].innerHTML = symbol;
            symbol = getSymbol(symbol);
            count++;            
            won();
            c1 = c1_length +1;
          }
        }
        if(c1 == c1_length-1) {
          randomNum = randomSpot();
          document.getElementById("ttt"+randomNum).innerHTML = symbol;
          symbol = getSymbol(symbol);
          count++;
          won();
        }        
      }           
    }
  }

  function randomSpot() {
    var go = 0;

    while(go == 0) {
      var randomNum = Math.floor(Math.random() *  9);
      if(document.getElementById("ttt"+randomNum).innerHTML === "") {
        go = 1;
        return randomNum;
      }
    }
  } 

  function won() {
    var zero = document.getElementById("ttt0").innerHTML;
    var one = document.getElementById("ttt1").innerHTML;
    var two = document.getElementById("ttt2").innerHTML;
    var three = document.getElementById("ttt3").innerHTML;
    var four = document.getElementById("ttt4").innerHTML;
    var five = document.getElementById("ttt5").innerHTML;
    var six = document.getElementById("ttt6").innerHTML;
    var seven = document.getElementById("ttt7").innerHTML;
    var eight = document.getElementById("ttt8").innerHTML;
    var horizontal = document.getElementById("horizontal_line");
    var vertical = document.getElementById("vertical_line");

    var compare_array = [compare(zero, one, two), compare(three, four, five), compare(six, seven, eight), compare(zero, three, six), compare(one, four, seven), compare(two, five, eight), compare(zero, four, eight), compare(six, four, two)];
    var lines_array = ["h_line0", "h_line1", "h_line2", "v_line0", "v_line1", "v_line2", "f_diagonal", "b_diagonal"];

    for(var t = 0; t < compare_array.length+1; t++) {
      if(compare_array[t]) {
        displayLines(lines_array[t]);
        return true;
      }

      else if(t == compare_array.length) {
        return false;
      }
    }     
  }

  function compare(slot1, slot2, slot3) {

    if (((slot1 == userSymbol) && (slot2 == userSymbol) && (slot3 == userSymbol)) || ((slot1 == computerSymbol) && (slot2 == computerSymbol) && (slot3 == computerSymbol))){
      if(slot1 == userSymbol) {       
        results.innerHTML = "You Win";
        playAgain.style.display = "block";        
      }
      else if (slot1 == computerSymbol) {       
        results.innerHTML = "You Lose";
        playAgain.style.display = "block";
      }

      return true;
    }
  }

  function displayLines(line_name) {
    document.getElementById(line_name).style.display = "block";
  }

  var board = document.querySelectorAll(".board");

  for (var i = 0; i < board.length; i++) {
    if(board[i].addEventListener) {
      board[i].addEventListener("click", function() {
        if(!won()) {
            gamePlay(this);
        }

        if ((count > 3) && (!won())) {
          results.innerHTML = "It's A Draw";
          playAgain.style.display = "block";
        }
      },false);
    }
    else if(board[i].attachEvent) {
      board[i].attachEvent("onclick", function() {
        if(!won()) {
            gamePlay(this);
        }

        if ((count > 3) && (!won())) {
          results.innerHTML = "It's A Draw";
          playAgain.style.display = "block";
        }
      },false);
    }
    
  }

  if(playAgain.addEventListener) {
    playAgain.addEventListener("click", function() {playAgainButton();},false);
  }
  else if(playAgain.attachEvent) {
    playAgain.attachEvent("onclick", function() {playAgainButton();},false);
  }
  

  function playAgainButton() {
    var emptyBoard = document.querySelectorAll(".board");
    var ebLength = emptyBoard.length;
    var lines = document.querySelectorAll(".ttt_lines");
    var lineLength = lines.length;

    for (var a = 0; a < ebLength; a++) {
      emptyBoard[a].innerHTML = "";
    }
    count = 0;
    session = 0;

    results.innerHTML = "Good Luck!!!";
    playAgain.style.display = "none";

    if(xsymbol.style.backgroundColor == "white") {
      symbol = "O";
      userSymbol = "O";
      computerSymbol = "X";
    }
    else {
      symbol = "X";
      userSymbol = "X";
      computerSymbol = "O";
    }   

    for (var l = 0; l < lineLength; l++) {
      lines[l].style.display = "none";
    }
  }

  // End of tic tac toe section

  // Start of review section

  var comments = 3;
  var send_review = document.getElementById("send_review");
  var review_content = document.getElementById("review_content");
  var review_answer = document.getElementById("review_answer");

  reviewInit();

  function reviewInit() {
    bottomClip();
    makeInitialComments();
    makeReference("Stopwatch Tower",["Stopwatch Gang"], ["https://prezi.com/wiubi1cmklmc/the-stopwatch-gang/"]);
    makeReference("Calculator View",["Ten Calculator facts","Math facts","376006"],["http://tenrandomfacts.com/calculator/","http://www.thecalculatorsite.com/articles/units/fascinating-maths-facts.php","http://numbermatics.com/n/376006/"]);
    makeReference("TV Reaction",["Reaction Time"], ["http://healthylifestyledocs.com/fast-reaction-time-matters/"]);
    makeReference("3 Time Frame",["Tic Tac Toe"],["https://wonderopolis.org/wonder/how-old-is-tic-tac-toe"]);
  }
  
  function bottomClip() {
    var clip = '';

    for(var i = 0; i < 3; i++) {
      clip += '<div id=\"reviewbox'+i+'\" class=\"reviewbox\"></div>';      
    }

    document.getElementById("review_bottom_clip").innerHTML = clip;
  }  

  function makeInitialComments() {
    var d_array = ["Informative", "Interesting", "Creative"];   
    var comment = '';
    var l = d_array.length;

    for(var i = 0; i < l; i++) {
      comment += '<div id=\"comment'+i+'\" class=\"review_comment\"><div class=\"float_left checkmark_box\"><div class=\"checkmark\"></div></div><div class=\"float_left comment_box\"><p>'+d_array[i]+'</p></div><div id=\"dc'+i+'\" class=\"delete\"><p>x</p></div><div class=\"clear\"></div></div>';
    }

    review_content.innerHTML = comment;
  }  
  
  if(send_review.addEventListener) {
    send_review.addEventListener("click", sReview, false);
  }
  else if(send_review.attachEvent) {
    send_review.attachEvent("onclick", sReview, false);
  }  

  function sReview() {
    if(review_answer.value != "") {
      submitComment(review_answer.value, comments);
      review_answer.value = "";
    }
  }

  function submitComment(text, num) {
    var comment = '<div id=\"comment'+num+'\" class=\"review_comment\"><div class=\"float_left checkmark_box\"><div class=\"checkmark\"></div></div><div class=\"float_left comment_box\"><p>'+text+'</p></div><div id=\"dc'+num+'\" class=\"delete\"><p>x</p></div><div class=\"clear\"></div></div>';

    review_content.innerHTML += comment;

    deletes= document.querySelectorAll('.delete');
    dLength = deletes.length;

    for (var i = 0; i < dLength; i++) {
      if(deletes[i].addEventListener) {
        deletes[i].addEventListener("click",deleteComment,false);
      }
        else if(deletes[i].attachEvent) {
          deletes[i].attachEvent("onclick", deleteComment, false);
        }
    }
    comments++;
  }

  function deleteComment() {
    review_content.removeChild(document.getElementById(this.parentNode.id));
  } 

  var deletes = document.querySelectorAll('.delete');
  var dLength = deletes.length;

  for (var i = 0; i < dLength; i++) {
    if(deletes[i].addEventListener) {
      deletes[i].addEventListener("click",deleteComment,false);
    }
      else if(deletes[i].attachEvent) {
        deletes[i].attachEvent("onclick", deleteComment, false);
      }
  }

  function makeReference(headg, name, link) {
    var content = '<div class="reference"><h1>'+headg+'</h1>';
    var l = link.length;

    for(var i =0; i < l; i++) {
      content += '<p><a target=\"_blank\" href=\"'+link[i]+'\">'+name[i]+'</a></p>';
    }

    content+= '</div>';

    document.getElementById("review_fact").innerHTML += content;
  } 

  // End of review section
}




if (document.readyState!="loading") main();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
else document.attachEvent("onreadystatechange", function(){ 
  if (document.readyState=="complete") main();
});