// DOM elements
const form = document.getElementById('form');
const submit_btn = document.querySelector('form button');
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

// DOM for Output
const yearsOutput = document.querySelector('#years-total span')
        monthsOutput = document.querySelector('#months-total span')
        daysOutput = document.querySelector('#days-total span');

// error messages
const errMsgs = {
    required:'This field is required',
    invalidDay: 'Please input a valid day',
    invalidMonth: 'Please input a valid month',
    invalidYear: 'Please input a valid year'
}


// event listener
form.addEventListener('submit',e =>{
    
    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation()
      } else if(form.checkValidity()){
        e.preventDefault();
        const age = calcAge(dayInput.value,monthInput.value,yearInput.value);
        writeAge(age)
      }
    
    form.classList.add('was-validated')

}, false)

/* Functions */

function writeAge(ageObject){
    yearsOutput.innerHTML = ageObject.yearsOld;
    monthsOutput.innerHTML = ageObject.monthsOld;
    daysOutput.innerHTML = ageObject.daysOld;
}

function calcAge(dayValue,monthValue,yearValue){
    var dob = new Date(`${monthValue}/${dayValue}/${yearValue}`);  
    // Difference in milliseconds between the two dates
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    const yearsOld = Math.abs(age_dt.getUTCFullYear() - 1970);
    const daysOld = parseInt(Math.abs(diff_ms / (1000 * 3600 * 24)).toFixed(0))
    // Calculates number of months based on number of days
    const monthsOld = parseInt((daysOld / 30.4).toFixed(0))

    return ({yearsOld,daysOld,monthsOld})
}
