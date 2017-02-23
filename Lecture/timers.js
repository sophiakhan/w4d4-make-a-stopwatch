console.log('First line');

setTimeout(futureCode, 5000); // run this function in 5 seconds from now

// setTimeout(futureCode, 0); // if kept at 0, it wll run this code last in the stack

function futureCode() {
    console.log('Hello from the future.'); 
}

console.log('Last line');

//targets id of start button and listens for user to click
var restoreStartButtonTimeout;
var toggleLoadingInterval;

document.querySelector('#start').addEventListener('click', handleStartButton);
document.querySelector('#cancel').addEventListener('click', handleCancelButton);


function handleStartButton(event) {
    runningStartButton();
    restoreStartButtonTimeout = setTimeout(restoreStartButton, 3000); //sets timer to restore start button
}

function restoreStartButton() {
    var startButton = document.querySelector('#start');
    startButton.innerHTML = 'Start';
    startButton.disabled = false;
    startButton.classList.remove('btn-danger');
}

function handleCancelButton(event) {
    var cancelButton = event.target;
    restoreStartButton();
    clearTimeout(restoreStartButtonTimeout); // stops function from running twice
    clearInterval(toggleLoadingInterval);
}

toggleLoadingInterval = setInterval(toggleLoading, 1000);

function toggleLoading() {
    var startButton = document.querySelector('#start');

    if (startButton.innerText === 'Start') {
        runningStartButton();
    }
    else {
        restoreStartButton();
    }
}

function runningStartButton() {
    var startButton = document.querySelector('#start');

    startButton.innerText = 'Running...'; // is faster than innerHTML
    //startButton.innerHTML = '<h5>Running...</h5>'; // using innerHTML, you can put html within the string
    startButton.disabled = true; // disables button 
    startButton.classList.add('btn-danger');
}

var seconds = 30;

setInterval(startTimer, 1000);

function startTimer() {
    seconds--;
    document.querySelector('#time').innerHTML = seconds;

    if (seconds === 0) {
        window.location.href = 'http://google.com';
    }
}