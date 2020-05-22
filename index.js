const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("form button")
const divElement = document.querySelector(".tarefas")

buttonElement.onclick = ev => {
  ev.preventDefault();

  if(inputElement.value){
    //Adicionando o conteúdo na tela
    const textElement = document.createElement("span")
    textElement.innerHTML = inputElement.value

    //Criando o botão na tela
    const btnElement = document.createElement("button")
    btnElement.innerHTML = 'Remover'


    const liElement = document.createElement("li")
    liElement.appendChild(textElement)
    liElement.appendChild(btnElement)

    const ulElement = document.createElement("ul")
    ulElement.appendChild(liElement)

/*     var divStyle = {
      marginTop: "10px",
      marginLeft: "10px",
      padding: "5px",
      backgroundColor: "#cad2c5",
      width: "350px",
      height: "100px",
      borderRadius: "15%"
    } */

    //Criando o card
    const divEl = document.createElement("div")
    divEl.appendChild(ulElement)

    //Percorendo os estilos e os adicionando na div
    /* for(style in divStyle){ divEl.style[style] = divStyle[style] } */

    divElement.appendChild(divEl)
    inputElement.value = "";

  }
}