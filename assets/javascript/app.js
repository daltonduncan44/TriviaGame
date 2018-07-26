$( document ).ready(function() {
  console.log( "ready!" );




//have timer start when button is clicked
$(".start btn btn-secondary btn-lg btn-block").on("click", function(){
    var counter = 30;
    setInterval(function() {
      counter--;
       if (counter >= 0) {
$("#startClock").append($("<span>"))
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