// Toggle project details visibility
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function () {
        const details = this.querySelector('.project-details');
        if (details.classList.contains('visible')) {
            details.classList.remove('visible');
        } else {
            details.classList.add('visible');
        }
    });
});

// Cursor trail effect
let lastTrailTime = 0;

document.addEventListener('mousemove', function (e) {
    const now = Date.now();

    // Throttle to once every 50ms
    if (now - lastTrailTime < 50) return;
    lastTrailTime = now;

    // Skip 50% of events randomly
    if (Math.random() > 0.5) return;

    const trail = document.createElement('div');

    // Randomize star type (4-point or 5-point)
    const starTypes = ['four-point', 'five-point'];
    const randomStar = starTypes[Math.floor(Math.random() * starTypes.length)];
    trail.className = `trail ${randomStar}`;

    // Random size between 10px and 30px
    const size = Math.random() * 20 + 10;
    trail.style.width = `${size}px`;
    trail.style.height = `${size}px`;

    // Random rotation between 0 and 360 degrees
    const rotation = Math.random() * 360;
    trail.style.transform = `rotate(${rotation}deg)`;

    // Randomize color
    const colors = ['#FF7E79', '#4FD1C5', '#FFE066'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    trail.style.backgroundColor = randomColor;

    // Position the trail at the cursor's location
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    document.body.appendChild(trail);

    // Remove the trail after animation
    setTimeout(() => {
        trail.remove();
    }, 1000); // Match the fade-out duration
});

// Function to handle scroll and check visibility of sections
function handleScroll() {
    const sections = document.querySelectorAll('.fade-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

// Trigger initial visibility check
handleScroll();

// Toggle navigation menu on mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Dynamically calculate and set the height for smooth expansion
    if (navLinks.classList.contains('active')) {
        navLinks.style.height = `${navLinks.scrollHeight}px`;
    } else {
        navLinks.style.height = '0';
    }
});

// Ensure correct navigation menu state on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.height = 'auto'; // Reset height for larger screens
        navLinks.classList.remove('active');
    } else if (!navLinks.classList.contains('active')) {
        navLinks.style.height = '0'; // Collapse for smaller screens
    }
});

// Add toggle functionality to each list item with a "toggle-title"
document.querySelectorAll('.toggle-title').forEach((title) => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        if (content.classList.contains('visible')) {
            content.classList.remove('visible'); // Hide the content
        } else {
            content.classList.add('visible'); // Show the content
        }
    });
});
