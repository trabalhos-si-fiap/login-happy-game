const formularioCodigoTrocarSenha_ = document.querySelector("#form_recuperar_senha")

formularioCodigoTrocarSenha_.addEventListener("submit", (e) => {
    e.preventDefault();  
    prompt('Digite o código enviado para o seu e-mail: ')
    alert('Código válido')
    redirecionador('nova_senha');
    
})

function redirecionador(pathName){


    // Obter a URL atual
    let currentUrl = new URL(window.location);

    // Modificar o caminho
    currentUrl.pathname = `/${pathName}.html`;

    // Opcional: Modificar parâmetros de consulta
    // currentUrl.searchParams.set('parametro', 'valor');

    // Redirecionar para a nova URL
    window.location.href = currentUrl.toString();
}
