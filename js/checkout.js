// Exercise 6
function validate(event) {
  let error = 0;

  event.preventDefault();

  // Get the input fields
  let fName = document.getElementById("fName");
  let fEmail = document.getElementById("fEmail");
  let fAddress = document.getElementById("fAddress");
  let fLastN = document.getElementById("fLastN");
  let fPassword = document.getElementById("fPassword");
  let fPhone = document.getElementById("fPhone");

  //Check regExpes
  const letters = /^[a-zA-Z]+$/;
  const validPassword = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
  const validEmail = /\S+@\S+\.\S+/;
  const numbers = /^[0-9]+$/;

  // Validate fields entered by the user: name, phone, password, and email
  if (fName.value.length < 3 || !letters.test(fName.value)) {
    fName.classList.add("is-invalid");
    error++;
  } else {
    fName.classList.remove("is-invalid");
  }

  if (fEmail.value.length < 3 || !validEmail.test(fEmail.value)) {
    fEmail.classList.add("is-invalid");
    error++;
  } else {
    fEmail.classList.remove("is-invalid");
  }

  if (fAddress.value.length < 3) {
    fAddress.classList.add("is-invalid");
    error++;
  } else {
    fAddress.classList.remove("is-invalid");
  }

  if (fLastN.value.length < 3 || !letters.test(fLastN.value)) {
    fLastN.classList.add("is-invalid");
    error++;
  } else {
    fLastN.classList.remove("is-invalid");
  }

  if (fPassword.value.length < 3 || !validPassword.test(fPassword.value)) {
    fPassword.classList.add("is-invalid");
    error++;
  } else {
    fPassword.classList.remove("is-invalid");
  }

  if (fPhone.value.length < 3 || !numbers.test(fPhone.value)) {
    fPhone.classList.add("is-invalid");
    error++;
  } else {
    fPhone.classList.remove("is-invalid");
  }

  if (error > 0) {
    alert("There are items that requires your attention");
  } else {
    alert("Looks good!");
  }
}
