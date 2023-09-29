let username =document.getElementById("username");
let password =document.getElementById("password");
let login_btn =document.getElementById("sign-in");

let getUser = localStorage.getItem('username');
let getPassword = localStorage.getItem('password');

login_btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (username.value === "" || password.value=== "") {
        alert("please fill data");
    } else if (((getUser.trim() && getUser=== 'username.value') && (getPassword.trim() && getPassword ==='password.value'))) {
      setTimeout(() => {window.location = "index.html"}, 1000);
    } else {
        console.log("userName && password is wrong")
    }

});
