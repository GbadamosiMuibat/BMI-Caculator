document.getElementById("calculate")
.addEventListener("click", function(){
    var height_val = document.getElementById('height').value;
    var weight_val = document.getElementById('weight').value;

    if (height == "" || weight == "") {
        alert("Please fill out the input fields!");
        return;
      }
    var BMI = weight_val / (height_val /100 * height_val /100 );
    BMI = BMI.toFixed(2);
    document.getElementById("result").innerHTML="Your BMI is " + BMI;

    let status = "";

    if (BMI < 18.5) {
      status = "Underweight";
    }
    if (BMI >= 18.5 && BMI < 25) {
      status = "Healthy";
    }
    if (BMI >= 25 && BMI < 30) {
      status = "Overweight";
    }
    if (BMI >= 30) {
      status = "Obese";
    }
    document.querySelector(".comment").innerHTML= "Comment: you are" + status
});