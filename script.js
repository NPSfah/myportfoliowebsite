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
