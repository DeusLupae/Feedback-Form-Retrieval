function validate() 
{  
    var user = document.querySelector('#user');  
    user.addEventListener('keyup', function(){
        var u_times = document.querySelector('.u_times');
        var u_check = document.querySelector('.u_check');
        if (user == 1234) {
            alert('Success');
            return false;
        } else {
            alert('Wrong');
        }
    })
}