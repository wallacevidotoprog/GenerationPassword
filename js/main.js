let sliderElement = document.querySelector("#slider");
let buttomElement = document.querySelector("#buttom");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPass = document.querySelector("#container-password")

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';
sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = function(){
    sizePassword.innerHTML=this.value;
}
 
function generationPassord(){
    let pass="";
    for(let i=0;i < sliderElement.value ;++i ){
        pass+= charset.charAt(Math.floor(Math.random()*charset.length))
    }
    password.innerHTML = pass;
    containerPass.classList.remove("hide");
    novaSenha = pass;
}

function copyPass(){
    navigator.clipboard.writeText(novaSenha);
}