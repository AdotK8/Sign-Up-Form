const errorMessage = document.getElementById("error");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

form.addEventListener('submit', (e)=> { 
    if (password1.value !== password2.value) {
    e.preventDefault();
    errorMessage.innerHTML = "*passwords do not match";
    }
});

