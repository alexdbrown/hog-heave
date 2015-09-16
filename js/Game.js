// Constructor
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  // Player 1 always goes first, for now
  this.currentPlayer = player1;

  // Game starts out active until a player wins
  this.active = true;
};


/* Run the game. */
Game.prototype.run = function() {
  // While the game is running, keep generating new turns
  while (this.active === true) {
    if (this.player1.totalScore === 100) {
      // player 1 wins
      this.active = false;
    } else if (this.player2.totalScore === 100) {
      // player 2 hooray
      this.active = false;
    } else {
      this.nextTurn();
    }
  }
}




/* Decide who's turn is next
** and create a new turn for that player.
** Or, if a player has already won, don't
** make any new turns. */
Game.prototype.nextTurn = function() {
    // Create a new turn for the current player
    var newTurn = this.currentPlayer.takeTurn();

    // Wait for the new turn to finish
    while (newTurn.completed === false) {
      continue;
    }

    // The turn has finished. Switch currentPlayer to the other player.
    this.currentPlayer = (curentPlayer != player1) ? player1 : player2;
};
