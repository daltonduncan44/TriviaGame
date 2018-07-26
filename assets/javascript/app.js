$(document).ready(function () {
  console.log("ready!");
//===global vars
var counter = 30;
var correctAnswers = 0; 
var incorrectAnswers = 0;
var radio = "radio";
var grading = ["true","false"];

// display the counter to the doc
$("#count").text(counter);




  //have timer start when button is clicked
 
  $("#startClock").click(function () {
    console.log("on the clock")
    //var counter = 30;
    setInterval(function () {
      // subtract counter
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;

      }
      if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
      }
    }, 1000);
  });
    
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
    if (q1 === grading[0]) {
      correctAnswers++;
          console.log(correctAnswers)
    }
    if (q2 === grading[0]) {
      correctAnswers++;
      console.log(correctAnswers)
    }
    }

 
  //var userAnswer = $("#quetion1").val();
  //if(userAnswer){}
  //end test when submit is clicked
  //use inputs to display how many were right and wrong. 
});