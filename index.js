const botaoAvancar = document.getElementById("avancar")
const botaoVoltar = document.getElementById("voltar")
const imagem = document.querySelector("#imagem")

const imagens = [
  "slide-1.png",
  "slide-2.jpeg",
  "slide-3.jpg",
  "slide-4.png",
  "slide-5.jpeg"
]

let indiceAtual = 0 // Indice atual da imagem

function avancarSlide() {
  if(indiceAtual >= imagens.length - 1){
    indiceAtual = -1 // volta para a primeira imagem
  }
  indiceAtual++

  return pegarImagem()
}


function voltarSlide() {
  if(indiceAtual <= 0){
    indiceAtual = imagens.length;
  }

  indiceAtual--

  return pegarImagem()
}


function pegarImagem() {
  return imagem.setAttribute("src", "images/" + imagens[indiceAtual])
}