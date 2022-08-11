var todasDicas = []
class Dicas{
    titulo;
    linguagem;
    categoria;
    descricao;

    constructor(titulo, linguagem, categoria, descricao, video, id){
        this.titulo = titulo;
        this.linguagem = linguagem;
        this.categoria = categoria;
        this.descricao = descricao;
        this.id = id;
        this.video = video;
    }
}

function clickSave(){
    let titulo = document.getElementById("title")
    let linguagem = document.getElementById("lenguage")
    let categoria = document.getElementById("slct")
    let descricao = document.getElementById("describe")
    let divCards = document.getElementById("cards")
    let video = document.getElementById("video")
//----------------------------------------------------------------------------------------------
//Criando os cards com as informações preenchidas no formulário
    // const card = document.createElement("div")
    // card.classList.add('card'+contTotais);
    const dica= new Dicas(titulo.value, linguagem.value,categoria.value, descricao.value, video.value)
    //Alojando os dados do LocalStorage
    if (localStorage.meuArr){
        todasDicas = JSON.parse(localStorage.getItem('meuArr'))
    }
    todasDicas.push(dica)
    localStorage.meuArr = JSON.stringify(todasDicas)
    divCards.innerHTML = ""
    //Pegando os dados pelo LocalStorage
    if (localStorage.meuArr){
        todasDicas = JSON.parse(localStorage.getItem('meuArr'))
    }
    contTotais=0;
    contFront=0;
    contBack=0;
    contFull=0;
    contSoft=0;
    for (let i in todasDicas) {
        const card = document.createElement("div")
        card.classList.add('card');
        // if (i == todasDicas.length-1){
            card.innerHTML += `<h4>${todasDicas[i].titulo}</h4>`
            card.innerHTML += `Linguagem/Skill: ${todasDicas[i].linguagem}<br>`
            card.innerHTML += `Categoria: ${todasDicas[i].categoria}<br>`
            card.innerHTML += todasDicas[i].descricao+"<br>"
            todasDicas[i].id = i
            // todasDicas[i].video = video.value
            divCards.append(card)
        //----------------------------------------------------------------------------------------------
        //Adicionando o contador nos cards de contador
            contTotais++
            document.getElementById("total").innerHTML = "Total "+contTotais
            if (todasDicas[i].categoria == "FrontEnd"){
                contFront++
                document.getElementById("front").innerHTML = "FrontEnd "+contFront
            }else if(todasDicas[i].categoria == "BackEnd"){
                contBack++
                document.getElementById("back").innerHTML = "BackEnd "+contBack
            }else if(todasDicas[i].categoria == "FullStack"){
                contFull++
                document.getElementById("full").innerHTML = "FullStack "+contFull
            }else if(todasDicas[i].categoria == "SoftSkills"){
                contSoft++
                document.getElementById("soft").innerHTML = "SoftSkills "+contSoft
            }
        //----------------------------------------------------------------------------------------------
            
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
                    if(todasDicas[i].categoria == "FrontEnd"){
                        contFront--
                        document.getElementById("front").innerHTML = "FrontEnd "+contFront
                    }else if(todasDicas[i].categoria == "BackEnd"){
                        contBack--
                        document.getElementById("back").innerHTML = "BackEnd "+contBack
                    }else if(todasDicas[i].categoria == "FullStack"){
                        contFull--
                        document.getElementById("full").innerHTML = "FullStack "+contFull
                    }else if(todasDicas[i].categoria == "SoftSkills"){
                        contSoft--
                        document.getElementById("soft").innerHTML = "SoftSkills "+contSoft
                    }
                    card.remove()
                    function removerPorId2(array, id) {
                        return array.filter(function(el) { 
                          return el.id !== id; 
                        });
                      }
                      todasDicas = removerPorId2(todasDicas,i)
                      localStorage.meuArr = JSON.stringify(todasDicas)
                      console.log(todasDicas)
                    console.log(i)
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
            btn2.onclick = function(){
                
            }
        //----------------------------------------------------------------------------------------------
        //Adicionando botão de vídeo dentro do card
            if(todasDicas[i].video != ""){
                var btn3 = document.createElement('BUTTON');
                var lblBtn3 = document.createTextNode("Vídeo");
                btn3.appendChild(lblBtn3);
                card.append(btn3)
                btn3.onclick = function(){
                    window.open(todasDicas[i].video)
                }

            }
        //----------------------------------------------------------------------------------------------
            
            // alert("Dica Salva com sucesso!")
            
        // }
  
    }
    
}
//----------------------------------------------------------------------------------------------
//botão de limpar formulário
function limparFormulario(){
    parent.document.getElementById("form").reset();
}