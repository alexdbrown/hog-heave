describe('Player', function() {
  it("creates a player with the given name and an initial score of 0", function() {
    var testPlayer = new Player("Mrs. Piggy");
    expect(testPlayer.playerName).to.equal("Mrs. Piggy");
    expect(testPlayer.totalScore).to.equal(0);
  });

  // current turn

  // take turn
});

describe('Turn', function() {
  it("creates a new turn with a default score of zero", function() {
    var testPlayer = new Player("Porker Posey");
    var testTurn = new Turn(testPlayer);
    expect(testTurn.currentScore).to.equal(0);
  });
});

describe('Turn.roll()', function() {
  it("it produces a random number between 1 and 6 and adds it to the currentScore", function() {
    var testPlayer = new Player("Porker Posey");
    var testTurn = new Turn(testPlayer);
    testTurn.roll();
    expect(testTurn.currentScore).to.be.within(1,6);
  });
});

describe('Turn.pass()', function() {
  it("ends the current turn and adds currentScore to player.totalScore", function() {
    var testPlayer = new Player("Porker Posey");
    var testTurn = new Turn(testPlayer);
    testTurn.roll();
    var scoreAfterRoll = testTurn.currentScore;
    testTurn.pass();
    expect(testPlayer.totalScore).to.equal(scoreAfterRoll);
  });
});
