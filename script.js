// --- FUNÇÃO 1: SCROLL SUAVE PARA LINKS INTERNOS ---

// Seleciona todos os links do menu que começam com '#'
document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previne o comportamento padrão de pular para a âncora
        e.preventDefault();

        // Pega o destino do link (ex: '#projetos') e encontra a seção correspondente
        const target = document.querySelector(this.getAttribute('href'));

        // Rola a página suavemente até o topo da seção
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// --- FUNÇÃO 2: BOTÃO "VOLTAR AO TOPO" ---

// Pega o botão pelo seu ID
const backToTopButton = document.getElementById("backToTopBtn");

// Adiciona um "ouvinte" que verifica a posição da rolagem da página
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Se o usuário rolou mais de 100 pixels para baixo da página
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Mostra o botão
        backToTopButton.style.display = "block";
    } else {
        // Esconde o botão
        backToTopButton.style.display = "none";
    }
}

// Quando o botão é clicado, rola a página de volta para o topo suavemente
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});