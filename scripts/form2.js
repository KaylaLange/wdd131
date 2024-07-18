// 1️⃣ Initialize display element variable
const reviewsDisplay = document.querySelector(".reviewCounter");

// 2️⃣ Get the stored VALUE for the numReview-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews !== 0) {
	reviewsDisplay.textContent = numReviews;
} 

function incrementReviews() {
// 4️⃣ increment the number of reviews by one.
numReviews++;

// 5️⃣ store the new review total into localStorage, key=numReviews-ls
localStorage.setItem("numReviews-ls", numReviews);

reviewsDisplay.textContent = numReviews;
}

const reviewButton = document.querySelector(".reviewButton");
reviewButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    incrementReviews();
});

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
