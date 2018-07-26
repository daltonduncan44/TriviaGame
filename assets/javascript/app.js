$(document).ready(function () {
  console.log("ready!");
  $(".testBody").hide();
//===global vars
var counter = 50;
var correctAnswers = 0; 
var incorrectAnswers = 0;

//array made to see if input is right or wrong
var grading = ["true","false"];

// display the counter to the doc
$("#count").text(counter);




  //have timer start when button is clicked
 
  $("#startClock").click(function () {
    console.log("on the clock")
    $(".testBody").show(200);
    //var counter starts at 30 then counts down
    setInterval(function () {
      // subtract counter
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;

      }
      if (counter === 0) {
        var timeOut = "Sorry times up try again";
        $(".testBody").text(timeOut);
        clearInterval(counter);
      }
    }, 1000);
  });
    //when submit buttun is clicked stop the timer and start the grading.
  $("#submitBttn").click(function () 
  {
console.log("test submitted");
    clearInterval(counter);
   validateForm(); 
  });




  //take in user inputs
  //check if inputs are correct
  function validateForm() {

    var q1 = document.forms["quizForm"]["qFl"].value;
    var q2 = document.forms["quizForm"]["qCal"].value;
    var q3 = document.forms["quizForm"]["qIl"].value;
    var q4 = document.forms["quizForm"]["qTx"].value;
    var q5 = document.forms["quizForm"]["qNy"].value;
    var q6 = document.forms["quizForm"]["qCol"].value;
    var q7 = document.forms["quizForm"]["qNv"].value;
    var q8 = document.forms["quizForm"]["qMt"].value;
    var q9 = document.forms["quizForm"]["qHw"].value;
    var q10 = document.forms["quizForm"]["qAl"].value;
    //if statements to add to your score can be done in for loop later
    if (q1 === grading[0]) {
      correctAnswers++;
          console.log(correctAnswers)
    }
    if (q2 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }
    if (q3 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }

    if (q4 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }

    if (q5 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }

    if (q6 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }

    if (q7 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }

    if (q8 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }

    if (q9 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }

    if (q10 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }



var resultString = "Great Job you got " + correctAnswers+ " right out of 10.";
$(".testBody").hide();
$("#count").hide();
$("#results").text(resultString);






    }

 
  //var userAnswer = $("#quetion1").val();
  //if(userAnswer){}
  //end test when submit is clicked
  //use inputs to display how many were right and wrong. 
});