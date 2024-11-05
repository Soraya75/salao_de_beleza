document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        // Fechar outros itens
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== header.nextElementSibling) {
                content.style.display = 'none';
            }
        });

        // Alternar a exibição do conteúdo clicado
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
