const botaoLinkedin = document.querySelector(".btn-linkedin");

botaoLinkedin.addEventListener("click", function () {
    alert("Você será direcionado para o meu LinkedIn!");
});

// Efeito Máquina de Escrever para o Subtítulo
function efeitoDigitacao(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i); // Ajuste a velocidade alterando o valor 75
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const subtitulo = document.querySelector('.subtitulo');
  
  if (subtitulo) {
    efeitoDigitacao(subtitulo);
  }
});