"use strict";
// Here we are going to See the working of JS with the classes

// We will take the use of Variables to decrease the redundant code

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// As we have to select all the buttons consisted by the show-modal class therefore we require a deffirent selector that is queryselectorall
const btnsShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const OpenModal = function () {
  // Now here we are just removing the hidden property of the class using the classList method we can remove multiple properties just by using commas,, we can add properties too
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// We have to use for loop becuz there are 3 buttons with the same class name
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", OpenModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
