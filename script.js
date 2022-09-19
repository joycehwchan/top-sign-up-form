
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const successElement = document.getElementById('success');
const submitButton = document.getElementById('submit_button')

// Password
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');


password.addEventListener('change', (e) => {
    if (password.value.length < 8 || password.value.length > 20) {
        password.classList.remove("valid");
        confirm_password.classList.remove("valid");
        password.classList = "error";
        // password.style.borderColor = "red";
        successElement.innerText = ''
        errorElement.innerText = "Password should be 8 ~ 20 characters long";

    } else {
        password.classList.remove("error");
        errorElement.innerText = '';

        if (password.value != confirm_password.value) {
            confirm_password.classList.remove("valid");
            password.classList = "error";
            confirm_password.classList = "error";
            successElement.innerText = '';
            errorElement.innerText = "Passwords do not match.";
        }
    }
});

confirm_password.addEventListener('change', (e) => {
    if (password.value.length < 8 || password.value.length > 20) {
        errorElement.innerText = 
        "Password should be 8 ~ 20 characters long";
    } else if (password.value === confirm_password.value) {
        password.classList.remove("error");
        confirm_password.classList.remove("error");
        password.classList = "valid";
        confirm_password.classList = "valid";
        errorElement.innerText = '';
        successElement.innerText = "Passwords match.";
    } else {
        password.classList.remove("valid");
        confirm_password.classList.remove("valid");
        password.classList = "error";
        confirm_password.classList = "error";
        successElement.innerText = '';
        errorElement.innerText = "Passwords do not match.";

    }
});


form.addEventListener('submit', (e) => {
    if (password.value != confirm_password.value) {
        e.preventDefault();
        alert("Passwords do not match.");
    }
});




// Set max value of birthdate = current date
const birth_date = document.getElementById("birth_date");

// Method 1 
birth_date.max = new Date().toISOString().split("T")[0];
// Read about .toISOString()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString 

// Method 2
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth() + 1; //January is 0!
// var yyyy = today.getFullYear();

// if (dd < 10) {
//    dd = '0' + dd;
// }

// if (mm < 10) {
//    mm = '0' + mm;
// }    
// today = yyyy + '-' + mm + '-' + dd;
// birth_date.setAttribute("max", today);

