function Ticket(movieName, timeHours, timeMinutes, age) {
    this.movieName = movieName;
    this.timeHours = timeHours;
    this.timeMinutes = timeMinutes;
    this.age = age;
};

Ticket.prototype.calculatePrice = function() {
    if (this.movieName === "Terminator Genisys 3D") {
        return 80;

    // All other films
    } else {
        if (this.age < 5) {
            return 0;
        } else if (this.age > 65) {
            return 2;
        } else {
            // If hours hand is before 6, apply the matinee discount
            if (this.timeHours < 18) {
                return 4;
            // Either the hours hand is past 8, or we are somewhere between 8 and 9
        } else if ((this.timeHours > 20) || (this.timeHours === 20 && this.timeMinutes > 0)) {
                return 7;
            } else {
                return 5;
            }
        }
    }
};
