const emailInput = document.querySelector('#email');
const btnClick = document.querySelector('#submit');
const RegexEmail = /\S+@\S+\.\S+/;
const emailError = document.querySelector('.icon-error-place');
const emailTextError = document.querySelector('.text-error-place');
//const fromGroupEl = document.querySelector('.form-group');
let errors = [];

btnClick.addEventListener('click', e => {
  // delete the success class after validated
  emailTextError.classList.remove('text-success-place');

  // reset all errors
  errors = [];
  // prevent default form action
  e.preventDefault();
  // email address validation
  const email = emailInput.value; 

  if (email == '' || email === undefined) {
    errors.push('Enter your email');
    // display error
    emailError.style.display = 'block';
    emailTextError.innerText = errors[0];
  } else if (!email.match(RegexEmail)) {
    errors.push('Enter your valid email');
    // display error icon
    emailError.style.display = 'block';
    emailTextError.innerText = errors[0];
  }

  if (!errors.length > 0) {
    // hide error icon
    emailError.style.display = 'none';
    emailTextError.classList.add('text-success-place');
    emailTextError.innerText = 'Thanks for subscribing to our newsletter.';
  }
});
