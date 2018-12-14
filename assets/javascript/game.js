//Random Number should be between 19-120
var randomNumber = Math.floor(Math.random() * 102 + 19);
$("#numberMatch").html(randomNumber);

//each jewel needs a random number between 1-12
var jewel1 = Math.floor(Math.random() * 12) + 1;
var jewel2 = Math.floor(Math.random() * 12) + 1;
var jewel3 = Math.floor(Math.random() * 12) + 1;
var jewel4 = Math.floor(Math.random() * 12) + 1;

//Score sheet
var playerTotal = 0;
var wins = 0;
var losses = 0;

//if user wins
function winner() {
  wins++;
  $("#numberWins").html(wins);
  $("#gameMessage").html("You did it!");
  function clearScore() {
    playerTotal.clear();
    clearScore();
  }
};

//if user losses
function loser() {
  losses++;
  $("#numberLosses").html(losses);
  $("#gameMessage").html("Uh. Nope");
  function clearScore() {
    playerTotal.clear();
    clearScore();
  }
};

//clicking function for jewels
$("#jewel1").on("click", function () {
  playerTotal = playerTotal + jewel1;
  console.log(playerTotal);
  $("#totalScore").html(playerTotal);
  if (playerTotal === randomNumber) {
    winner();
  } else if (playerTotal > randomNumber) {
    loser();
  }
});

$("#jewel2").on("click", function () {
  playerTotal = playerTotal + jewel2;
  console.log(playerTotal);
  $("#totalScore").html(playerTotal);
  if (playerTotal === randomNumber) {
    winner();
  } else if (playerTotal > randomNumber) {
    loser();
  }
});

$("#jewel3").on("click", function () {
  playerTotal = playerTotal + jewel3;
  console.log(playerTotal);
  $("#totalScore").html(playerTotal);
  if (playerTotal === randomNumber) {
    winner();
  } else if (playerTotal > randomNumber) {
    loser();
  }
});

$("#jewel4").on("click", function () {
  playerTotal = playerTotal + jewel4;
  console.log(playerTotal);
  $("#totalScore").html(playerTotal);
  if (playerTotal === randomNumber) {
    winner();
  } else if (playerTotal > randomNumber) {
    loser();
  }
});
