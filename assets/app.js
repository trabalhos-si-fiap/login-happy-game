
const form = document.querySelector('#form');
const nome = document.querySelector("#txt_nome");
const dataNascimento = document.querySelector('#txt_idade');
const email = document.querySelector('#txt_email');
const senha = document.querySelector('#txt_senha');
const termosDeUso = document.querySelector('#termos_de_uso');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkFormulario();
    
})

function checkNome(){
    const nomeValue = nome.value;
    if (nomeValue === '') {
        errorInput(nome, 'Nome obrigatório')
    }else{
        const formItem = nome.parentElement;
        formItem.classList = 'campo'
    }
}

function checkEmail() {
    const emailValue = email.value;


    if(emailValue === ''){
        errorInput(email, 'Email é obrigatório')
    }else{
        const formItem = email.parentElement;
        formItem.classList = 'campo'
    }
}

function checkDataDeNascimento(){
    const dataDeNascimentoValue = dataNascimento.value;

    if (dataDeNascimentoValue === '') {
        errorInput(dataNascimento, 'Preencha a data de nascimento')
    }else{
        const formItem = dataNascimento.parentElement;
        formItem.classList = 'campo'
    }

}

function checkSenha() {
    const senhaValue = senha.value

    if (senhaValue === '') {
        errorInput(senha, 'Digite uma senha')
    }else if(senhaValue.length < 8){
        errorInput(senha,'A senha deve ter no minimo 8 caracteres')
    }else{
        const formItem = senha.parentElement;
        formItem.classList = 'campo'
    }
}


function checkFormulario() {
    checkNome();
    checkEmail();
    checkDataDeNascimento();
    checkSenha();

    const termosChecked = termosDeUso.checked;
    const formItems = form.querySelectorAll(".campo");

    const ehValido= [...formItems].every((item) => {
        return item.className === "campo"
    });

    if(ehValido && termosChecked === true){
        
        prompt(`Digite os fatores que foram enviados ao email: ${email.value}`)
        alert('Parabéns, cadastro realizado com sucesso!!')
        location.reload();
        
    }else{
        alert('Preencha todos os campos e aceite os termos de uso para proseguir')
    }
}


function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('span')

    textMessage.innerText = message;

    formItem.className = "campo erro"

}