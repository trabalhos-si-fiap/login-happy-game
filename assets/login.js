const formularioLogin = document.querySelector('#form_login');
const emailLogin = document.querySelector('#txt_email_login');
const senhaLogin = document.querySelector('#txt_senha_usuario')






const novaSenha_ = document.querySelector('#form_nova_senha_enviada')


novaSenha_.addEventListener("submit", (e) => {
    e.preventDefault();  
    alert('Senha alterada!')
    redirecionador('login')

})

formularioLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    checkFormularioLogin();
})

function checkEmailLogin(){
    const emailLoginValue = emailLogin.value;

    if (emailLoginValue === '') {
        errorInput(emailLogin, 'Digite seu email')
    }else{
        const formItem = emailLogin.parentElement;
        formItem.classList = 'campo campo__login'
    }
}

function checkSenhaLogin() {
    const senhaLoginValue = senhaLogin.value;

    if (senhaLoginValue === '') {
        errorInput(senhaLogin, 'Senha obrigatoria')
    }else{
        const formItem = senhaLogin.parentElement;
        formItem.classList = 'campo campo__login'
    }

}

function checkFormularioLogin() {
    checkEmailLogin();
    checkSenhaLogin();

    const formItems = formularioLogin.querySelectorAll(".campo");

    const ehValido= [...formItems].every((item) => {
        return item.className === "campo campo__login"
    });

    if(ehValido === true){
        alert('Você entrou :)')
        location.reload();
    }

}

function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('span')

    textMessage.innerText = message;

    formItem.className = "campo campo__login erro"

}



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

