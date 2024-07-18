const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const h1 = document.querySelector('h1') //uncomment this if I want the h1 element to disappear when menu is open

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
function toggleMenu() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    // h1.classList.toggle('show');
}

hambutton.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
    }
});

// For images on experiences page

function changeImage(imageSrc, title, description) {
    var largeImage =  document.getElementById('largeImage');
    var largeImageTitle = document.getElementById('large_image_title');
    var largeImageText = document.getElementById('large_image_text');

    largeImage.src = imageSrc;

    largeImageTitle.innerHTML = title;
    largeImageText.innerHTML = description;
}


// Grid image change to larger image
function changeImage(imageSrc, description) {
    document.getElementById('largeImage').src = imageSrc;
    document.getElementById('largeDescription').textContent = description;
}

//determining the height of the top section and apply it to the bottom
// for scroll effect
// const topSection = document.querySelector('.top_section');
// const topSectionHeight = topSection.clientHeight;

// const bottomSection = document.querySelector('.bottom_section');
// bottomSection.computedStyleMap.paddingTop = `${topSectionHeight}px`;


//smooth transition when user scrolls
// const bottomSection = document.querySelector('.bottom_section');

// window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;

//     //calculate threshold (adjust as needed)
//     const threshold = 0.2; //20% of the window height

//     if (scrollPosition > windowHeight * threshold) {
//         bottomSection.style.opacity = '0.8';
//     } else {
//         bottomSection.style.opacity = '0';
//     }
// });