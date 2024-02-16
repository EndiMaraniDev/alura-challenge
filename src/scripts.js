let textArea = document.getElementById('main-text');
let alertText = document.querySelector('.alert-text');
let result = document.querySelector('.result-text');
let asideImg = document.querySelector('.container-aside-img');
let asideTitle = document.querySelector('.container-title');
let asideMessage = document.querySelector('.container-message');
let copyButton = document.querySelector('.btn-copy');

function hideAndShowContent() {
    asideImg.classList.add('hidden');
    asideTitle.classList.add('hidden');
    asideMessage.classList.add('hidden');
    result.classList.remove('hidden');
    copyButton.classList.remove('hidden');
}

function encrypt() {
     mainText = textArea.value;
    
    if (!/^[a-z\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]*$/.test(textArea.value)) {
        alertText.classList.add('alert-text-error')
    } else {
        let encryptTxt = mainText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        alertText.classList.remove('alert-text-error')
        result.innerHTML = encryptTxt;
        hideAndShowContent();
        textArea.value = '';
    }
}

function decrypt() {
    mainText = textArea.value;
    
    if (!/^[a-z\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]*$/.test(textArea.value)) {
        alertText.classList.add('alert-text-error')
    } else {
        let decryptTxt = mainText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        alertText.classList.remove('alert-text-error')
        result.innerHTML = decryptTxt;
        hideAndShowContent();
        textArea.value = '';
    }
}

function copyText() {
    let resultText = document.querySelector(".result-text").innerText;

    navigator.clipboard.writeText(resultText)
        .then(() => {
            alert("Texto copiado!");
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

// *DARK MODE*
const switchMode = document.getElementById('switchMode');
let body = document.querySelector('.container');
let encryptButton = document.querySelector('.btn-encrypt');
let decryptButton = document.querySelector('.btn-decrypt');
let aside = document.querySelector('.container-aside')
let footer = document.querySelector('.container-footer');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

switchMode.addEventListener('click', () => {
    switchMode.classList.toggle('dark');
    body.classList.toggle('dark');
    textArea.classList.toggle('dark');
    alertText.classList.toggle('dark');
    encryptButton.classList.toggle('dark');
    decryptButton.classList.toggle('dark');
    copyButton.classList.toggle('dark');
    aside.classList.toggle('dark')
    asideMessage.classList.toggle('dark');
    asideTitle.classList.toggle('dark');
    result.classList.toggle('dark');
    footer.classList.toggle('dark');
    sun.classList.toggle('dark');
    moon.classList.toggle('dark');
});