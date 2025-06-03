


function enviarParaLink(link){
    window.location.href = link;
}


const imagens = document.querySelectorAll('.hero-img');
let index = 0;

function trocarImagem() {
  imagens.forEach(imagem => {
    imagem.classList.remove('activeCityImg'); /* Remove a classe active de todas as imagens */
  });
  imagens[index].classList.add('activeCityImg'); /* Adiciona a classe active à imagem atual */
  index = (index + 1) % imagens.length; /* Atualiza o índice para a próxima imagem */
}

trocarImagem();
setInterval(trocarImagem, 3000); /* Chama a função trocarImagem a cada 3 segundos */