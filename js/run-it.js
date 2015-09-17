$(document).ready(function() {
  // var player1 = new Player("Porker Posey");
  var player2 = new Player("Mrs. Piggy");



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
    var player1 = new Player($(this).attr('id'));

    $("#player1-name").text(player1.playerName);
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
    var player2 = new Player($(this).attr('id'));

    $("#player2-name").text(player2.playerName);
  });



  // Game shouldn't start until both players have chosen a character
  // var game = new Game(player1, player2);



  var currentTurn = game.getNextTurn();

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
    console.log("player 1 score is " + player1.totalScore);
    $("#player1-score").text(player1.totalScore);
    $("#player2-score").text(player2.totalScore);
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


  showCurrentPlayer();
  updateScores();


  // Roll button onClick handler
  $("#roll-btn").click(function(event) {

    var diceNumber = currentTurn.roll();
    $("#roll").text(diceNumber);
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
    endTurn();

  });

});
