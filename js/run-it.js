$(document).ready(function() {
  var player1 = new Player("Porker Posey");
  var player2 = new Player("Mrs. Piggy");
  var game = new Game(player1, player2);

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
