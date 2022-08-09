var todasDicas = []
class Dicas{
    titulo;
    linguagem;
    categoria;
    descricao;

    constructor(titulo, linguagem, categoria, descricao){
        this.titulo = titulo;
        this.linguagem = linguagem;
        this.categoria = categoria;
        this.descricao = descricao;
    }
}
contTotais=0;
contFront=0;
contBack=0;
contFull=0;
contSoft=0;
function clickSave(){
    let titulo = document.getElementById("title")
    let linguagem = document.getElementById("lenguage")
    let categoria = document.getElementById("slct")
    let descricao = document.getElementById("describe")
    let divCards = document.getElementById("cards")
    let video = document.getElementById("video")
//----------------------------------------------------------------------------------------------
//Criando os cards com as informações preenchidas no formulário
    const card = document.createElement("div")
    card.classList.add('card'+contTotais);
    const dica= new Dicas(titulo.value, linguagem.value,categoria.value, descricao.value)
    todasDicas.push(dica)
    // for (let i = 0; i < todasDicas.length; i++) {
    //     const element = array[index];
  
    // }
    card.innerHTML += `<h4>${dica.titulo}</h4>`
    card.innerHTML += `Linguagem/Skill: ${dica.linguagem}<br>`
    card.innerHTML += `Categoria: ${dica.categoria}<br>`
    card.innerHTML += dica.descricao+"<br>"
//----------------------------------------------------------------------------------------------
//Adicionando o contador nos cards de contador
    if (dica.categoria == "FrontEnd"){
        contFront++
        document.getElementById("front").innerHTML = "FrontEnd "+contFront
    }else if(dica.categoria == "BackEnd"){
        contBack++
        document.getElementById("back").innerHTML = "BackEnd "+contBack
    }else if(dica.categoria == "FullStack"){
        contFull++
        document.getElementById("full").innerHTML = "FullStack "+contFull
    }else if(dica.categoria == "SoftSkills"){
        contSoft++
        document.getElementById("soft").innerHTML = "SoftSkills "+contSoft
    }
//----------------------------------------------------------------------------------------------
    divCards.append(card)
    console.log(dica)
    console.log(todasDicas)
//----------------------------------------------------------------------------------------------
//Adicionando botão de remover dentro do card
    var btn = document.createElement('BUTTON');
    var lblBtn = document.createTextNode("Remover Dica");
    btn.appendChild(lblBtn);
    card.append(btn)
    btn.onclick = function(){
        var querExcluir = window.confirm("Deseja mesmo Excluir essa dica? ")
        if (querExcluir == true){
            contTotais--
            document.getElementById("total").innerHTML = "Total "+contTotais
            if(dica.categoria == "FrontEnd"){
                contFront--
                document.getElementById("front").innerHTML = "FrontEnd "+contFront
            }else if(dica.categoria == "BackEnd"){
                contBack--
                document.getElementById("back").innerHTML = "BackEnd "+contBack
            }else if(dica.categoria == "FullStack"){
                contFull--
                document.getElementById("full").innerHTML = "FullStack "+contFull
            }else if(dica.categoria == "SoftSkills"){
                contSoft--
                document.getElementById("soft").innerHTML = "SoftSkills "+contSoft
            }
            console.log(divCards.children)
            card.remove()
            todasDicas.splice(contTotais-1,1)
            console.log(todasDicas)
            alert("Dica removida com sucesso")
        }
    }
//----------------------------------------------------------------------------------------------
//Adicionando botão de editar dentro do card
    var btn2 = document.createElement('BUTTON');
    var lblBtn2 = document.createTextNode("Editar Dica");
    btn2.appendChild(lblBtn2);
    card.append(btn2)
//----------------------------------------------------------------------------------------------
//Adicionando botão de vídeo dentro do card
    var btn3 = document.createElement('BUTTON');
    var lblBtn3 = document.createTextNode("Vídeo");
    btn3.appendChild(lblBtn3);
    card.append(btn3)
    btn3.onclick = function(){
        window.open(video.value)
    }
//----------------------------------------------------------------------------------------------
    contTotais++
    document.getElementById("total").innerHTML = "Total "+contTotais
    // alert("Dica Salva com sucesso!")
}
//----------------------------------------------------------------------------------------------
//botão de limpar formulário
function limparFormulario(){
    parent.document.getElementById("form").reset();
}