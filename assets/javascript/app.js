$(document).ready(function () {
  console.log("ready!");
var counter = 30;
$("#count").text(counter);




  //have timer start when button is clicked
 
  $("#startClock").click(function () {
    //var counter = 30;
    setInterval(function () {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
        console.log("say something")
      }
      if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
      }
    }, 1000);
  });
    
 


  //take in user inputs
  //check if inputs are correct

  //var userAnswer = $("#quetion1").val();
  //if(userAnswer){}
  //end test when submit is clicked
  //use inputs to display how many were right and wrong. 
});