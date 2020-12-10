const form = document.querySelector(".signIn-form"),
  userId = form.querySelector("#userId"),
  userPass = form.querySelector("#userPass"),
  signInBtn = document.querySelector("#signIn-btn");

function signInBtnClick(event) {
  const a = "event.value";
  console.log(a);
}
function init() {
  signInBtn.addEventListener("submit", signInBtnClick);
}
init();
