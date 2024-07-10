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
})


document.addEventListener("DOMContentLoaded", function () {
    let reviewCounter = parseInt(localStorage.getItem("reviewCounter")) || 0;

    const form = document.querySelector(".review_form");
});

