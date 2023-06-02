function paginloginBR(){
    window.location = "loginBR.html";
}

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }


// sitema de horas da saldaçao

let saldacao = document.getElementById("saldacao");
let hours = new Date().getHours();


if (hours < 12) {
    console.log("bom dia")
}else if (hours < 18) {
    document.getElementById("saldacao").innerHTML="Boa tarde"; 
}else {
    document.getElementById("saldacao").innerHTML="Boa noite"
}