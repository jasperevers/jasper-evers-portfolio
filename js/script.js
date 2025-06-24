// Active nav link op scroll
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav ul li a');

function onScroll() {
    let index = sections.length;
    while (--index && window.scrollY + 120 < sections[index].offsetTop) {
    }
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

onScroll();
window.addEventListener('scroll', onScroll);

// Section fade in on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, {threshold: 0.1});
sections.forEach(section => observer.observe(section));

// Light/dark mode toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});