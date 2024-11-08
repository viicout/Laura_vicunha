document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        const secondLayout = document.getElementById('layout2');
        const triggerPoint = secondLayout.offsetTop - header.offsetHeight;

        if (window.scrollY >= triggerPoint) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
