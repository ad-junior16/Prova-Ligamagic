

document.getElementById('inc').addEventListener('click', function(){
    adicionarUm()
})

document.getElementById('dec').addEventListener('click', function(){
    subtrairUm()
})



function adicionarUm() {
    var input = document.getElementById('inp');
    var valorAtual = parseInt(input.value, 10) || 0;
    input.value = valorAtual + 1;
  }


function subtrairUm() {
    var input = document.getElementById('inp');
    var valorAtual = parseInt(input.value, 10) || 0;
    
    if (valorAtual > 0) {
        input.value = valorAtual - 1;
      }
  }  