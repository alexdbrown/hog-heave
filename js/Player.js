// Constructor
function Player(playerName) {
  this.playerName = playerName;
  this.totalScore = 0;
};

// Methods
Player.prototype.takeTurn = function() {
  // Create a new Turn connected to this Player
  // Return this new Turn so we can use it
  var newTurn = new Turn(this);
  return newTurn;
};
