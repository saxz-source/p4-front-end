function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.getElementById("subscribeModal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/***************************NEW CODE BELOW ***************************/

// Close the main modal when click on the top-right cross
const closeModal = document.getElementById("closeModal")
closeModal.addEventListener("click", function () {
  modalbg.style.display = "none"
})

// DOM Elements related to Thanks-For-Subscribing Modal
const thxModal = document.getElementById("thxModal")
const closeThxModal = document.querySelectorAll(".closeThxModalBtn")

// Close the Thanks Modal
closeThxModal.forEach((btn) => btn.addEventListener("click", closeTheThxModal))

function closeTheThxModal() {
  thxModal.style.display = "none"
}


// Get button Submit
let submitButton = document.getElementById("submitButton")

// Get DOM form inputs
let firstInput = document.getElementById("first")
let lastInput = document.getElementById("last")
let emailInput = document.getElementById("email")
let birthdateInput = document.getElementById("birthdate")
let quantityInput = document.getElementById("quantity")
let checkBoxConditions = document.getElementById("checkbox1")
let locations = [document.getElementById("location1"),
document.getElementById("location2"),
document.getElementById("location3"),
document.getElementById("location4"),
document.getElementById("location5"),
document.getElementById("location6")]


// Verify form submission, OnClick on the submit button
submitButton.addEventListener("click", async function (e) {
  e.preventDefault()
  await verifyingData().then((r) => {
    if (r === false) {
      return
    } else {
      //Make the array of data and send it
      modalbg.style.display = "none"
      document.getElementById("thxModal").style.display = "block";
    }
  })
})


// Verify the validity of the informations, based on html constraints
// Display alerts on the wrong form fields
async function verifyingData() {

  // Boolean that will be return : true if no error ; false if error
  let submitOk = true

  if (!firstInput.validity.valid) {
    document.getElementById("firstInputError").style.display = "block"
    submitOk = false
  } else {
    document.getElementById("firstInputError").style.display = "none"
  }

  if (!lastInput.validity.valid) {
    document.getElementById("lastInputError").style.display = "block"
    submitOk = false
  } else {
    document.getElementById("lastInputError").style.display = "none"
  }

  if (!emailInput.validity.valid) {
    document.getElementById("emailInputError").style.display = "block"
    submitOk = false
  } else {
    document.getElementById("emailInputError").style.display = "none"
  }

  if (!birthdateInput.validity.valid) {
    document.getElementById("birthdateInputError").style.display = "block"
    submitOk = false
  } else {
    document.getElementById("birthdateInputError").style.display = "none"
  }

  if (!checkBoxConditions.checked) {
    document.getElementById("checkBox1Error").style.display = "block"
    submitOk = false
  } else {
    document.getElementById("checkBox1Error").style.display = "none"
  }

  if (!quantityInput.validity.valid) {
    document.getElementById("quantityInputError").style.display = "block"
    submitOk = false
  } else if (checkLocationValidity() && (quantityInput.value < 1 || null)) {
    document.getElementById("quantityInputError").style.display = "block"
    submitOk = false
  } else {
    document.getElementById("quantityInputError").style.display = "none"
  }

  if (quantityInput.value > 0 && !checkLocationValidity()) {
    document.getElementById("locationInputError").style.display = "block"
    submitOk = false
  } else {
    document.getElementById("locationInputError").style.display = "none"
  }

  return submitOk

}


// Check if a location is checked
function checkLocationValidity() {
  let locationValid = false
  for (let location of locations) {
    if (location.checked === true) locationValid = true
  }
  return locationValid
}


/*
submitButton.addEventListener("click", function (e) {
  e.preventDefault()
  formValidity([firstInput, lastInput])


})


function formValidity(inputFields) {


  for (let input of inputFields) {
    console.log(input.validity.valid)

    let errorField = `${input} + Error`
    console.log(errorField)

    if (!input.validity.valid) {

      document.getElementById(errorField).style.display = "block"
    } else {
      document.getElementById(errorField).style.display = "none"
    }
  }


}*/