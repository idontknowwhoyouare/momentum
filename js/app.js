const LoginForm = document.getElementById("login-form");

const LoginFormBtn = LoginForm.querySelector("button");
const LoginFormInput = LoginForm.querySelector("input");

const greeting = document.querySelector("h1");
const NAMED_HIDDEN = "hidden";
const USERNAME_KEY = "username";
function function1 (event) {
  const inputValue = LoginFormInput.value;
  event.preventDefault();
  console.log(inputValue);
  LoginForm.classList.add(NAMED_HIDDEN);
  localStorage.setItem(USERNAME_KEY, inputValue);

  paintGreetings(inputValue);
}

function paintGreetings(tomato) {
  greeting.classList.remove(NAMED_HIDDEN);
  greeting.innerText = `Hello, ${tomato}`;
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    LoginForm.classList.remove(NAMED_HIDDEN);
    LoginForm.addEventListener("submit", function1);
} else {
    paintGreetings(savedUsername);
}