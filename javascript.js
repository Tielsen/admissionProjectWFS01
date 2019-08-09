var email = '';
function Alerta() {
    email = document.getElementById('inp').value; 
    vali =  /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    if (vali.test(email)) {
        alert("O email "+ email +" foi enviado");
        document.getElementById("bv").innerHTML = "Bem vindo "+ email;
        document.getElementById("butt").style.display = "none";
        document.getElementById("inp").style.display = 'none';  
    } 
    else {
        alert("Email invalido");
    }
    
}