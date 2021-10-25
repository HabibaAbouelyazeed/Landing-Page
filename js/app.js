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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


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
const navBarList = document.getElementById("navbar__list"); //store the ul in a var
const sections = document.querySelectorAll("section");
var listFragment = new DocumentFragment();
//const navElements = 
sections.forEach(function createNavIteam(section){
    var listItem = document.createElement('li'); //<li></li>
    var link = document.createElement('a');     //<a></a>
    var nodeText = section.getAttribute('data-nav');
    link.setAttribute('data-nav',nodeText);
    link.style.color = 'red';
    link.style.margin = '0px 20px'
    link.innerHTML = nodeText; //add content to <a></a>
    listItem.appendChild(link);
    //console.log(listItem.innerHTML);
    listFragment.appendChild(listItem);
});
navBarList.appendChild(listFragment);
console.log(navBarList.innerHTML);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


