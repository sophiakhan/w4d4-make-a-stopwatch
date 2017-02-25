//creates an anonymous function for when the start button is clicked to run the startTimer function every 100 milliseconds.
document.querySelector('#start').addEventListener('click', function() { setInterval(startTimer, 10)});

// document.querySelector('#start').addEventListener('click', startTimer);
// document.querySelector('#start').addEventListener('dblclick', resetWatch);
// document.querySelector('#start').addEventListener(' ', timeout);

var seconds = 0;
var tenthSeconds = 0;
var minutes = 0;

function startTimer(e) {
    tenthSeconds++;
    document.querySelector('#time').innerHTML = `${minutes} : ${seconds} : ${tenthSeconds}`;

    if (tenthSeconds >= 99) {
        tenthSeconds = 0;
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    } 

}

function pauseTimer() {
    document.querySelector('#start').replace 
}


// function changeToPause() {
//     startButton = document.querySelector('#start').addEventListener('click');

//     startButton.innerText === 'Pause';
//     startButton.classList.add('btn-danger')
// }

