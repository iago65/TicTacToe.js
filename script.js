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
let gameResult = document.getElementById('gameResult')
startButton.addEventListener('click', initializeGame)


function initializeGame(){
  const namePlayer1 = player1.value + " - X"
  const namePlayer2 = player2.value + " - 0"
  turnPlayer = namePlayer1

  let currentTurn = document.getElementById('turnPlayer')
  currentTurn.innerText = turnPlayer
  
  vBoard = ['', '', '', '', '', '', '', '', '']

  //? Converter valor da jogada tipo 1.2 para um valor único na posição do array
  function convertPlay(simbol, playValue){
    let convertArrayBoard = playValue.split('.')
    let linha = parseInt(convertArrayBoard[0])
    let coluna = parseInt(convertArrayBoard[1])
    let indice = linha * 3 + coluna
    vBoard[indice] = simbol
  }

  function restartGame(){
    turnPlayer = namePlayer1

    let currentTurn = document.getElementById('turnPlayer')
    currentTurn.innerText = turnPlayer

    currentTurn.classList.add('hidden')
    
    vBoard = ['', '', '', '', '', '', '', '', '']
    for(i = 0; i < vBoard.length; i++){
      boardRegions[i].innerText = ''
      boardRegions[i].classList.remove('winning', 'X', 'O')
    }
    currentTurn.classList.remove('hidden')
    initializeGame()
  }

  function checkWin() {
    const namePlayer1 = player1.value + " - X"
    const namePlayer2 = player2.value + " - 0"

    const winningRows = [[0, 1, 2], [3, 4, 5] , [6, 7 , 8]]
    const winningColumns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
    const winningDiagonal = [[0, 4, 8], [2, 4, 6]]

    //? Para verificação das linhas
    for (i = 0; i < winningRows.length; i++ ){
      if(vBoard[winningRows[i][0]] === 'X' && vBoard[winningRows[i][1]] === 'X' && vBoard[winningRows[i][2]] === 'X'){
        boardRegions[winningRows[i][0]].classList.add('winning') 
        boardRegions[winningRows[i][1]].classList.add('winning') 
        boardRegions[winningRows[i][2]].classList.add('winning') 
        gameResult.innerText = 'O jogador ' + namePlayer1 + ' ganhou!'
        gameResult.classList.remove('hidden')

        setTimeout(function() {
          const confirmRestart = confirm('O jogo acabou, deseja reiniciar?')
          if (confirmRestart){restartGame()}
        }, 1750)
      } else if (vBoard[winningRows[i][0]] === 'O' && vBoard[winningRows[i][1]] === 'O' && vBoard[winningRows[i][2]] === 'O'){
        boardRegions[winningRows[i][0]].classList.add('winning')
        boardRegions[winningRows[i][1]].classList.add('winning')   
        boardRegions[winningRows[i][2]].classList.add('winning') 
        gameResult.innerText = 'O jogador ' + namePlayer2 + ' ganhou!'
        gameResult.classList.remove('hidden')

        setTimeout(function() {
          const confirmRestart = confirm('O jogo acabou, deseja reiniciar?')
          if (confirmRestart){restartGame()}
        }, 1750)
      }
    }

    //? Para verificação das colunas
    for(i = 0; i < winningColumns.length; i++){
      if(vBoard[winningColumns[i][0]] === 'X' && vBoard[winningColumns[i][1]] === 'X' && vBoard[winningColumns[i][2]] === 'X'){
        boardRegions[winningColumns[i][0]].classList.add('winning')
        boardRegions[winningColumns[i][1]].classList.add('winning')
        boardRegions[winningColumns[i][2]].classList.add('winning')

        gameResult.innerText = 'O jogador ' + namePlayer1 + ' ganhou!'
        gameResult.classList.remove('hidden')

        setTimeout(function() {
          const confirmRestart = confirm('O jogo acabou, deseja reiniciar?')
          if (confirmRestart){restartGame()}
        }, 1750)
      } else if(vBoard[winningColumns[i][0]] === 'O' && vBoard[winningColumns[i][1]] === 'O' && vBoard[winningColumns[i][2]] === 'O'){
        boardRegions[winningColumns[i][0]].classList.add('winning')
        boardRegions[winningColumns[i][1]].classList.add('winning')
        boardRegions[winningColumns[i][2]].classList.add('winning')

        gameResult.innerText = 'O jogador ' + namePlayer2 + ' ganhou!'
        gameResult.classList.remove('hidden')

        setTimeout(function() {
          const confirmRestart = confirm('O jogo acabou, deseja reiniciar?')
          if (confirmRestart){restartGame()}
        }, 1750)
      }
    }

    //? Para verificação das diagonais
    for(i = 0; i < winningDiagonal.length; i++){
      if(vBoard[winningDiagonal[i][0]] === 'X' && vBoard[winningDiagonal[i][1]] === 'X' && vBoard[winningDiagonal[i][2]] === 'X'){
        boardRegions[winningDiagonal[i][0]].classList.add('winning')
        boardRegions[winningDiagonal[i][1]].classList.add('winning')
        boardRegions[winningDiagonal[i][2]].classList.add('winning') 

        gameResult.innerText = 'O jogador ' + namePlayer1 + ' ganhou!'
        gameResult.classList.remove('hidden')

        setTimeout(function() {
          const confirmRestart = confirm('O jogo acabou, deseja reiniciar?')
          if (confirmRestart){restartGame()}
        }, 1750)
      }else if(vBoard[winningDiagonal[i][0]] === 'O' && vBoard[winningDiagonal[i][1]] === 'O' &&    vBoard[winningDiagonal[i][2]] === 'O'){
          boardRegions[winningDiagonal[i][0]].classList.add('winning')
          boardRegions[winningDiagonal[i][1]].classList.add('winning')
          boardRegions[winningDiagonal[i][2]].classList.add('winning') 

          gameResult.innerText = 'O jogador ' + namePlayer2 + ' ganhou!'
          gameResult.classList.remove('hidden')

          setTimeout(function() {
            const confirmRestart = confirm('O jogo acabou, deseja reiniciar?')
            if (confirmRestart){restartGame()}
          }, 1750)
      }
    }

    //? Empate
    for(i = 0; i < vBoard.length; i++){
      let contador 
      if(vBoard[i] !== ''){}
    }
  }

  document.querySelectorAll('.cursor-pointer').forEach(function (boardRegions){
    boardRegions.addEventListener('click', function(){
      if (turnPlayer === namePlayer1){
        const play = boardRegions.dataset.region
        boardRegions.textContent = 'X'
        convertPlay('X', play)
        checkWin()
        turnPlayer = namePlayer2
        currentTurn.innerText = turnPlayer
      } else if (turnPlayer === namePlayer2){
          const play = boardRegions.dataset.region
          boardRegions.textContent = 'O'
          convertPlay('O', play)
          checkWin()
          turnPlayer = namePlayer1
          currentTurn.innerText = turnPlayer
      }
    })
  })
}