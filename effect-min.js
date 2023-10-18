

// copied//
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");


// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}


// Automatic Slideshow - change image every 4 seconds (by w3school)
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 4000);    
// }


// loading screen
// check if page is loaded 
//if(document.readyState === "complete") {
  // make loading screen go away
  // document.getElementById('loading').style.display = none;
//}


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*https://www.youtube.com/watch?v=aRE2Zge1rUI */
/* ____________________________initialize swiper _________________________________*/
// let swiper;
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
    // el: '.swiper-scrollbar',
  // },
});
// ____________________ fade in upon scrolling into view
let elementsArray = document.querySelectorAll(".tile");
// console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn(); // do it once on refresh to make sure it is visible

// ____________________________ modal popup close _________________
// _____ n=number of news you want to put i slideshows. Sorry I am a noob in javascript :(
// Get the modal
var modal21 = document.getElementById('f1');
var modal22 = document.getElementById('f2');
var modal23 = document.getElementById('f3');
var modal24 = document.getElementById('f4');
var modal25 = document.getElementById('f5');
var modal26 = document.getElementById('f6');
var modal27 = document.getElementById('f7');
var modal28 = document.getElementById('f8');
var modal29 = document.getElementById('f9');
var modal30 = document.getElementById('f10');

var modal31 = document.getElementById('f11');
var modal32 = document.getElementById('f12');
var modal33 = document.getElementById('f13');
var modal34 = document.getElementById('f14');
var modal35 = document.getElementById('f15');
var modal36 = document.getElementById('f16');
var modal37 = document.getElementById('f17');
var modal38 = document.getElementById('f18');
var modal39 = document.getElementById('f19');


// ____________________________ for gallery_____________________________________

var modal41 = document.getElementById('g1');
var modal42 = document.getElementById('g2');
var modal43 = document.getElementById('g3');
var modal44 = document.getElementById('g4');
var modal45 = document.getElementById('g5');
var modal46 = document.getElementById('g6');
var modal47 = document.getElementById('g7');
var modal48 = document.getElementById('g8');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
// ____________________________ for gallery_____________________________________
  if (event.target == modal21) {
    modal21.style.display = "none";
  }
  if (event.target == modal22) {
    modal22.style.display = "none";
  }
  if (event.target == modal23) {
    modal23.style.display = "none";
  }
  if (event.target == modal24) {
    modal24.style.display = "none";
  }
  if (event.target == modal25) {
    modal25.style.display = "none";
  }
  if (event.target == modal26) {
    modal26.style.display = "none";
  }
  if (event.target == modal27) {
    modal27.style.display = "none";
  }
  if (event.target == modal28) {
    modal28.style.display = "none";
  }
  if (event.target == modal29) {
    modal29.style.display = "none";
  }
  if (event.target == modal30) {
    modal30.style.display = "none";
  }
  if (event.target == modal31) {
    modal31.style.display = "none";
  }
  if (event.target == modal32) {
    modal32.style.display = "none";
  }
  if (event.target == modal33) {
    modal33.style.display = "none";
  }
  if (event.target == modal34) {
    modal34.style.display = "none";
  }
  if (event.target == modal35) {
    modal35.style.display = "none";
  }
  if (event.target == modal36) {
    modal36.style.display = "none";
  }
  if (event.target == modal37) {
    modal37.style.display = "none";
  }
  if (event.target == modal38) {
    modal38.style.display = "none";
  }
  if (event.target == modal39) {
    modal39.style.display = "none";
  }
/* _____________ Gallery _________________________*/
  if (event.target == modal41) {
    modal41.style.display = "none";
  }
  if (event.target == modal42) {
    modal42.style.display = "none";
  }
  if (event.target == modal43) {
    modal43.style.display = "none";
  }
  if (event.target == modal44) {
    modal44.style.display = "none";
  }
  if (event.target == modal45) {
    modal45.style.display = "none";
  }
  if (event.target == modal46) {
    modal46.style.display = "none";
  }
  if (event.target == modal47) {
    modal47.style.display = "none";
  }
  if (event.target == modal48) {
    modal48.style.display = "none";
  }







}

