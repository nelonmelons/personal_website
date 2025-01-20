// Toggle showing/hiding a project's details when card is clicked
function showProjectDetail(detailId) {
    const detailDiv = document.getElementById(detailId);
    if (!detailDiv) return;
    // Toggle display between 'none' and 'block'
    if (detailDiv.style.display === "block") {
      detailDiv.style.display = "none";
    } else {
      detailDiv.style.display = "block";
    }
}

// Add event listeners for project cards
function initializeProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const detail = card.querySelector('.project-detail');
            if (detail) {
                detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
}

// Add hover effect for social media icons
function initializeSocialMediaIcons() {
    const icons = document.querySelectorAll('.social-media img');
    icons.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
}

// Initialize functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initializeProjectCards();
    initializeSocialMediaIcons();
});
