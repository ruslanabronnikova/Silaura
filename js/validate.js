document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  emailInput.addEventListener('blur', function () {
      validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Пожалуйста, введите корректный адрес электронной почты.', false);
  });

  passwordInput.addEventListener('blur', function () {
      validateInput(passwordInput, /^.{6,}$/, 'Пожалуйста, введите пароль длиной не менее 6 символов.', false);
  });
});

function validateInput(input, regex, errorMessage, submit) {
  const value = input.value;
  const errorSpan = input.nextElementSibling;

  if (!regex.test(value)) {
      errorSpan.textContent = errorMessage;
      errorSpan.style.display = 'block';
      return false;
  } else {
      errorSpan.style.display = 'none';
      if (submit) {
          submitForm();
      }
      return true;
  }
}

function submitForm() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailValid = validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Пожалуйста, введите корректный адрес электронной почты.', false);
  const passwordValid = validateInput(passwordInput, /^.{6,}$/, 'Пожалуйста, введите пароль длиной не менее 6 символов.', false);

  if (emailValid && passwordValid) {
      document.querySelector('form').submit();
  }
}
