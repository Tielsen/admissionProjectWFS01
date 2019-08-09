var email = '';
function Alerta() {
    email = document.getElementById('inp').value;
    var test = email.indexOf('@');
    var test2 = email.indexOf('.');
    //var vali =  /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    //if (vali.test(email)) {

    if ((test != -1) && (test2 > test)) {
        alert("O email "+ email +" foi enviado");
        document.getElementById("bv").innerHTML = "Bem vindo "+ email;
        document.getElementById("butt").style.display = "none";
        document.getElementById("inp").style.display = 'none';  
    } 
    else {
        alert("Email invalido");
    }
    
}