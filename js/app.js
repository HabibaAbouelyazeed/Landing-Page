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

const navBarList = document.getElementById("navbar__list"); //store the ul in a var
const sections = document.querySelectorAll("section");



let options = {
    rootMargin: '0px',
    threshold: 0.6
};
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function scrollToSection(place){
    place.scrollIntoView({'behavior':'smooth'});
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

var listFragment = new DocumentFragment();

sections.forEach(function createNavIteam(section){
    var listItem = document.createElement('li'); //<li></li>
    var link = document.createElement('a');     //<a></a>
    var nodeText = section.getAttribute('data-nav');
    link.setAttribute('data-nav',nodeText);
    link.style.color = 'red';
    link.style.margin = '0px 10px';
    link.style.padding ='0px 10px';
    link.innerText = nodeText; //add content to <a></a>
    link.style.cursor = 'pointer';

    link.addEventListener('click',() => {scrollToSection(section)});

    listItem.appendChild(link);
    //console.log(listItem.innerHTML);
    listFragment.appendChild(listItem);
});
navBarList.appendChild(listFragment);

//console.log(navBarList.innerHTML);


//set active links for active classes
function setActiveLink(navItems,item){
    navItems.forEach((navLink) => {
        navLink.classList.remove('active-link');
        if(navLink.innerText == item.getAttribute('data-nav')){
            navLink.classList.add('active-link');
        }
    });
};

// Add class 'active' to section when near top of viewport

let observer = new IntersectionObserver((items)=>{
    items.forEach((item)=> {
        item.target.classList.remove('your-active-class');
        if(item.isIntersecting){
            item.target.classList.add('your-active-class');
            setActiveLink(navLinks,item.target);
        }        
    });
}, options);


sections.forEach((section) => { //set active-class for sections
    observer.observe(section);
});

const navLinks = document.querySelectorAll("a");


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


