function abrirPagina(idDaAba, texto) {
    const aba = document.getElementById(idDaAba);
    const corParaAplicar = window.getComputedStyle(aba).backgroundColor;
    
    const paginaPrincipal = document.getElementById('visualizador-paginas');
    const containerTexto = document.getElementById('texto-pagina');
    
    paginaPrincipal.style.backgroundColor = corParaAplicar;
    containerTexto.innerText = texto;

    // Contraste para o texto quando for amarelo
    if (idDaAba === 'aba-amarela') {
        containerTexto.style.color = "black";
    } else {
        containerTexto.style.color = "white";
    }
}