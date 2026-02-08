const button = document.getElementById("bmi-btn");
button.addEventListener("click", function () {
  let weight= prompt("Enter your weight in kg:");
  let height = prompt("Enter your height in cm:");
  if(weight && height){
  var  heights= height/100 ;
  var BMI = weight/(heights**2);
  var BMI = parseFloat(BMI).toFixed(1);
  alert(`Your bmi value is ${BMI}`);
  if(BMI<=18.5){
    console.log(alert("You are underweight"));
  }
  else if(BMI>=18.5 || BMI<=24.9){
    console.log(alert("You are normal"));
  }
  else if(BMI>=30 || BMI<=39.9){
    console.log(alert("You are obese"));
  }
  else{
    console.log(alert("You are severely obese"));
  }
}
else{
    console.log(alert("Enter both Weight and Height"));
}
})






