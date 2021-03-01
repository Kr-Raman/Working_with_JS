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

// Now we are going to add a Escape Key event to close the modal window

// we will do that by using the keyboard event listener
// It will be defined for the entire document.
//***************************Note************************ */
//This keydown event generates a Object that contains all the information about the key that has been pressed which is passed to that function as a object.
/*altKey: false
bubbles: true
cancelBubble: false
cancelable: true
charCode: 0
code: "KeyQ"
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 0
eventPhase: 0
isComposing: false
isTrusted: true
key: "q"
keyCode: 81
location: 0
metaKey: false
path: (4) [body, html, document, Window]
repeat: false
returnValue: true
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: body
target: body
timeStamp: 39832.00499997474
type: "keydown"
view: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
which: 81
__proto__: KeyboardEvent */
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
      console.log("esc was pressed");
    }
  }
});
