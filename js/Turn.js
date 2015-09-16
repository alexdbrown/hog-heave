function Turn(player) {
  this.player = player;
  this.currentScore = 0;
  this.completed = false;
};

// Roll a random number and add it to this turn's current score
Turn.prototype.roll = function() {
  var newRoll = Math.floor(Math.random() * 6) + 1;
  this.currentScore += newRoll;
};

// Add the score for this turn to its associated player and end this turn.
Turn.prototype.pass = function() {
  this.player.totalScore += this.currentScore;
  this.completed = true;
}
