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
