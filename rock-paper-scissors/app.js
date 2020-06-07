
// Javascript file for rock, paper, scissors game. //
//

function myFunction() {
    var user = prompt('Choose rock, paper or scissors')
    var computer, ran
    var ran = Math.floor(Math.random() * 3)

// Values //

    if (ran == 1) {
        computer = 'rock'
    } else if (ran == 2) {
        computer = 'paper'
    } else {
        computer = 'scissors'
    }
    check(computer, user)
}

// Functions to Explain the Game //

function check(computer, user) {
    var result

// When Computer Choose Rock //

    if (computer == 'rock' & user == 'rock') {   
        result = 'draw'
    } else if (computer == 'rock' & user == 'paper') {
        result = 'win'
    } else if (computer == 'rock' & user == 'scissors') {
        result = 'lose'
    }

// When Computer Choose Paper //

    if (computer == 'paper' & user == 'rock') {
        result = 'lose'
    } else if (computer == 'paper' & user == 'paper') {
        result = 'win'
    } else if (computer == 'paper' & user == 'scissors') {
        result = 'lose'
    }

// When Computer Choose Scissors //

    if (computer == 'scissors' & user == 'rock') {
        result = 'win'
    } else if (computer == 'scissors' & user == 'paper') {
        result = 'lose'
    } else if (computer == 'scissors' & user == 'scissors') {
        result = 'draw'
    }
    alert('Computer choose ' + computer)
    alert('You ' + result)

}