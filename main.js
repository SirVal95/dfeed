// let btn = document.querySelector('.about');
// let for_about = document.querySelector('.for-about');
// let bot = document.querySelector('.bot')

// for_about.style.display = 'none'
// bot.addEventListener('click', () => {
//     for_about.style.display = 'none'
// })

// btn.addEventListener('click', () =>{
//     if(for_about.style.display === 'none'){
//         for_about.style.display = 'block';
//         setTimeout(() => for_about.classList.remove(".for-about"), 10000)
//     }
//     else {
//         for_about.style.display = 'none';
//     }
// })


window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a')
    

    setTimeout(() => {
        transition_el.classList.remove('is-active')
    }), 1000;
}


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};


// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};



// for our menu

const Dishes = document.querySelector('.dishes');
Dishes.style.display = "none"

const Drinks = document.querySelector('.drinks');
Drinks.style.display = 'none';

const Wine = document.querySelector('.wine');
Wine.style.display = 'none';

function appetizer() {
  let x = document.getElementById("appetizers");
  let y = document.getElementById("dishes");
  let z = document.getElementById("drinks");
  let a = document.getElementById("wine");
  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none"
      z.style.display = "none"
      a.style.display = "none"
  }
  else {
      x.style.display = "block"
  }
}
function dishes() {
  let x = document.getElementById("dishes");
  let y = document.getElementById("appetizers");
  let z = document.getElementById("drinks");
  let a = document.getElementById("wine");
  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none"
      a.style.display = "none"
      z.style.display = "none"
  }
  else {
      x.style.display = "block"
  }
}
function drinks() {
  let x = document.getElementById("drinks");
  let y = document.getElementById("dishes");
  let z = document.getElementById("appetizers");
  let a = document.getElementById("wine");
  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none"
      z.style.display = "none"
      a.style.display = "none"
  }
  else {
      x.style.display = "block"
  }
}
function wine() {
  let x = document.getElementById("wine");
  let y = document.getElementById("dishes");
  let z = document.getElementById("drinks");
  let a = document.getElementById("appetizers");
  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none"
      z.style.display = "none"
      a.style.display = "none"
  }
  else {
      x.style.display = "block"
  }
}



















ScrollReveal({
    reset: true,
    distance:'60px',
    delay: 50,
    duration: 1500
});

ScrollReveal().reveal('.for-about h1, .for-about h3, .for-about h4, .in-in-about2 .p1', { delay: 50, interval:100, origin: 'top' });
ScrollReveal().reveal('.testimonies, .in-in-about2 .img1', { delay: 50, interval:100, origin: 'bottom' });