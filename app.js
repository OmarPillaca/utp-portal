// ---------- FUNCIONALIDAD VER/OCULTAR HORARIOS ----------
const toggleButtons = document.querySelectorAll('.btn-toggle');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const schedulesRow = document.getElementById(targetId);

        if (schedulesRow.style.display === 'table-row') {
            schedulesRow.style.display = 'none';
            button.textContent = 'Ver horarios';
            button.classList.remove('active');
        } else {
            schedulesRow.style.display = 'table-row';
            button.textContent = 'Ocultar horarios';
            button.classList.add('active');
        }
    });
});