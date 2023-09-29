//register user
let username =document.getElementById("username");
let email =document.getElementById("email");
let password =document.getElementById("password");
let register_btn =document.querySelector("#sign-up");

register_btn.addEventListener("click",function(e){
    e.preventDefault();
    if(username.value === "" || email.value=== "" || password.value=== "") {
        alert("please fill data");
    } else {
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
        setTimeout( () => {
            window.location = "login.html";
        } , 1500)
        }
});