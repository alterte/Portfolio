function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-' + name);
    if (el) {
        el.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Retrigger fade-up animations
        el.querySelectorAll('.fade-up').forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; 
            el.style.animation = '';
        });
    }
    // Close mobile menu
    document.getElementById('nav-links').classList.remove('open');
}

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
});

function handleSubmit(e) {
    e.preventDefault();
    e.target.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
}