const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
   
    event.preventDefault();
    if(username.value == "hehe" && password.value=="hihi"){
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
        username.value = "";
        password.value = "";
    }

});


function addwork() {
    var work = document.getElementById("inputwork").value;


    if (work.trim() === "") {
        alert("Please enter a message!");
        return;
    }

    // Get the table body
    var tablebody = document.querySelector("#worktable tbody");

    // Create a new row
    var newrow = document.createElement("tr");

    // Create a new cell
    var newcell = document.createElement("td");
    newcell.textContent = work;

    // Append the cell to the row
    newrow.appendChild(newcell);

    // Append the row to the table body
    tablebody.appendChild(newrow);

    // Clear the input field
    inputwork.value = "";


}