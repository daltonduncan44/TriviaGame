$(document).ready(function () {
  console.log("ready!");
//===global vars
var counter = 30;
var rightAns = 0; 
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
    inputGrading();
  });




  //take in user inputs
  //check if inputs are correct
  function inputGrading () {
    if(radio == value("true")) {
rightAns++;
console.log(rightAns);
    }
}
  //var userAnswer = $("#quetion1").val();
  //if(userAnswer){}
  //end test when submit is clicked
  //use inputs to display how many were right and wrong. 
});