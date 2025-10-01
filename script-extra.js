// Efeitos de clique e feedback visual em botões
function animateButton(btn) {
    btn.classList.add('active-press');
    setTimeout(() => btn.classList.remove('active-press'), 180);
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button, .btn-ver-curso, .btn-ver-detalhes, .btn-comprar, .btn-comprar-agora, .btn-login, .btn-download, .btn-finalizar, .btn-quiz, .btn-continuar, .btn-ver-certificado, .btn-revisar, .btn-comecar, .btn-proximo, .btn-anterior, .btn-proxima').forEach(btn => {
        btn.addEventListener('mousedown', function() { animateButton(btn); });
    });
});
// Suavizar rolagem para âncoras
const allLinks = document.querySelectorAll('a[href^="#"]');
allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
