const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if(username.value == "hehe" && password.value=="hihi"){
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }

});