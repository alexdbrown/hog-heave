$(document).ready(function() {

  $("body").hide().fadeIn("slow");

  var player1, player2, game, currentTurn;

  var player1Chosen = false;
  var player2Chosen = false;

  var startGame = function() {
    // Game shouldn't start until both players have chosen a character
    if (player1Chosen && player2Chosen) {
      game = new Game(player1, player2);

      setTimeout(function() { $(".game").hide().fadeIn("slow"); }, 1000);

      currentTurn = game.getNextTurn();
      showCurrentPlayer();
      updateScores();
    }
  }


  // Choose player 1
  $("#picker1-well img").click(function(event) {
    // Clear the other pig options and add this image to the well w/ animation
    $("#picker1-well").empty();
    $("#picker1-well").append($(this));
    $(this).addClass("animated rotateIn").hide().fadeIn();

    // Center the new image and make it fill the whole well
    $(this).removeClass("col-sm-4 btn");
    $(this).addClass("center-block");

    // Get the id from this image and set the player to this id
    player1 = new Player($(this).attr('id'));
    $("#player1-name").text(player1.playerName);

    // Check if we should start the game
    player1Chosen = true;
    startGame();
  });

  //Choose player 2
  $("#picker2-well img").click(function(event) {
    // Clear the other pig options and add this image to the well w/ animation
    $("#picker2-well").empty();
    $("#picker2-well").append($(this));
    $(this).addClass("animated rotateIn").hide().fadeIn();

    // Center the new image and make it fill the whole well
    $(this).removeClass("col-sm-4 btn");
    $(this).addClass("center-block");

    // Get the id from this image and set the player to this id
    player2 = new Player($(this).attr('id'));
    $("#player2-name").text(player2.playerName);

    // Check if we should start the game
    player2Chosen = true;
    startGame();
  });

  var showCurrentPlayer = function() {
    if (game.currentPlayer === player1) {
      $("#player2").removeClass("animated bounce highlighted");
      $("#player2").addClass("not-playing").hide().fadeIn();

      $("#player1").removeClass("not-playing");
      $("#player1").addClass("animated bounce highlighted");
    } else {
      $("#player1").removeClass("animated bounce highlighted");
      $("#player1").addClass("not-playing").hide().fadeIn();

      $("#player2").removeClass("not-playing");
      $("#player2").addClass("animated bounce highlighted");
    }
  };

  var updateScores = function() {
    // Don't display colon until we update scores
    $("#player1-score").text(": " + player1.totalScore);
    $("#player2-score").text(": " + player2.totalScore);
  }

  var checkStatus = function() {
    if (game.checkStatus() === player1) {

      $("#game-in-progress").hide();


      $("#winner-name").text(player1.playerName);
      $("#bacon").hide().fadeIn("slow");


      // Hide buttons if someone has won
      $("#roll-btn").hide();
      $("#pass-btn").hide();

    } else if (game.checkStatus() === player2) {
      $("#game-in-progress").hide();

      $("#winner-name").text(player2.playerName);
      $("#bacon").hide().fadeIn("slow");


      // Hide buttons if someone has won
      $("#roll-btn").hide();
      $("#pass-btn").hide();
    }
    // If the game is still going, then don't change anything.
  };


  var endTurn = function() {
    $("#roll").empty();
    $("#current-score").empty();

    updateScores();
    checkStatus();
    game.switchPlayer();
    showCurrentPlayer();
    currentTurn = game.getNextTurn();

    // Make sure buttons are showing for the next turn
    $("#pass-btn").show();
    $("#roll-btn").show();
  };

  var animateDice = function(diceNumber) {
    $("#dice").empty();

    if (diceNumber === 1) {
      $("#dice").append("<img class='center-block img-responsive pig-img animated tada' src='img/dirty-pig.jpg'>");
    } else {
      $("#dice").append("<img class='center-block img-responsive dice-img animated flip' src='img/dice/" + diceNumber + ".svg'>");
    }
  }

  // Roll button onClick handler
  $("#roll-btn").click(function(event) {

    var diceNumber = currentTurn.roll();
    animateDice(diceNumber);


    $("#current-score").text("turn score: " + currentTurn.currentScore);

    // If player rolled a 1, end the turn after 1 second and hide buttons.
    if (diceNumber === 1) {
      $("#current-score").text("you dirty pig! you rolled in the mud...");
      $("#pass-btn").hide();
      $("#roll-btn").hide();
      setTimeout(function() { endTurn() }, 2000);
    }

  });

  // Pass button onClick handler
  $("#pass-btn").click(function(event) {
    currentTurn.pass();
    $("#dice").empty();
    endTurn();

  });

  // Re-start button onClick handler
  $("#restart-btn").click(function(event) {
    location.reload();
  });

});
