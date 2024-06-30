
const form = document.getElementById("form");
const numeroa =  document.getElementById("Primeiro nome");
const numerob =  document.getElementById("Segundo nome");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkInputNumeroA
})

function checkInputNumeroA(){
    const numeroaValue = numeroa.value

    if(numeroavalue > numerob){
        errorInput(numeroa, "O primeiro numero tem que ser menor que o segundo ")
    }
    else{
        const formItem = username.parentElement;
        formItem.classlist = "form-content"
    }
}


function errorInput (input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = massage;

    formItem.className = "form-content error"
}