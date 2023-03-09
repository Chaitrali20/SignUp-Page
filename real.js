function validate(){
  var Pass=document.getElementById("Pass");
  var length=document.getElementById("length");
  var pass=document.getElementById("pass");
  if(Pass.value.length>=8 && Pass.value.length==pass.value.length){
    alert("Signup successful")
    return false;
  }
  else{
    alert("Password must contain atleast 8 character or problem in password confirmation")
    return false;
  }
}