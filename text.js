
const form = document.getElementById("form");
const nameinp = document.getElementById("name");
const surnameinp = document.getElementById("surname");
const ageinp = document.getElementById("age");
const nationalityinp = document.getElementById("nationality");
const positioninp = document.getElementById("position");
const experienceinp = document.getElementById("experience");
let users = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newuser = {
        name: nameinp.value,
        surname: surnameinp.value,
        age: ageinp.value,
        nationality: nationalityinp.value, // Corrected variable name
        position: positioninp.value,
        experience: experienceinp.value,
    };
    users.push(newuser);
    console.log(users);
});


