
//when you click on sign up it alerts saying signed up!
function signupbtn(){
email = document.querySelector("#footer-email").value;
alert("You are signed up!")
document.querySelector("#footer-email-btn").disabled=true;
document.querySelector("#footer-email-btn").setBackground(Color.YELLOW); 
}