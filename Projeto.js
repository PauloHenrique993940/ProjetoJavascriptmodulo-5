/* Projeto Módulo 5 */
alert("Escolha um número entre 0 e 100:");

/* código do jogo */
function checkGuess() {
    // Função para verificar a adivinhação do usuário
    const userGuess = document.getElementById('userGuess').value;
    const result = document.getElementById('result');
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    if (userGuess == randomNumber) {

        result.textContent = 'Parabéns! Você adivinhou o número!';
        result.style.color = 'green';

    } else if(userGuess <  randomNumber ) {

        result.textContent = `Tente um número maior.`;
        result.style.color = 'red';
    }else if(userGuess > randomNumber){

        result.textContent = `Digite um número menor !`;
        result.style.color = "red";

    }
}