const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avg_rating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      avg_rating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      avg_rating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      avg_rating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      avg_rating: 5.0
    }
];

const productSelect = document.getElementById("productSelect");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


// // 1️⃣ Initialize display element variable
// const reviewsDisplay = document.querySelector(".reviewCounter");

// // 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
// let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

// // 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
// if (numReviews !== 0) {
// 	reviewsDisplay.textContent = numReviews;
// } 

// // 4️⃣ increment the number of visits by one.
// numReviews++;

// // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
// localStorage.setItem("numReviews-ls", numReviews);

// // 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
