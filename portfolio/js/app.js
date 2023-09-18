const ElementoBtn = document.querySelectorAll('.ElementoBtn');

ElementoBtn.forEach(btn => btn.addEventListener('click', filtroBtn))

function filtroBtn() {
  
  let categoriaBtn = this.dataset.categoria
  let queMudaFix = (document.querySelectorAll('.tudo'))
  let queMudaVar = (document.querySelector('#' + this.dataset.categoria))

  switch(categoriaBtn){
    case "Habilidades":
      resetaTUDO();
      queMudaVar.classList.remove("close")
      queMudaVar.classList.add("open")
      console.log(queMudaVar)

      break;
    case "Experiência":
      resetaTUDO();
      queMudaVar.classList.remove("close")
      queMudaVar.classList.add("open")
      console.log(queMudaVar)

      break;
    case "Formações":
      resetaTUDO();
      queMudaVar.classList.remove("close")
      queMudaVar.classList.add("open")
      console.log(queMudaVar)
      break;
  }

  function resetaTUDO(){
    queMudaFix.forEach(x => {
      x.classList.remove("open")
      x.classList.add("close")
    })
  }
}

function Seemore() {
  var texto = document.getElementById('text1')
  var subtextinho = document.getElementById('textinho')
  var qualtexto = texto.classList[0]
  switch(qualtexto){
    case "texto1":
      texto.classList.remove("texto1")
      texto.classList.add("texto2")
      textinho.classList.remove("text2")
      textinho.classList.add("text1")
      texto.innerHTML = "Indisponível"
      break;
    case "texto2":
    texto.classList.remove("texto2")
    texto.classList.add("texto1")
    textinho.classList.remove("text1")
    textinho.classList.add("text2")
    texto.innerHTML = "Veja Mais"
    break;
  }
}

