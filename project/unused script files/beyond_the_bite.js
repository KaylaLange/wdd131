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


// create an array of carousel items (testimonials)
const testimonials = [
    {
        name: "Alyssa Moore",
        home: "Cannon Beach, Oregon",
        testimonial: "As an avid foodie with a serious case of wanderlust, Beyond the Bite has become my go-to resource for discovering unique culinary destinations. Their website is like a treasure trove, overflowing with information about the most incredible places to experience food as culture.",
        image: "images/alyssa_moore_copy.webp"    //optional image
    },
    {
        name: "Sage Conner",
        home: "Steamboat Springs, Colorado",
        testimonial: "Beyond the Bite has completely transformed how I plan my travels.  They've opened my eyes to the world of culinary exploration, and I can't wait to use their recommendations to embark on my own delicious adventures!",
        image: "images/sage_conner.webp"
    },
    {
        name: "Florence Walker",
        home: "Asheville, North Carolina",
        testimonial: "I'm a creature of habit. When it comes to food, I tend to stick to what I know. But Beyond the Bite has become my gateway to a world of exciting culinary possibilities. Browsing their website is like taking a virtual world tour, each article a window into a unique and mouthwatering destination.",
        image: "images/florence_walker.webp"
    },
    {
        name: "Duncan Miller",
        home: "Portsmouth, New Hampshire",
        testimonial: "Beyond the Bite has ignited a passion in me to explore new cuisines, both at home and abroad. Their website serves as my inspiration board, a treasure trove of knowledge waiting to be discovered.  With every article I read, my culinary horizons expand, and I can't wait to see where the next delicious adventure takes me!",
        image: "images/duncan_miller.webp"
    },
    {
        name: "Sophia Rodriguez",
        home: "Flagstaff, Arizona",
        testimonial: "What I love most is their focus on the unexpected.  Beyond the Bite doesn't just showcase Michelin-starred restaurants (though those sound amazing too!). They delve into the heart of a place, highlighting local cuisine, culture, and landscapes.",
        image: "images/sophia_rodriguez.webp"
    },
    // maybe add one more
]

const carouselItems = document.querySelectorAll('.carousel_item');

testimonials.forEach((testimonial, index) => {
    carouselItems[index].innerHTML = `
    <p class="testimonial_text">"${testimonial.testimonial}"</p>
    <div class="testimonial_info">
        <span class="testimonial_name">${testimonial.name}</span> -
        <span class="testimonial_home">${testimonial.home}</span>
    </div>
    <img src="${testimonial.image}" alt="Image description for ${testimonial.name}'s testimonial">
    `;
});


let currentItemIndex = 0; //Initialize with the first item

//Function to show the current item
function showCurrentItem() {
    carouselItems.forEach((item, index) => {
        if (index === currentItemIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Event listener for the previous arrow
document.querySelector('.carousel_control_prev').addEventListener('click', function() {
    currentItemIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
    showCurrentItem();
});

// Event listener for the next arrow
document.querySelector('.carousel_control_next').addEventListener('click', function() {
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    showCurrentItem();
});

// Initial display
showCurrentItem();


