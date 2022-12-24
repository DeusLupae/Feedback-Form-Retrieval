function validate() {
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');
    if (user = pass) {
        alert('same');
        return false;
    } else {
        alert('bad');
    }
}