

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

/* _____________________initialize swiper2 _________________*/
// let swiper;
const swiper2 = new Swiper('.swiper2', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true
  // },

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
// ____________________________ modal popup close _________________
// _____ n=number of news you want to put i slideshows. Sorry I am a noob in javascript :(
// Get the modal
var modal1 = document.getElementById('n1');
var modal2 = document.getElementById('n2');
var modal3 = document.getElementById('n3');
var modal4 = document.getElementById('n4');
var modal5 = document.getElementById('n5');
var modal6 = document.getElementById('n6');
var modal7 = document.getElementById('n7');
var modal8 = document.getElementById('n8');
var modal9 = document.getElementById('n9');
var modal10 = document.getElementById('n10');
var modal11 = document.getElementById('n11');
var modal12 = document.getElementById('n12');
// ____________________________ for gallery_____________________________________





// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
// ____________________________ for gallery_____________________________________
}















/* ________________exchange image on hover for research________________________ */
const image1 = document.getElementById('my-image1');
const image2 = document.getElementById('my-image2');
const image3 = document.getElementById('my-image3');
const image4 = document.getElementById('my-image4');
const image5 = document.getElementById('my-image5');

/* ________________exchange image on hover for publication________________________ */
// __________________ image part _________________
const pimage1 = document.getElementById('pubimage1');
const pimage2 = document.getElementById('pubimage2');
const pimage3 = document.getElementById('pubimage3');
const pimage4 = document.getElementById('pubimage4');
const pimage5 = document.getElementById('pubimage5');
const pimage6 = document.getElementById('pubimage6');
const pimage7 = document.getElementById('pubimage7');
const pimage8 = document.getElementById('pubimage8');
const pimage9 = document.getElementById('pubimage9');
const pimage10 = document.getElementById('pubimage10');
const pimage11 = document.getElementById('pubimage11');
const pimage12 = document.getElementById('pubimage12');
const pimage13 = document.getElementById('pubimage13');
const pimage14 = document.getElementById('pubimage14');
const pimage15 = document.getElementById('pubimage15');
const pimage16 = document.getElementById('pubimage16');
const pimage17 = document.getElementById('pubimage17');
const pimage18 = document.getElementById('pubimage18');
const pimage19 = document.getElementById('pubimage19');
const pimage20 = document.getElementById('pubimage20');
const pimage21 = document.getElementById('pubimage21');
const pimage22 = document.getElementById('pubimage22');
const pimage23 = document.getElementById('pubimage23');
const pimage24 = document.getElementById('pubimage24');
const pimage25 = document.getElementById('pubimage25');
const pimage26 = document.getElementById('pubimage26');
const pimage27 = document.getElementById('pubimage27');
const pimage28 = document.getElementById('pubimage28');
const pimage29 = document.getElementById('pubimage29');
const pimage30 = document.getElementById('pubimage30');
const pimage31 = document.getElementById('pubimage31');
const pimage32 = document.getElementById('pubimage32');
const pimage33 = document.getElementById('pubimage33');
const pimage34 = document.getElementById('pubimage34');
const pimage35 = document.getElementById('pubimage35');
const pimage36 = document.getElementById('pubimage36');
// __________________ text part _________________
const pp1 = document.getElementById('pp1');
const pp2 = document.getElementById('pp2');
const pp3 = document.getElementById('pp3');
const pp4 = document.getElementById('pp4');
const pp5 = document.getElementById('pp5');
const pp6 = document.getElementById('pp6');
const pp7 = document.getElementById('pp7');
const pp8 = document.getElementById('pp8');
const pp9 = document.getElementById('pp9');
const pp10 = document.getElementById('pp10');
const pp11 = document.getElementById('pp11');
const pp12 = document.getElementById('pp12');
const pp13 = document.getElementById('pp13');
const pp14 = document.getElementById('pp14');
const pp15 = document.getElementById('pp15');
const pp16 = document.getElementById('pp16');
const pp17 = document.getElementById('pp17');
const pp18 = document.getElementById('pp18');
const pp19 = document.getElementById('pp19');
const pp20 = document.getElementById('pp20');
const pp21 = document.getElementById('pp21');
const pp22 = document.getElementById('pp22');
const pp23 = document.getElementById('pp23');
const pp24 = document.getElementById('pp24');
const pp25 = document.getElementById('pp25');
const pp26 = document.getElementById('pp26');
const pp27 = document.getElementById('pp27');
const pp28 = document.getElementById('pp28');
const pp29 = document.getElementById('pp29');
const pp30 = document.getElementById('pp30');
const pp31 = document.getElementById('pp31');
const pp32 = document.getElementById('pp32');
const pp33 = document.getElementById('pp33');
const pp34 = document.getElementById('pp34');
const pp35 = document.getElementById('pp35');
const pp36 = document.getElementById('pp36');
// __________________ triggering Buttons (research focus/ publications)_________________
var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');
var r5 = document.getElementById('r5');


var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');
var p5 = document.getElementById('p5');
var p6 = document.getElementById('p6');
var p7 = document.getElementById('p7');
var p8 = document.getElementById('p8');
var p9 = document.getElementById('p9');
var p10 = document.getElementById('p10');
var p11 = document.getElementById('p11');
var p12 = document.getElementById('p12');
var p13 = document.getElementById('p13');
var p14 = document.getElementById('p14');
var p15 = document.getElementById('p15');
var p16 = document.getElementById('p16');
var p17 = document.getElementById('p17');
var p18 = document.getElementById('p18');
var p19 = document.getElementById('p19');
var p20 = document.getElementById('p20');
var p21 = document.getElementById('p21');
var p22 = document.getElementById('p22');
var p23 = document.getElementById('p23');
var p24 = document.getElementById('p24');
var p25 = document.getElementById('p25');
var p26 = document.getElementById('p26');
var p27 = document.getElementById('p27');
var p28 = document.getElementById('p28');
var p29 = document.getElementById('p29');
var p30 = document.getElementById('p30');
var p31 = document.getElementById('p31');
var p32 = document.getElementById('p32');
var p33 = document.getElementById('p33');
var p34 = document.getElementById('p34');
var p35 = document.getElementById('p35');
var p36 = document.getElementById('p36');





// var timeout
document.body.addEventListener("mouseover", function(event) {
  // clearTimeout(timeout)
  // timeout = setTimeout(function(){document.getElementById('stuff').style.opacity = 0.0;}, 3000);

  //Check if we are in the top area of the page. research focus part
  if(event.target == r1) {
    image1.style.display = 'block'
  }else{
    image1.style.display = 'none'
  }
  if(event.target == r2) {
    image2.style.display = 'block'
  }else{
    image2.style.display = 'none'
  }
  if(event.target == r3) {
    image3.style.display = 'block'
  }else{
    image3.style.display = 'none'
  }
  if(event.target == r4) {
    image4.style.display = 'block'
  }else{
    image4.style.display = 'none'
  }
  if(event.target == r5) {
    image5.style.display= 'block'
  }else{
    image5.style.display = 'none'
  }

// publication part



 if(event.target == p1) {
  pimage1.style.display = 'block'
  pp1.style.display = 'block'

 }else{
  pimage1.style.display = 'none'
   pp1.style.display = 'none'
 }
if(event.target == p2) {
  pimage2.style.display = 'block'
  pp2.style.display = 'block'
}else{
  pimage2.style.display = 'none'
  pp2.style.display = 'none'
}
if(event.target == p3) {
  pimage3.style.display = 'block'
  pp3.style.display = 'block'
}else{
  pimage3.style.display = 'none'
  pp3.style.display = 'none'
}
if(event.target == p4) {
  pimage4.style.display = 'block'
  pp4.style.display = 'block'
}else{
  pimage4.style.display = 'none'
  pp4.style.display = 'none'
}
if(event.target == p5) {
  pimage5.style.display= 'block'
  pp5.style.display = 'block'
}else{
  pimage5.style.display = 'none'
  pp5.style.display = 'none'
}
if(event.target == p6) {
  pimage6.style.display = 'block'
  pp6.style.display = 'block'
}else{
  pimage6.style.display = 'none'
  pp6.style.display = 'none'
}
if(event.target == p7) {
  pimage7.style.display = 'block'
  pp7.style.display = 'block'
}else{
  pimage7.style.display = 'none'
  pp7.style.display = 'none'
}
if(event.target == p8) {
  pimage8.style.display = 'block'
  pp8.style.display = 'block'
}else{
  pimage8.style.display = 'none'
  pp8.style.display = 'none'
}
if(event.target == p9) {
  pimage9.style.display = 'block'
  pp9.style.display = 'block'
}else{
  pimage9.style.display = 'none'
  pp9.style.display = 'none'
}
if(event.target == p10) {
  pimage10.style.display= 'block'
  pp10.style.display = 'block'
}else{
  pimage10.style.display = 'none'
  pp10.style.display = 'none'
}
if(event.target == p11) {
  pimage11.style.display = 'block'
  pp11.style.display = 'block'

 }else{
  pimage11.style.display = 'none'
  pp11.style.display = 'none'
 }
if(event.target == p12) {
  pimage12.style.display = 'block'
  pp12.style.display = 'block'
}else{
  pimage12.style.display = 'none'
  pp12.style.display = 'none'
}
if(event.target == p13) {
  pimage13.style.display = 'block'
  pp13.style.display = 'block'
}else{
  pimage13.style.display = 'none'
  pp13.style.display = 'none'
}
if(event.target == p14) {
  pimage14.style.display = 'block'
  pp14.style.display = 'block'
}else{
  pimage14.style.display = 'none'
  pp14.style.display = 'none'
}
if(event.target == p15) {
  pimage15.style.display= 'block'
  pp15.style.display = 'block'
}else{
  pimage15.style.display = 'none'
  pp15.style.display = 'none'
}
if(event.target == p16) {
  pimage16.style.display = 'block'
  pp16.style.display = 'block'
}else{
  pimage16.style.display = 'none'
  pp16.style.display = 'none'
}
if(event.target == p17) {
  pimage17.style.display = 'block'
  pp17.style.display = 'block'
}else{
  pimage17.style.display = 'none'
  pp17.style.display = 'none'
}
if(event.target == p18) {
  pimage18.style.display = 'block'
  pp18.style.display = 'block'
}else{
  pimage18.style.display = 'none'
  pp18.style.display = 'none'
}
if(event.target == p19) {
  pimage19.style.display = 'block'
  pp19.style.display = 'block'
}else{
  pimage19.style.display = 'none'
  pp19.style.display = 'none'
}
if(event.target == p20) {
  pimage20.style.display= 'block'
  pp20.style.display = 'block'
}else{
  pimage20.style.display = 'none'
  pp20.style.display = 'none'
}

if(event.target == p21) {
  pimage21.style.display= 'block'
  pp21.style.display = 'block'
}else{
  pimage21.style.display = 'none'
  pp21.style.display = 'none'
}
if(event.target == p22) {
  pimage22.style.display= 'block'
  pp22.style.display = 'block'
}else{
  pimage22.style.display = 'none'
  pp22.style.display = 'none'
}
if(event.target == p23) {
  pimage23.style.display= 'block'
  pp23.style.display = 'block'
}else{
  pimage23.style.display = 'none'
  pp23.style.display = 'none'
}
if(event.target == p24) {
  pimage24.style.display= 'block'
  pp24.style.display = 'block'
}else{
  pimage24.style.display = 'none'
  pp24.style.display = 'none'
}
if(event.target == p25) {
  pimage25.style.display= 'block'
  pp25.style.display = 'block'
}else{
  pimage25.style.display = 'none'
  pp25.style.display = 'none'
}

if(event.target == p26) {
  pimage26.style.display= 'block'
  pp26.style.display = 'block'
}else{
  pimage26.style.display = 'none'
  pp26.style.display = 'none'
}
if(event.target == p27) {
  pimage27.style.display= 'block'
  pp27.style.display = 'block'
}else{
  pimage27.style.display = 'none'
  pp27.style.display = 'none'
}
if(event.target == p28) {
  pimage28.style.display= 'block'
  pp28.style.display = 'block'
}else{
  pimage28.style.display = 'none'
  pp28.style.display = 'none'
}
if(event.target == p29) {
  pimage29.style.display= 'block'
  pp29.style.display = 'block'
}else{
  pimage29.style.display = 'none'
  pp29.style.display = 'none'
}

if(event.target == p30) {
  pimage30.style.display= 'block'
  pp30.style.display = 'block'
}else{
  pimage30.style.display = 'none'
  pp30.style.display = 'none'
}
if(event.target == p31) {
  pimage31.style.display= 'block'
  pp31.style.display = 'block'
}else{
  pimage31.style.display = 'none'
  pp31.style.display = 'none'
}
if(event.target == p32) {
  pimage32.style.display= 'block'
  pp32.style.display = 'block'
}else{
  pimage32.style.display = 'none'
  pp32.style.display = 'none'
}
if(event.target == p33) {
  pimage33.style.display= 'block'
  pp33.style.display = 'block'
}else{
  pimage33.style.display = 'none'
  pp33.style.display = 'none'
}
if(event.target == p34) {
  pimage34.style.display= 'block'
  pp34.style.display = 'block'
}else{
  pimage34.style.display = 'none'
  pp34.style.display = 'none'
}
if(event.target == p35) {
  pimage35.style.display= 'block'
  pp35.style.display = 'block'
}else{
  pimage35.style.display = 'none'
  pp35.style.display = 'none'
}
if(event.target == p36) {
  pimage36.style.display= 'block'
  pp36.style.display = 'block'
}else{
  pimage36.style.display = 'none'
  pp36.style.display = 'none'
}


});


// _______________________________ alternative-popup with delay
// var timer;
// $("#p1").on("mouseover", function() {
//   clearTimeout(timer);
// 	show();
// }).on("mouseleave", function() {
//   timer = setTimeout(
//   	hide
//   , 10000);
// });

// function show() {
//   $("#pp1").addClass("open");
//   $("#pubimage1").addClass("open");
// }
// function hide() {
//   $("#pp1").removeClass("open");
//   $("#pubimage1").removeClass("open");
// }
// ____________________ memberimage animation border
// let elementsArray = document.getElementsByClassName(name)

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

//___________________________________ slider pagination for publications____________________
document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");
  const count = document.getElementById("countPage");

  let currentPage = 0;// display latest publications first

  function showPage(pageNumber) {
    pages.forEach((page, index) => {
      if (index === pageNumber) {
        page.style.display = "block";
        page.classList.remove('animate')
        page.classList.add('animate');
      } else {
        page.style.display = "none";
      }
    });
  }

  function updateButtons() {
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === pages.length - 1;
    count.innerHTML = currentPage + 1;
  }

  prevButton.addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
      updateButtons();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
      updateButtons();
    }
  });

  showPage(currentPage);
  updateButtons();
});

// ____________________________create parallax effect  https://codepen.io/cgrkzlkn/pen/yLjzPmp
const parallax = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
let s_width = window.innerWidth;
// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  const rect = parallax.getBoundingClientRect();
  const rect2 = parallax2.getBoundingClientRect();



  // const x = rect.left + window.scrollX;
  const y = rect.top + window.scrollY;
  const y2 = rect2.top + window.scrollY;


  parallax.style.backgroundPositionY = (offset-y)*0.5+ "px";
  parallax2.style.backgroundPositionY = (offset-y2) * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});
/* add artificial scroll when loading page */
window.dispatchEvent(new CustomEvent('scroll'))

const button = document.getElementById("show-position");
const output = document.getElementById("output"); // checker
const displayPosition = () => {
  // Use getBoundingClientRect() to get the position of the element
  const rect = parallax.getBoundingClientRect();

  const x = rect.left + window.scrollX;
  const y = rect.top + window.scrollY;


  // Create a string with the position information
  let offset = window.pageYOffset;
  const position = `X: ${x} <br>Y: ${offset-y}`;

  // Display the position in the output element
  // output.innerHTML = position;
}

// Add an event listener to the button to call displayPosition on click
// button.addEventListener("click", displayPosition);

// Add an event listener to the window to call displayPosition on resize
window.addEventListener("resize", displayPosition);
