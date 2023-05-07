const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById("copiar");
const btnBorrar = document.getElementById("borrar");

const input = document.querySelector(".texto-usuario");
const output = document.getElementById("mensaje-encriptado");
const encriptado = document.querySelector(".encriptado");
const noEncriptado = document.querySelector(".no-encriptado");
const txtCopiar = document.getElementById("copiar-mensaje");

const encriptar = () => {
    const input = document.querySelector(".texto-usuario").value.toLowerCase();
    let result = "";
    
    if (input !== "") {
        for (let i = 0; i < input.length; i++) {
            switch (input[i]) {
                case "e":
                    result += "enter";
                    break;
                case "i":
                    result += "imes";
                    break;
                case "a":
                    result += "ai";
                    break;
                case "o":
                    result += "ober";
                    break;
                case "u":
                    result += "ufat";
                    break;
                default:
                    result += input[i];
                    break;
            }
        }
        noEncriptado.style.display = "none";
        encriptado.style.display = "inline";
        output.innerHTML = result;
        btnBorrar.style.display = "inline";
    } else {
        alert("Introduce texto");
    }
};

const desencriptar = () => {
    const input = document.querySelector(".texto-usuario").value.toLowerCase();
    let result = "";
    
    if (input !== "") {
        for (let i = 0; i < input.length; i++) {
            if (input.substring(i, i + 5) === "enter") {
                result += "e";
                i += 4;
            } else if (input.substring(i, i + 4) === "imes") {
                result += "i";
                i += 3;
            } else if (input.substring(i, i + 2) === "ai") {
                result += "a";
                i += 1;
            } else if (input.substring(i, i + 4) === "ober") {
                result += "o";
                i += 3;
            } else if (input.substring(i, i + 4) === "ufat") {
                result += "u";
                i += 3;
            } else {
                result += input[i];
            }
        }
        noEncriptado.style.display = "none";
        encriptado.style.display = "inline";
        output.innerHTML = result;
        btnBorrar.style.display = "inline";
    } else {
        alert("Introduce texto");
    }
};

btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(output.textContent)
    .then(() => {
        console.log("Text copied to clipboard");
    })
    .catch((err) => {
        console.error("Error copying text: ", err);
    });
    txtCopiar.innerHTML = "Texto copiado al clipboard";
});


btnBorrar.addEventListener("click", () => {
    output.innerHTML = "";
    input.value = "";
    input.focus();
    noEncriptado.style.display = "inline";
    encriptado.style.display = "none";
    btnBorrar.style.display = "none";
    txtCopiar.innerHTML = "";
});

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);