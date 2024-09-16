let nextButton = document.getElementById("next"); // The Next Button on the Right
let prevButton = document.getElementById("prev"); // The Previous Button on the left
let carousel = document.querySelector(".carousel"); // the whole carousel
let listHTML = document.querySelector(".carousel .list"); // the items inside the carousel

nextButton.onclick = function () {
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};

const showSlider = (type) => { // Type value is the button the the User click 
  carousel.classList.remove("prev", "next");
  let items = document.querySelectorAll(".carousel .list .item"); // Selecting all the items in the caroussel so the fucntion run through them all depends on which button the user clicked.
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next"); // animation effect
  } else {
    let positionLast = items.length - 1;
    listHTML.prepend(items[positionLast]);
    carousel.classList.add("prev"); // animation effect 
  }

};

let cardslides = Array.from(document.querySelectorAll(".cardCarousel .cardSlides"));
let currentSlide = 0;
let cardCount = cardslides.length;
// Get the next and prev buttons
let cardPrevButton = document.getElementById("cardPrevButton");
let cardNextButton = document.getElementById("cardNextButton");
// Handle Click previous and Next Button 
cardPrevButton.onclick = prevCard;
cardNextButton.onclick = nextCard; 
// Create The Main UL Element
let bulletElement = document.createElement('ul');
bulletElement.setAttribute('id', 'bullet-ul'); // Set ID on created Ul Element
// Create List Items based on array length
for (let i = 1; i <= cardCount; i++  ) {
   //Create Li items
   let bulletItems = document.createElement('li');
   // Append  Li to UL 
   bulletElement.appendChild(bulletItems);
}
// Append Ul to the page
document.getElementById('indicators').appendChild(bulletElement);
// Create new bullet element
let bulletNew = document.getElementById('bullet-ul');
// Create New Bullets 
let bullets = Array.from(document.querySelectorAll("#bullet-ul li"));
// Previous and Next Functions
function nextCard () {
   if (cardNextButton.classList.contains('disabled')) { 
     // Do nothing
     return false;
   } else {
     currentSlide++;
     theChecker();
   }
  }
function prevCard () {
   if (cardPrevButton.classList.contains('disabled')) { 
      // Do nothing
      return false;
    } else {
      currentSlide--;
      theChecker();
    }
}
theChecker();
// Create The Checker Function : 
function theChecker() {
   // Remove Active class from every slide
   removeAllActive();
   // Set Active Class in the current Slide
   cardslides[currentSlide].classList.add('active');
  // Set Active Class in the current bullets Item
  bullets[currentSlide].classList.add('active');

  // Check if Current Side is The first 
  if (currentSlide === 0){
   // Add Disabled Class on Previous Button
   cardPrevButton.classList.add('disabled');
  } else {
   // Remove Disabled
   cardPrevButton.classList.remove('disabled');
  }
    // Check if Current Side is The last
    if (currentSlide === cardCount -1) {
      // Add Disabled Class on Next Button
      cardNextButton.classList.add('disabled');
     } else {
      // Remove Disabled
      cardNextButton.classList.remove('disabled');
     }
}
// Remove All Active Class
function removeAllActive(){
   // Loop through slides
   cardslides.forEach(function(slide){
      // Remove Active
   slide.classList.remove('active');
   });
 // loop through bullets 
 bullets.forEach(function (bullet){
  bullet.classList.remove('active');
 });
};