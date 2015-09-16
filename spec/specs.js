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
  it("it produces a random number between 1 and 6 and either adds it to the currentScore or rolls in the mud", function() {
    var testPlayer = new Player("Porker Posey");
    var testTurn = new Turn(testPlayer);
    var newRoll = testTurn.roll();

    // If the roll was not a 1, the current score should be 0 + this roll.
    // If the roll was a 1, the current score should be 0 + 0 = 0.
    if (newRoll !== 1) {
      expect(testTurn.currentScore).to.be.within(2,6);
    } else {
      expect(testTurn.currentScore).to.equal(0);
    }
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

describe('Game', function() {
  it("creates a new active game", function() {
    var testPlayer1 = new Player("Porker Posey");
    var testPlayer2 = new Player("Mrs. Piggy");
    var testGame = new Game(testPlayer1, testPlayer2);
    expect(testGame.active).to.equal(true);
    });
});

describe('Game.run()', function() {
  it("ends the game if a player has won", function() {
    var testPlayer1 = new Player("Porker Posey");
    var testPlayer2 = new Player("Mrs. Piggy");
    var testGame = new Game(testPlayer1, testPlayer2);

    // Hard-code a Mrs. Piggy win
    testPlayer2.totalScore = 100;

    testGame.run();
    expect(testGame.active).to.equal(false);
  });
});

// describe('Game.nextTurn()', function() {
//   it("runs a turn and switches the current player", function() {
//     var testPlayer1 = new Player("Porker Posey");
//     var testPlayer2 = new Player("Mrs. Piggy");
//     var testGame = new Game(testPlayer1, testPlayer2);
//
//     testGame.nextTurn();
//
//
//
//   });
// });
