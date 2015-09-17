// $("#dice").empty();
//
// var randomSides = [];
// for (var i = 0; i < 3; i++) {
//   randomSides[i] = Math.floor(Math.random() * 6) + 1;
// }
//
// console.log("randomSides is " + randomSides);
//
//
// $("#dice").empty();
// $("#dice").append("<img class='center-block img-responsive' src='img/dice/" + randomSides[0] + ".svg'>");
// $("#dice").hide().fadeIn();
//
// // Set up three offset timers to display the random rolls
// var time = 0;
// for (var i = 1; i < 3; i++) {
//   time += 500;
//
//   // Show and animate three random sides before displaying this one
//   setTimeout(function() {
//     i--;
//
//     $("#dice").empty();
//     $("#dice").append("<img class='center-block img-responsive' src='img/dice/" + randomSides[i] + ".svg'>");
//     $("#dice").hide().fadeIn();
//   }, time);
// }
