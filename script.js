document.getElementById("imcForm").addEventListener("submit",function (e) {
e.preventDefault();

const peso = parseFloat(document.getElementById("peso").value);
const altura = parseFloat(document.getElementById("altura").value);

if (peso > 0 && altura >0) {
    const imc = (peso / (altura * altura)).toFixed(2);
    let mensagem;

if (imc < 18.5) {
    mensagem = 'seu IMC é ${imc}:VOCÊ ESTA ABAIXO DO PESO.';
    document.getElementById("resultado").style.color = "blue";
} else if (imc <24.9) {
    mensagem = 'Seu IMC é ${imc}:Peso normal.';
    document.getElementById("resultado").style.color = "green";
} else if  (imc <29.9) {
    mensagem = 'Seu IMC é ${imc}:Sobrepeso.';
    document.getElementById("resultado").style.color = "orange";
} else { 
    mensagem = 'Seu IMC é ${imc}:Obesidade.';
    document.getElementById("resultado").style.color = "red";
    }

    document.getElementById("resultado").textContent = mensagem;
    } else {
        alert("Por favor,insira valores validos !");
    }
});
