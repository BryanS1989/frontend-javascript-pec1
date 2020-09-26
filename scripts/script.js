
// Get form element
const form = document.getElementById('form');

// Get username element
const username = document.getElementById('username');

// Get email element
const email = document.getElementById('email');

// Get password element
const password = document.getElementById('password');

// Get password confirm element
const password2 = document.getElementById('forpassword2');

/*****************/
/*   FUNCTIONS   */
/*****************/
/* Show inputs error messages*/
function showError(input, message) {
    
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message ;

}

/* Show success outline */
function showSuccess(input) {

    const formControl = input.parentElement;

    formControl.className = 'form-control success'

}

/* Check if email is valid */
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


/***********************/
/*   EVENT LISTENERS   */
/***********************/
// Add event listener to form for button
form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    // Validation for User Name
    if (username.value === '') {
        // alert('Username is required');
        showError(username, 'Username is required');

    } else {
        
        showSuccess(username);

    }

    // Validation for Email
    if (email.value === '') {
        
        showError(email, 'Email is required');

    }else if (!isValidEmail(email.value)) {

        showError(email, 'Email is not valid');

    } else {

        showSuccess(email);

    }

    // Validation for User Password
    if (password.value === '') {
        
        showError(password, 'Password is required');

    } else {
        
        showSuccess(password);

    }

    // Validation for Password Confirmation
    if (passwordConfirm.value === '') {
        
        showError(passwordConfirm, 'Password confirmation is required');

    } else {
        
        showSuccess(passwordConfirm);

    }

});