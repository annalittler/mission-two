const navButtonHome = document.querySelector("#homeButton");

document.addEventListener("keydown", function () {
  console.log("Hello!");
});

const fourthBox = document.querySelector(".fourthBox");
const fourthBoxImageOne = document.querySelector("#fourthBoxImageOne");
const fourthBoxImageTwo = document.querySelector("#fourthBoxImageTwo");
const fourthBoxImageThree = document.querySelector("#fourthBoxImageThree");
const fourthBoxImageFour = document.querySelector("#fourthBoxImageFour");

fourthBox.addEventListener("mouseover", function () {
  fourthBoxImageOne.classList.remove("noDisplay");
  fourthBoxImageOne.classList.add("fourthBoxImageSlideLeftSlow");
  fourthBoxImageTwo.classList.remove("noDisplay");
  fourthBoxImageTwo.classList.add("fourthBoxImageSlideRight");
  fourthBoxImageThree.classList.remove("noDisplay");
  fourthBoxImageThree.classList.add("fourthBoxImageSlideLeft");
  fourthBoxImageFour.classList.remove("noDisplay");
  fourthBoxImageFour.classList.add("fourthBoxImageSlideRightSlow");
});

const wholeCallbackForm = document.querySelector("#wholeCallbackBox");
const callbackForm = document.querySelector("#wholeCallbackForm");
const callbackBoxThanks = document.querySelector(".callbackBoxThanks");
const callbackWrapper = document.querySelector(".callbackWrapper");

// callbackForm.addEventListener("submit", (e) => e.preventDefault());
// callbackForm.addEventListener("submit", () => {
//   callbackForm.classList.add("noDisplay"),
//     callbackBoxThanks.classList.remove("noDisplay");
// });

callbackForm.addEventListener("submit", (e) => e.preventDefault());
callbackForm.addEventListener("submit", () => {
  callbackWrapper.classList.add("noDisplay"),
    callbackBoxThanks.classList.remove("noDisplay");
});

const emailBox = document.querySelector("#emailBox");
const emailForm = document.querySelector("#emailSignUp");
const emailThanksMsg = document.querySelector("#emailThanksMsg");
const emailInput = document.querySelector("#emailInput");
const emailBtn = document.querySelector("#mailingBtn");

// emailForm.addEventListener("submit", (e) => {
//   e.preventDefault(),
//     emailBox.classList.add("noDisplay"),
//     // emailThanksMsg.classList.remove("noDisplayOpacity");
// });

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailInput.value.length < 5 || emailInput.value.indexOf("@") == -1) {
    emailThanksMsg.classList.add("red");
    emailThanksMsg.innerHTML = "Enter a valid email address";
    emailThanksMsg.classList.remove("noDisplayOpacity");
    emailThanksMsg.classList.add("fadeOut");
  } else {
    emailThanksMsg.classList.remove("red");
    emailThanksMsg.innerHTML = "Thanks for signing up!";
    emailThanksMsg.classList.remove("noDisplayOpacity");
    emailThanksMsg.classList.add("fadeOut");
  }
});

const quoteButton = document.querySelector("#quoteButton");
const popupBg = document.querySelector(".popup-bg");
const popupX = document.querySelector("#popupX");
const body = document.querySelector("body");

quoteButton.addEventListener("click", () => {
  popupBg.classList.add("bg-active");
});

popupX.addEventListener("click", () => {
  popupBg.classList.remove("bg-active");
  popupAlt.classList.remove("popupOn");
  popupForm.classList.remove("popupOff");

  // console.log("bg-active");
});

const popupForm = document.querySelector(".popupMain");
const popupSubBtn = document.querySelector("#popupBtn");
const popuph2 = document.querySelector("#popuph2");
const popupInput = document.querySelectorAll(".popupInput");
const popupNameInput = document.querySelector("#popupNameInput");

popupSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popupForm.classList.add("popupOff");
  let firstName = popupNameInput.value.split(" ");
  popupAlt.innerHTML = `Thanks, ${firstName[0]}! We'll be in touch to discuss your project.`;
  popupAlt.classList.add("popupOn");
});

const hamburger = document.querySelector("#hamburger");
const navUL = document.querySelector("ul");

hamburger.addEventListener("click", () => navUL.classList.toggle("show"));
