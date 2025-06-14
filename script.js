document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        alert(`You clicked on ${link.textContent}`);
    });
});