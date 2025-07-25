// ## Tic-Tac-Toe / Jogo da Velha

// Construa um jogo tic-tac-toe, conhecido em português como jogo da velha, utilizando HTML, CSS e Javascript. Você pode desenvolver com liberdade, da forma que preferir, mas o jogo precisa atender aos seguintes requisitos:

// - Deve ser possível incluir os nomes dos dois jogadores;
// - O nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando;
// - Um tabuleiro deve ser mostrado na tela e ser atualizado quando o jogador clicar na região que ele quer marcar;
// - Quando um jogador clicar no tabuleiro deve ser marcado um “X” ou “O” de acordo com o jogador da vez e não deve ser possível clicar naquela região novamente;
// - Quando um jogador ganhar seu nome deve ser mostrado na tela e as regiões da vitória devem ser destacadas de alguma forma;
// - Em caso de empate, uma mensagem de empate deve ser mostrada na tela;
// - Deve ser possível reiniciar o jogo para jogar novamente.

const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const startButton = document.getElementById('start')
startButton.addEventListener('click', initializeGame)

function initializeGame(){
  const namePlayer1 = player1.value + " - X"
  const namePlayer2 = player2.value + " - 0"
  turnPlayer = namePlayer1

  let currentTurn = document.getElementById('turnPlayer')
  currentTurn.innerText = turnPlayer
  
  vBoard = ['', '', '', '', '', '', '', '', '']
  document.querySelectorAll('.cursor-pointer').forEach(function (boardRegions){
    boardRegions.addEventListener('click', function(){
      if (turnPlayer === namePlayer1){
        const play = boardRegions.dataset.region
        boardRegions.textContent = 'X'
      }
    })
  })
}