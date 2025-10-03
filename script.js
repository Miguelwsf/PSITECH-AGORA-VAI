
document.addEventListener('DOMContentLoaded', function() {
    console.log(' PSITECH - Frontend carregado!');

   
    
    // Botão "Ver Curso" na HOME
    const botoesVerCurso = document.querySelectorAll('.btn-ver-curso-python');
    botoesVerCurso.forEach(botao => {
        botao.addEventListener('click', function() {
            // Vai para a página de cursos geral
            window.location.href = 'detalhes-curso.html?curso=python';
        });
    });


    // Botão "Comprar Agora" na PÁGINA DE DETALHES
    const btnComprarCurso = document.getElementById('btn-comprar-curso');
    if (btnComprarCurso) {
        btnComprarCurso.addEventListener('click', function() {
            window.location.href = 'pagamento.html';
        });
    }

    // ===== FUNCIONALIDADES DO QUIZ =====
    const botoesNivel = document.querySelectorAll('.btn-nivel');
    botoesNivel.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesNivel.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ===== FUNCIONALIDADES DE PAGAMENTO =====
    const opcoesPagamento = document.querySelectorAll('.opcao-pagamento');
    opcoesPagamento.forEach(opcao => {
        opcao.addEventListener('click', function() {
            opcoesPagamento.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});