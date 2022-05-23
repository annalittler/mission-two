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
