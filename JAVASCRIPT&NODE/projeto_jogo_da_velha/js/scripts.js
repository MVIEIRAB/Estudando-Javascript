let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let button = document.querySelectorAll('#button-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer

// CONTADOR JOGADAS
let player1 = 0
let player2 = 0

// COMPUTANDO JOGADAS
for (let i = 0; i < boxes.length; i++) {

    let el

    boxes[i].addEventListener('click', function () {
        // verifica jogada
        let el = checkEl(player1, player2)

        // verifica se ja tem X ou 0
        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true)

            this.appendChild(cloneEl)

            // computar jogada
            if (player1 == player2) {
                player1++

                if (secondPlayer == 'ia-player') {
                    //FUNÇÃO A SER EXECUTADA
                    computerPlay()
                    player2++

                }

            } else {
                player2++
            }
        }
        checaVitoria()
    })
}
// EVENTO PARA SABER SE É PLAYERS 2 OU IA 
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {

        secondPlayer = button[i].getAttribute('id')

        for (let j = 0; j < button.length; j++) {
            button[j].style.display = 'none'
        }

        setTimeout(() => {
            let container = document.querySelector('#container')
            let scoreboard = document.querySelector('#scoreboard-container')

            container.classList.remove('hide')
            scoreboard.classList.remove('hide')
        }, 500);

        computerPlay()
    })
}
// VER QUEM VAI JOGAR
function checkEl(player1, player2) {
    if (player1 == player2) {
        el = x
    } else {
        el = o
    }
    return el
}
// VER QUEM VAI GANHAR
function checaVitoria() {
    let b1 = document.getElementById('block-1')
    let b2 = document.getElementById('block-2')
    let b3 = document.getElementById('block-3')
    let b4 = document.getElementById('block-4')
    let b5 = document.getElementById('block-5')
    let b6 = document.getElementById('block-6')
    let b7 = document.getElementById('block-7')
    let b8 = document.getElementById('block-8')
    let b9 = document.getElementById('block-9')

    //HORIZONTAL
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declareWinner('x')
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declareWinner('o')
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declareWinner('x')
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o')
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }

    // VERTICAL
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x')
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o')
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x')
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o')
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }

    //DIAGONAL
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }

    if (b7.childNodes.length > 0 && b5.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if (b7Child == 'x' && b5Child == 'x' && b3Child == 'x') {
            declareWinner('x')
        } else if (b7Child == 'o' && b5Child == 'o' && b3Child == 'o') {
            declareWinner('o')
        }
    }

    //DEU VELHA
    let count = 0
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            count++
        }
    }

    if (count == 9) {
        declareWinner()
    }

}
// LIMPA O JOGO ATUALIZA PLACAR E IMPRIME A MENSAGEM
function declareWinner(winner) {
    let scoreBoardX = document.querySelector('#scoreboard-1')
    let scoreBoardY = document.querySelector('#scoreboard-2')
    let msg = ''

    if (winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1
        msg = 'O JOGADOR 1 VENCEU'
    } else if (winner == 'o') {
        scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1
        msg = 'O JOGADOR 2 VENCEU'
    } else {
        msg = 'DEU VELHA'
    }

    // EXIBE MSG
    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    // ESCONDE MSG
    setTimeout(() => {
        messageContainer.classList.add('hide')
    }, 1500)

    // ZERA A TABELA
    player1 = 0
    player2 = 0

    // REMOVE X E 0
    let boxesToRemove = document.querySelectorAll('.box div')
    for (let i = 0; boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }

}
// EXECUTAR A LOGICA DO CPU
function computerPlay() {
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0

    for (let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5)

        // SO PRENCHER SE TIVER VAZIO O FILHO
        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO)
                counter++
                break
            }
            // CHECAGEM QUANTAS ESTAO PREENCHIDAS
        } else {
            filled++
        }
    }

    if (counter == 0 && filled < 9) {
        computerPlay()
    }
}