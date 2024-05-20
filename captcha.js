document.addEventListener("DOMContentLoaded", function() {
    const listaCaracteres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','1','2','3','4','5','6','7','8','9','0'];
    let contador = 0;
    const captchaText = document.getElementById('captchaText');
    const captchaForm = document.getElementById('captchaForm');

    const captcha = Array.from({length: 5}, () => listaCaracteres[Math.floor(Math.random() * listaCaracteres.length)]).join('');
    captchaText.textContent = captcha;

    captchaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const usuario = document.getElementById('captchaInput').value;
        if (usuario === captcha) {
            alert('Correto!');
        } else {
            contador++;
            if (contador === 5) {
                alert('Excesso de tentativas erradas, tente novamente mais tarde.');
            } else {
                alert('Incorreto! Tente novamente.');
            }
        }
    });
});
