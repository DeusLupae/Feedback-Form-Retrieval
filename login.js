function validate() 
{  
    var username=document.getElementById("username").value;  
    var password=document.getElementById("password").value;  
    if(username=="CoopBlakley1234"&& password=="1234")  
    {   
      alert("Login Successful");
      return false;
    } 
    else 
    {  
      alert("Username/Password Incorrect. Try again.");  
    }  
  }  