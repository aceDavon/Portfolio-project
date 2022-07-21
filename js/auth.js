const form = document.querySelector('#form');
const email = document.getElementById('email');

const errMsg = (msg, state) => {
  const errBox = document.getElementById('error');
  errBox.innerText = msg;

  errBox.classList = state ? 'success' : 'failed';

  return state;
};

function showErr(msg, state = false) {
  return errMsg(msg, state);
}

function showValid(state = true, msg = '') {
  return errMsg(msg, state);
}

const isFilled = (input, msg) => {
  const val = input.value;
  return val.trim() !== '' ? showValid() : showErr(msg);
};

const isValidEmail = (input, emptyMsg, valErr) => {
  const emailRegX = (/^(([^<>().,;:\s@"]+([^<>().,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/);
  const lower = input.value.toLowerCase();
  if (isFilled(input, emptyMsg) && input.value === lower) {
    return emailRegX.test(lower) ? showValid() : showErr(valErr);
  }

  return showErr(
    'Please confirm that you entered a lower case text and a valid email',
  );
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const empty = 'Please confirm that your entries are text, and not empty :(';
  const formatStr = 'Please enter a valid email address';

  const validEmail = isValidEmail(email, empty, formatStr);

  return validEmail ? form.submit() : '';
});
