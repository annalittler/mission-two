const wholeCallbackForm = document.querySelector("#wholeCallbackBox");
const callbackForm = document.querySelector("#wholeCallbackForm");
const callbackBoxThanks = document.querySelector(".callbackBoxThanks");
const callbackWrapper = document.querySelector(".callbackWrapper");

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

const callback = function (entries) {
  entries.forEach((entry) => {
    entry.target.classList.add("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function (target) {
  observer.observe(target);
});
