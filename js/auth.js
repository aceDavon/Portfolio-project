const form = document.querySelector('#form');
const email = document.getElementById('email');
const fullname = document.getElementById('fullname');
const message = document.getElementById('textarea');

document.addEventListener('DOMContentLoaded', () => {
  const local = JSON.parse(localStorage.getItem('portfolioData'));
  if (local) {
    fullname.value = local.name;
    email.value = local.email;
    message.value = local.message;
  }
});

const errMsg = (msg, state, type) => {
  const errObj = {
    textErr: '',
    mailErr: '',
  };
  if (type === 'text') {
    errObj.textErr = msg;
  } else {
    errObj.mailErr = msg;
  }
  const errBox = document.getElementById('error');
  errBox.innerText = `${errObj.textErr}, \n , ${errObj.mailErr}`;

  errBox.classList = state ? 'success' : 'failed';

  return state;
};

function showErr(msg, type) {
  const state = false;
  return errMsg(msg, state, type);
}

function showValid(state = true, msg = '') {
  return errMsg(msg, state);
}

const isFilled = (input, msg, type) => {
  const val = input.value;
  return val.trim() !== '' ? showValid() : showErr(msg, type);
};

const isValidEmail = (input, emptyMsg, valErr) => {
  const emailRegX = /^(([^<>().,;:\s@"]+([^<>().,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/;
  const lower = input.value.toLowerCase();
  const type = 'email';
  const data = { email: lower, name: fullname.value, message: message.value };
  const state = true;
  const userData = { state, data };
  if (isFilled(input, emptyMsg, type) && input.value === lower) {
    if (emailRegX.test(lower)) {
      showValid();
      return userData;
    }
    showErr(valErr, type);
  }

  return showErr(
    '\n Please confirm that you entered a lower case text and a valid email', type,
  );
};

const persistData = (status, data) => {
  status = true;
  localStorage.setItem('portfolioData', JSON.stringify(data));

  form.submit();
  return true;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const empty = '\n Please confirm that your entries are text, and not empty :(';
  const formatStr = '\n Please enter a valid email address';

  let type = 'text';
  const validEmail = isValidEmail(email, empty, formatStr);
  const fname = isFilled(fullname, empty, (type = 'text'));
  const msg = isFilled(message, empty, (type = 'text'));
  const { data, state } = validEmail;
  const others = [fname, msg].every(Boolean);
  return state && others
    ? persistData(state, data)
    : showErr(
      'request failed, try filling all fields correctly', type,
    );
});
