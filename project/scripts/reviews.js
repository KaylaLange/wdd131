const form = document.querySelector('form');
const popup = document.getElementById('popup')

// Initialize the submission count from localStorage (default to 0)
let submissionCount = parseInt(localStorage.getItem('submissionCount')) || 0;

// Update the form submission count
function updateSubmissionCount() {
    submissionCount++;
    localStorage.setItem('submissionCount', submissionCount);
}

// Add a listener for the form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    updateSubmissionCount();
    console.log(`Form submitted! Total submissions: ${submissionCount}`);

    form.reset();

    popup.textContent = `Thank you for your review! You've submitted ${submissionCount} review(s)!`
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
        }, 3000);
    });

