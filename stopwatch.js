//creates an anonymous function for when the start button is clicked to run the startTimer function every 100 milliseconds.
document.querySelector('#start').addEventListener('click', function() { setInterval(startTimer, 10)});

var seconds = 0;
var tenthSeconds = 0;
var minutes = 0;

function startTimer() {

    tenthSeconds++;
    document.querySelector('#time').innerHTML = `${minutes} : ${seconds} : ${tenthSeconds}`;

    if (`${tenthSeconds}`> '60') {
        
    }
}

