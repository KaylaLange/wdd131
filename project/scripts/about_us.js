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