/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
var sections2 = document.getElementsByTagName("section").length;
console.log(sections2)
function function1() {
    for (var i=0;i<sections2;i++){
      var ul = document.getElementById("navbar__list");
      var li = document.createElement("li");
     var  a= document.createElement("a");
  var n = i+1;
  ul.appendChild(a);
  a.setAttribute("href", "#section"+n);
  a.appendChild(document.createTextNode("\tsection"+n));

 a.setAttribute("id", n);
 

}



}
function1();
function responsiveNav (){
  var ul = document.getElementById("navbar__list");
  var li = document.createElement("li");
 var  a= document.createElement("a");
  ul.appendChild(a);
a.setAttribute("href", "javascript:void(0);");
a.setAttribute("class", "icon");
a.setAttribute("onclick", "myFunction()");
a.appendChild(li);
li.setAttribute("class","fa fa-bars");

}
// make navbar responsive
responsiveNav();
function myFunction() {
  var x = document.getElementById("navlist");
  if (x.className === "navlist") {
    x.className += " responsive";
  } else {
    x.className = "navlist";
  }
}




// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class from section
const removeActive = (section) => {
    section.classList.remove('section-active-class');
 ;
};
// adding the active class TO SECTION
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('section-active-class');
    
    };
};

//implementating the actual function

const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);

// Scroll to anchor ID using scrollTO event

const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();



// Set sections as active NAV LINK
const removeActivenav = (li) => {
  li.classList.remove('your-active-class');

};
// adding the active class TO NAV LINK
const addActivenav = (conditional, li) => {
    if(conditional){
        li.classList.add('your-active-class');
    
    };
};
onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;
  
    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
        scrollPosition <
          section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
      ) {
        var currentId = section.attributes.id.value;
        console.log(currentId)
        removeAllActiveNav();
        addActivenavClass(currentId);
      }
    });
  };
  
  var removeAllActiveNav = function () {
    document.querySelectorAll("nav a").forEach((el) => {
      el.classList.remove("your-active-class");
    });
  };
  
  var addActivenavClass = function (id) {
  //console.log(id);
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("your-active-class");
  };
// scroll to section
var li = document.createElement("li");
li.addEventListener("click", function() {
  var e = li.getAttribute("herf");
  let el = document.querySelector(e);
  console.log(el);
 el.scrollIntoView({ duration: 5000 });

  });