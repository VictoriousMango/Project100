// Get all card elements
const cards = document.querySelectorAll('.card');
const contentDisplay = document.getElementById('content-display');
const backButton = document.getElementById('back-btn');
const contentFrame = document.getElementById('content-frame');

// Event listener for card click to show content
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // Make content display visible
    contentDisplay.style.display = 'block';

    // Load corresponding content into iframe (you can have different HTML files)
    contentFrame.src = `./pages/content${index + 1}.html`;  // Assuming you have content1.html, content2.html, etc.
  });
});

// Event listener for the back button
backButton.addEventListener('click', () => {
  contentDisplay.style.display = 'none';
  contentFrame.src = '';  // Clear content
});
