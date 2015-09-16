describe('Ticket', function() {
    it("creates a ticket with given spectifications", function() {
        var testTicket = new Ticket("Batman", 18, 0, 14);
        expect(testTicket.movieName).to.equal("Batman");
        expect(testTicket.timeHours).to.equal(18);
        expect(testTicket.timeMinutes).to.equal(0);
        expect(testTicket.age).to.equal(14);
    });
});

describe('calculatePrice', function() {
    it("is free for children under 5", function() {
        var testTicket = new Ticket("Batman Begins", 17, 0, 3);
        expect(testTicket.calculatePrice()).to.equal(0);
    });

    it("is $2 for senior citizens over 65", function() {
        var testTicket = new Ticket("50 Shades of Grey", 18, 30, 95);
        expect(testTicket.calculatePrice()).to.equal(2);
    });

    it("is $5 if you are any age in between", function() {
        var testTicket = new Ticket("Schindler's List", 20, 0, 19);
        expect(testTicket.calculatePrice()).to.equal(5);
    });

    it("is $1 off before 6:00pm", function() {
        var testTicket = new Ticket("Jurassic World", 17, 0, 30);
        expect(testTicket.calculatePrice()).to.equal(4);
    });

    it("is $2 more after 8:00pm", function() {
        var testTicket = new Ticket("Jurassic World", 20, 30, 24);
        expect(testTicket.calculatePrice()).to.equal(7);
    });

    // Comes with an autographed T-Shirt... it's worth it.
    it("is $80 for Terminator Genisys 3D", function() {
        var testTicket = new Ticket("Terminator Genisys 3D", 21, 30, 40);
        expect(testTicket.calculatePrice()).to.equal(80);
    });
});
