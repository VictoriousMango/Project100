// Selecting cards and details elements
const cards = document.querySelectorAll('.card');
const cardIndex = document.querySelectorAll('.cardIndex');
const prevBtns = document.querySelectorAll('.prevBtn');
const nextBtns = document.querySelectorAll('.nextBtn');
const detailsTitle = document.getElementById('detailsTitle');
const detailsText = document.getElementById('detailsText');
const glowCircle = document.querySelector('.glow-circle');

// Store the details information for each card
const cardDetails = {
    'Deep Learning 100': 'Master the fundamentals of deep learning with this comprehensive content.',
    'Guided Wave Communication': 'Explore the principles of guided wave communication systems.',
    'Python 100': 'Learn Python programming from scratch with this beginner-friendly content.',
    "Interview Preparation" : "Prepare for your next interview with our comprehensive content.",
};

// Function to change active card
function changeActiveCard(direction) {
    let activeCard = document.querySelector('.card.active');
    let activeCardIndex = document.querySelector('.cardIndex.active');
    let newActiveCard;
    let newActiveCardIndex;

    if (direction === 'next') {
        // Move to the next card, or loop to the first card if at the last
        newActiveCard = activeCard.nextElementSibling || cards[0];
        newActiveCardIndex = activeCardIndex.nextElementSibling || cardIndex[0];
    } else {
        // Move to the previous card, or loop to the last card if at the first
        newActiveCard = activeCard.previousElementSibling || cards[cards.length - 1];
        newActiveCardIndex = activeCardIndex.previousElementSibling || cardIndex[cardIndex.length - 1];
    }

    // Remove active class from the current card and add it to the new card
    activeCard.classList.remove('active');
    newActiveCard.classList.add('active');
    activeCardIndex.classList.remove('active');
    newActiveCardIndex.classList.add('active');

    // Update details section
    const cardTitle = newActiveCard.dataset.title;
    detailsTitle.textContent = cardTitle;
    detailsText.textContent = cardDetails[cardTitle];
}

// Add event listeners to Previous and Next buttons
prevBtns.forEach(button => {
    button.addEventListener('click', () => changeActiveCard('prev'));
});

nextBtns.forEach(button => {
    button.addEventListener('click', () => changeActiveCard('next'));
});
