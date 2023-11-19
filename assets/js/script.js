'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);


/**
 * button effect
 */

var ableToClick = true;

function buttonClick() {
  if (!ableToClick) return;
  ableToClick = false;

  let splash = document.getElementById("splash");

  // Reset splash properties
  splash.style.transitionDuration = "0s";
  splash.style.width = "0";
  splash.style.height = "0";
  splash.style.opacity = "1";

  // Trigger a reflow
  splash.offsetHeight;

  // Apply animation properties
  splash.style.transitionDuration = "0.5s";
  splash.style.width = "150%"; // Adjust width based on your button size and shape
  splash.style.height = "150%"; // Adjust height based on your button size and shape
  splash.style.opacity = "0";

  // Enable clicking after animation completes
  setTimeout(function () {
      ableToClick = true;
      splash.style.transitionDuration = "0s"; // Reset transition duration for the next click
  }, 500);
}

/**
 * refresh btn
 */
window.onload = function () {
  var btn = document.getElementById('my-btn');

  btn.onclick = function (event) {
      event.preventDefault(); // Prevent the default behavior of the button click

      btn.children[0].classList.add('spin-animation');

      setTimeout(function () {
          btn.children[0].classList.remove('spin-animation');

          // Delay the reload to allow the animation to complete
          setTimeout(function () {
              location.reload();
          }, 500);
      }, 500);
  }
}


async function buttonClick() { 
  // const user = sessionStorage.getItem('userId')
  try { 
    // await fetchSaved()
    await fetch('https://6uedf2x5re.execute-api.us-east-1.amazonaws.com/deploy')
    .then((response) => {
        if (!response.ok) {
          return "Network was not ok";
        }
        return response.json();
      })
      .catch((error) => {
        return "Network was not ok";
      });
 
    
  } catch (error) { 
    console.error('Error fetching data:', error); 
  } 
} 