$(document).ready(function () {

  // Initializing Variables
  var score, win, loss, computerPick, rubyPick, emeraldPick, topazPick, sapphirePick, scoreSave;
  score = 0;
  win = 0;
  loss = 0;
  scoreSave = 0;
  restart();

  //writing the random value to html
  $("#computer-pick").text(computerPick);
  //toggle animation on game rules 
  $("#toggle-body").hide();
  $("#toggle-div").on("click",function(){
   $("#toggle-body").slideToggle();
  });

  //-----each time user clicks on the gem - score should show and add up--------------
  $(".btn").on("click", function () {
    var gem = $(this).val();
    if (gem == "ruby") {
      scoreSave += rubyPick;
      $("#score").text(scoreSave);
    }
    if (gem == "emerald") {
      scoreSave += emeraldPick;
      $("#score").text(scoreSave);
    }
    if (gem == "sapphire") {
      scoreSave += sapphirePick;
      $("#score").text(scoreSave);
    }
    if (gem == "topaz") {
      scoreSave += topazPick;
      $("#score").text(scoreSave);
    }
    checkScore();
  });

//------- check score with computer number-------------------
  function checkScore() {
    
    if (scoreSave == computerPick) {
      win++;
      $("#wins").text(win);
      restart();
    }
    else if (scoreSave > computerPick) {
      loss++;
      $("#losses").text(loss);
      restart();
    }
  }

  // --------restart -----------------------------
  function restart() {
    scoreSave = 0;
    computerPick = Math.floor(Math.random() * 102 + 19);
    //crystal random number   
    rubyPick = Math.floor(Math.random() * 12 + 1);
    emeraldPick = Math.floor(Math.random() * 12 + 1);
    topazPick = Math.floor(Math.random() * 12 + 1);
    sapphirePick = Math.floor(Math.random() * 12 + 1);
    $("#computer-pick").text(computerPick);
    $("#score").text(scoreSave);
  }


});

