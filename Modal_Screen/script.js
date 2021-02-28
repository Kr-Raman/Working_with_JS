"use strict";
// Here we are going to See the working of JS with the classes

// We will take the use of Variables to decrease the redundant code

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// As we have to select all the buttons consisted by the show-modal class therefore we require a deffirent selector that is queryselectorall
const btnsShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

//console.log(btnsShowModal);
// for (let i = 0; i < btnsShowModal.length; i++) {
//   console.log(btnsShowModal[i].textContent);
// }
