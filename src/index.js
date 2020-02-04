let inputs = document.querySelectorAll("input"),
  form = document.querySelector("form"),
  password = form.querySelector("#password"),
  cpassword = form.querySelector("#cpassword");

inputs.forEach(input => {
  input.addEventListener("change", () =>
    console.log(`${input.getAttribute("name")}: ${input.value}`)
  );
});

cpassword.addEventListener("change", () => {
  if (cpassword.value !== password.value) {
    cpassword.classList.add("focus-error");
  } else cpassword.classList.remove("focus-error");
});
form.onsubmit = event => {
  if (password.value !== cpassword.value) {
    event.preventDefault();
  }
};
