const iName = document.getElementById("name");
const age = document.getElementById("age");
const address = document.getElementById("address");
const checkBtn = document.querySelector(".check");
const gender = document.getElementsByName("gender");
const password = document.getElementById("password");
const submit = document.querySelector(".submit");
submit.classList.add("disable");

function checkInput() {
  if (iName.value === "") {
    alert("Please enter your name");
  } else if (age.value === "") {
    alert("Please enter your age");
  } else if (address.value === "") {
    alert("Please enter your address");
  } else if (password.value === "") {
    alert("Please enter your password");
  } else {
    submit.classList.remove("disable");
  }
}
document.querySelector("form").addEventListener("submit", (e) => {
  checkInput();
});
checkBtn.addEventListener("click", checkInput);
