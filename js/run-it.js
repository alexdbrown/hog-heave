$(document).ready(function() {
  var player1, player2, game, currentTurn;

  var player1Chosen = false;
  var player2Chosen = false;

  var startGame = function() {
    // Game shouldn't start until both players have chosen a character
    if (player1Chosen && player2Chosen) {
      game = new Game(player1, player2);
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
      $("#player1").addClass("animated bounce highlighted");
    } else {
      $("#player1").removeClass("animated bounce highlighted");
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
      $("#result").text(player1.playerName + " wins!");

      // Hide buttons if someone has won
      $("#roll-btn").hide();
      $("#pass-btn").hide();

    } else if (game.checkStatus() === player2) {
      $("#result").text(player2.playerName + " wins!");

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
  };

  var animateDice = function(diceNumber) {
    $("#dice").empty();

    var randomSides = [];
    for (var i = 0; i < 3; i++) {
      randomSides[i] = Math.floor(Math.random() * 6) + 1;
    }

    console.log("randomSides is " + randomSides);


    $("#dice").empty();
    $("#dice").append("<img class='center-block img-responsive' src='img/dice/" + randomSides[0] + ".svg'>");
    $("#dice").hide().fadeIn();

    // Set up three offset timers to display the random rolls
    var time = 0;
    for (var i = 1; i < 3; i++) {
      time += 500;

      // Show and animate three random sides before displaying this one
      setTimeout(function() {
        i--;

        $("#dice").empty();
        $("#dice").append("<img class='center-block img-responsive' src='img/dice/" + randomSides[i] + ".svg'>");
        $("#dice").hide().fadeIn();
      }, time);
    }

    $("#dice").empty();
    // Show the real dice image for this roll
    $("#dice").append("<img class='center-block img-responsive' src='img/dice/" + diceNumber + ".svg'>");
  }



  // Roll button onClick handler
  $("#roll-btn").click(function(event) {

    var diceNumber = currentTurn.roll();
    $("#roll").text(diceNumber);

    animateDice(diceNumber);

    $("#current-score").text(currentTurn.currentScore);

    // If player rolled a 1, end the turn after 1 second.
    if (diceNumber === 1) {
      $("#current-score").text("Oops ya rolled a 1, turn over.");
      setTimeout(function() { endTurn() }, 2000);
    }

  });

  // Pass button onClick handler
  $("#pass-btn").click(function(event) {
    currentTurn.pass();
    $("#dice").empty();
    endTurn();

  });

});
