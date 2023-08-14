function validation(){
if(document.Formfill.Username.value==""){
    document.getElementById("result").innerHTML="Enter Username*";
    return false;
    }
else if(document.Formfill.Username.value.length<6){
    document.getElementById("result").innerHTML="Atleast six letter*";
    return false;
    }
else if(document.Formfill.Email.value==""){
    document.getElementById("result").innerHTML="Enter your Email*";
    return false;
    }
else if(document.Formfill.Password.value==""){
    document.getElementById("result").innerHTML="Enter your Password";
    return false;
    }
else if(document.Formfill.CPassword.value.length<6){
    document.getElementById("result").innerHTML="Password must be 6-digits";
    return false;
    }
else if(document.Formfill.CPassword.value==""){
    document.getElementById("result").innerHTML="Enter Confirm Password";
    return false;
    }
else if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
    document.getElementById("result").innerHTML="Password does'nt matched";
    return false;
    }
else if(document.Formfill.CPassword.value == document.Formfill.CPassword.value){
    popup.classList("open-slide")
    return false;
    }
    }
    var popup=document.getElementById('popup')
function CloseSlide(){
    popup.classList.remove("open-slide")
}
    