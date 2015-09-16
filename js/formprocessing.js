$(document).ready(function() {

    $("form#ticket-form").submit(function(event) {
        var inputMovieName = $("select#movie-name").val();

        var inputTimeBoth = $("input#time").val().split(":");
        var inputHours = parseInt(inputTimeBoth[0]);
        var inputMinutes = parseInt(inputTimeBoth[1]);

        var inputAge = $("input#age").val();

        var newTicket = new Ticket(inputMovieName, inputHours, inputMinutes, inputAge);
        var ticketPrice = newTicket.calculatePrice();


        if (ticketPrice === 0) {
            $("#price").text("free");
        } else {
            $("#price").text("$" + ticketPrice);
        }

        if (inputMovieName === "Terminator Genisys 3D") {
            $("#terminator").show();
            $("body").fadeOut("slow");
            $("body").addClass("terminator-bg").hide().fadeIn("slow");
            $("#bonus").text("Includes a complimentary t-shirt!");
        } else {
            $("body").removeClass("terminator-bg");
            $("#terminator").hide();
            $("#bonus").empty();
        }

        $("#name-display").text(inputMovieName);
        $("#name-display").addClass('animated infinite bounce');


        $("#ticket").show();

        event.preventDefault();
    });
});
