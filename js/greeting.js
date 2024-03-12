const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const toDoFormScreen = document.querySelector(".todo-form");
const toDoListScreen = document.querySelector(".todo-list");
const quotesScreen = document.querySelector(".todo-list__quote");
const weatherScreen = document.querySelector(".weather");

const HIDDEN_CLASSNAME = "hidden";
// const VISIBLE_CLASSNAME = "visible";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  // loginForm.classList.remove(VISIBLE_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  showGreeting(username);
}

function showGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoFormScreen.classList.remove(HIDDEN_CLASSNAME);
  toDoListScreen.classList.remove(HIDDEN_CLASSNAME);
  quotesScreen.classList.remove(HIDDEN_CLASSNAME);
  weatherScreen.classList.remove(HIDDEN_CLASSNAME);
  // greeting.classList.add(VISIBLE_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  showGreeting(savedUsername);
}
