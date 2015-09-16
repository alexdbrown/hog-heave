// Constructor
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  // Player 1 always goes first, for now
  this.currentPlayer = this.player1;

  // Game starts out active until a player wins
  this.active = true;
};

Game.prototype.checkStatus = function() {
  if (this.player1.totalScore >= 100) {
      // player 1 wins, return that player so we can get access to him/her
      this.active = false;
      return this.player1;
    } else if (this.player2.totalScore >= 100) {
      // player 2 hooray
      this.active = false;
      return this.player2;
    } else {
      return true;
    }
}

// Just get the next turn and return the turn.
Game.prototype.getNextTurn = function() {
  return this.currentPlayer.takeTurn();
}

Game.prototype.switchPlayer = function() {
  this.currentPlayer = (this.currentPlayer != this.player1) ? this.player1 : this.player2;
}


// debugger;
