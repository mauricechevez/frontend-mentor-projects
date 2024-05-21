const form = document.querySelector('form');
const textFields = document.querySelectorAll('.input-container :is(input[type="text"],textarea):not(#email)');
const emailField = document.getElementById('email');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById('consent-check');

let errorCount = 0;

/* Functions */

// Notification message
function formSubmissionMessage() {
  // Get the snackbar DIV
  var x = document.getElementById('snackbar');
  // Add the "show" class to DIV
  x.className = 'show';
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace('show', '');
  }, 3000);
}

function checkErrors() {
  validateEmail(emailField);
  validateRadios(radioButtons);
  validateCheckbox(checkbox);
  validateTexts(textFields);
  countErrors();
  errorCount > 1 ? alert(`There are ${errorCount} errors.`) : errorCount == 1 ? alert(`There is ${errorCount} error.`) : null;
}

function showError(field) {
  field.nextElementSibling.classList.add('show');
}

function hideError(field) {
  field.nextElementSibling.classList.remove('show');
}

function countErrors() {
  const errors = document.querySelectorAll('.error-text.show').length;
  errorCount = errors;
}

function validateTexts(texts) {
  texts.forEach((text) => {
    if (text.value == '' || text.value == null) {
      showError(text);
    } else {
      hideError(text);
    }
  });
}

function validateEmail(mail) {
  if (mail.value == '' || mail.value == null) {
    showError(mail);
    mail.nextElementSibling.innerText = 'This field is required';
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
    // Assume email is valid based on above test
    hideError(mail);
    return true;
  } else {
    // Email is not valid. Show error.
    mail.nextElementSibling.innerText = 'Please enter a valid email address';
    showError(mail);
    return false;
  }
}

function validateRadios(radios) {
  let deselectedCount = 0;
  radios.forEach((radio) => {
    if (!radio.checked) {
      deselectedCount++;
    }
  });
  if (deselectedCount > 1) {
    showError(document.querySelector('.container :has(input[type="radio"]'));
  } else {
    hideError(document.querySelector('.container :has(input[type="radio"]'));
  }
}

function validateCheckbox(check) {
  if (!check.checked) {
    showError(document.querySelector('.container :has(#consent-check)'));
  } else {
    hideError(document.querySelector('.container :has(#consent-check)'));
  }
}

// Form Submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkErrors();
    if(errorCount == 0){
        formSubmissionMessage();
    }
});
