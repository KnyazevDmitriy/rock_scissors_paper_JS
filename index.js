const userName = prompt('Your username') || 'User'

const count = [0,0]
const possibleOutcomes = ['scissors', 'rock', 'paper']

let stopped = false

const startGame = () => {
    
    while(count.every(item => item < 3)) {
        let userChoice = ''
    
        while (!possibleOutcomes.some(item => item === userChoice)) {
            userChoice = prompt('Choose and write scissors, rock or paper')
    
            if (userChoice === null) {
                alert('You aborted this game. To start new game just refresh the page.');
                stopped = true
                break
            }
        }
    
        if (stopped === true) break
    
        let compChoice = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    
        if (compChoice === userChoice) {
            alert(`Computer move is: ${compChoice}. Computer: ${count[1]}, ${userName + ': ' + count[0]}`)
        }
    
        if (compChoice === 'scissors' && userChoice === 'rock' ||
            compChoice === 'paper' && userChoice === 'scissors' ||
            compChoice === 'rock' && userChoice === 'paper') {
            count[0] += 1
            alert(`Computer move is: ${compChoice} Computer: ${count[1]}, ${userName + ': ' + count[0]}`)
        }
    
        if (compChoice === 'rock' && userChoice === 'scissors' ||
            compChoice === 'scissors' && userChoice === 'paper' || 
            compChoice === 'paper' && userChoice === 'rock') {
            count[1] += 1
            alert(`Computer move is: ${compChoice}. Computer: ${count[1]}, ${userName + ': ' + count[0]}`)
        }
    }

    if (count[0] === 3) {
        alert(`Congratulations. You won this game. Count - You: ${count[0]}. Computer: ${count[1]}`)
        
        if (confirm('do u')) {
            count[0] === 0 && count[1] === 0
            startGame()
        }
    
    } else if (count[1] === 3) {
        alert(`Sorry. You lost this game. Count - You: ${count[0]}. Computer: ${count[1]}`)
    
        if (confirm('do u')) {
            count[0] = 0
            count[1] = 0
            startGame()
        }
    }
}

startGame()