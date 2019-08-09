var email = '';
function Alerta() {
    email = document.getElementById('inp').value; 
    alert("O email "+ email +" foi enviado");

    document.getElementById("bv").innerHTML = "Bem vindo "+ email;
}