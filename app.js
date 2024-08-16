function imgDisplay() {
    document.getElementById("vacio").style.display = "none";
    document.getElementById("show1").style.display = "flex";
    document.getElementById("show1").style.backgroundColor = "white";
    document.getElementById("show1").style.flexDirection = "column";
    document.getElementById("show1").style.justifyContent = "center";
    document.getElementById("show1").style.alignItems = "center";
  }

function limpiaCaja() {
    document.querySelector("#textoInsertado").value='';    
}
function limpiaCaja2() {
    document.querySelector("#textoCifrado").value='';    
}

function validateTextarea(input) {
    const tieneUppercase = /[A-Z]/;
    const tieneSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; 
    const hasUppercase = tieneUppercase.test(input);
    const hasSpecialChar = tieneSpecialChar.test(input);
    return hasUppercase || hasSpecialChar;
}


function encryptarTexto(texto) {
    const textoMapeo = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'		
    };
    return texto.split('').map(char => textoMapeo[char] || char).join('');
}

function desencryptarTexto(encryptadoTexto) {    
    const decifrarMapeo = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    const regex = new RegExp(Object.keys(decifrarMapeo).join('|'), 'g');
    return encryptadoTexto.replace(regex, match => decifrarMapeo[match]);  
    
}

function Cifrar() {  
    const cifrarTexto = document.getElementById('textoInsertado').value;
    if (validateTextarea(cifrarTexto) === false) {
        const textoEncriptado = encryptarTexto(cifrarTexto);
        document.getElementById('textoCifrado').value = textoEncriptado;    
        limpiaCaja();
        imgDisplay();
      } else {
        alert('Solo minusculas sin Caracteres Especiales');
      }   
}
function decifrar() {    
    const encryptadoTexto = document.getElementById('textoInsertado').value;
    const decrifradoTexto = desencryptarTexto(encryptadoTexto);
    document.getElementById('textoCifrado').value = decrifradoTexto;
    limpiaCaja();
    imgDisplay();
    
}
function copiarClipboard() {
    const textarea = document.getElementById('textoCifrado');
    const text = textarea.value;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Texto copiado al portapapeles');
            limpiaCaja2();
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

