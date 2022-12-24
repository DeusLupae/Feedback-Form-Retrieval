function validate() {  
    var username=document.getElementById("username").value;  
    var password=document.getElementById("password").value;  
    if(username=="CoopBlakley1234")  
    {   
      open(https://www.youtube.com);  
      return false;
    } else {  
      alert("Username/Password Incorrect. Try again.");  
    }  
  }  