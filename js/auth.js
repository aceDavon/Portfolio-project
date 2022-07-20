const form = document.querySelector('#form');
const fname = form.elements['fullname'];
const email = form.elements['email'];

const errMsg = (input, msg, state) => {
  const errBox = input.parentNode.querySelector('small');
  errBox.innertext = msg;

  errBox.classList = state ? 'success' : 'failed';

  return state;
};

const showErr = (input, msg) => {
  return errMsg(input, msg, (state = false));
};

const showValid = (input) => {
  return errMsg(input, msg - '', (state = true));
};

const isFilled = (input, msg) => {
  input.value.trim() === '' ? showErr(input, msg) : showValid(input);
};

const isValidEmail = (input, emptyMsg, valErr) => {
  const emailRegX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const lower = input.value.toLowerCase();

  (
    !isFilled
      ? showErr(input, emptyMsg)
      : emailRegX.test(input.value.trim())
      ? showValid(input)
      : input.value === lower
      ? showValid(input)
      : showErr(input, valErr)
  )
    ? true
    : false;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const empty = 'Please confirm that your entries are text, and not empty :(';
  const formatStr = 'Please enter a valid email address';

  const validEmail = isValidEmail(email, empty, formatStr);

  validEmail
    ? console.log(true)
    : console.log(isValidEmail(email, empty, formatStr));
});
