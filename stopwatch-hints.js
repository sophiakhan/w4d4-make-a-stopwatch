document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#start').addEventListener('dblclick', resetWatch);
document.querySelector('#start').addEventListener(' ', timeout);

var seconds = 0;
var tenthSeconds = 0;
var minutes = 0;
var t = 0;

function stopWatch(e) {
    if (e.target.innerHTML === 'Start') {
        tenthSeconds++;
        document.querySelector('#time' = `${minutes}:${seconds}:${tenthSeconds}`);
     //     Change the color of the timer text each second
        timer = setInterval(startTimer, 100);
    //     Change button to say "Pause"
        e.target.innerHTML = 'Pause';
    }
    // IF the button says start when you click it, start the timer couting AND change the button to say Pause. IF not, look at next statement. 
    else if (e.target.innerHTML === 'Pause') {
        // Pause the timer from counting up
        clearInterval(timer);
        // Change button to say "Resume"
        e.target.innerHTML = 'Resume';
        }

//

document.querySelector('#start').addEventListener('click', function (e) {
    var startButton = e.target;
    if (startButton.innerHTML === 'Start') {
        startButton.innerHTML = 'Pause';
        interval = setInterval(startTimer, 10)
        colorInterval = setInterval(colorTimer, 1000);
    }
    else if (startButton.innerHTML === 'Pause') {
        startButton.innerHTML = 'Resume';
        clearInterval(interval);
        clearInterval(colorInterval);
        timeoutInterval = setInterval(timeout, 15000)
    }
    else if (startButton.innerHTML === 'Resume') {
        startButton.innerHTML = 'Pause';
        interval = setInterval(startTimer, 10)
        colorInterval = setInterval(colorTimer, 1000);
    }
   
});