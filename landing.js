// Tracking number to child mapping
const trackingNumbers = {
    'SAMTSIRHCDNUMROT1': 'tormund',
    'SAMTSIRHCALLEUL1': 'luella',
    'SAMTSIRHCARODASI1': 'isadora'  // Optional for Isadora
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createSnowfall();
    setupTrackingForm();
});

// Create snowfall effect
function createSnowfall() {
    const snowContainer = document.getElementById('snowContainer');
    const snowflakes = ['❄', '❅', '❆'];
    const numberOfFlakes = 50;

    for (let i = 0; i < numberOfFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        snowContainer.appendChild(snowflake);
    }
}

// Setup tracking form
function setupTrackingForm() {
    const form = document.getElementById('trackingForm');
    const input = document.getElementById('trackingNumber');
    const errorMessage = document.getElementById('errorMessage');

    // Convert input to uppercase as user types
    input.addEventListener('input', function() {
        this.value = this.value.toUpperCase();
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const trackingNumber = input.value.trim().toUpperCase();

        // Validate tracking number
        if (trackingNumbers[trackingNumber]) {
            // Valid tracking number - redirect to tracker page
            const childName = trackingNumbers[trackingNumber];
            window.location.href = `tracker.html?tracking=${encodeURIComponent(trackingNumber)}`;
        } else {
            // Invalid tracking number
            showError('Oops! That tracking number doesn\'t match our records. Please check and try again! 🎅');
        }
    });
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';

    // Add shake animation
    const input = document.getElementById('trackingNumber');
    input.classList.add('shake');
    setTimeout(() => {
        input.classList.remove('shake');
    }, 500);
}
