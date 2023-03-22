const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const inputValue = event.target.value;
  const requiredLength = inputEl.getAttribute("data-length");

  if (inputValue.length === Number(requiredLength)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});