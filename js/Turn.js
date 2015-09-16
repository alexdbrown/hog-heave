function Turn(player) {
  this.player = player;
  this.currentScore = 0;
  this.completed = false;
};

// Roll a random number and add it to this turn's current score
Turn.prototype.roll = function() {
  var newRoll = Math.floor(Math.random() * 6) + 1;

  // If player rolls in the mud, clear current score for this turn and end the turn.
  // Otherwise, add the new roll to the current score for this turn.
  if (newRoll === 1) {
    this.currentScore = 0;
    this.completed = true;
  } else {
    this.currentScore += newRoll;
  }
  return newRoll;
};

// Add the score for this turn to its associated player and end this turn.
Turn.prototype.pass = function() {
  this.player.totalScore += this.currentScore;
  this.completed = true;
}
