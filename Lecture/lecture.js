// -----------------------------------------------
// Call Stack Example
// -----------------------------------------------

console.log('First line.');

// runs this code 5 seconds (1000 milliseconds === 1 second) from now
setTimeout(futureCode, 5000);

// runs this code last in the stack
setTimeout(futureCode, 0);

function futureCode() {
    console.log('Hello from the future.');
}

console.log('Last line.');

// -----------------------------------------------
// Start & Cancel Button Example
// -----------------------------------------------

var restoreStartButtonTimeout;
var toggleLoadingInterval;

document.querySelector('#start').addEventListener('click', handleStartButton);
document.querySelector('#cancel').addEventListener('click', handleCancelButton);

function handleStartButton(e) {
    runningStartButton();
    restoreStartButtonTimeout = setTimeout(restoreStartButton, 3000);
}

function restoreStartButton() {
    console.log('Running restoreStartButton function...');
    var startButton = document.querySelector('#start');
    startButton.innerHTML = 'Start';
    startButton.disabled = false;
    startButton.classList.remove('btn-danger');
}

function handleCancelButton(e) {
    var cancelButton = e.target;
    restoreStartButton();
    clearTimeout(restoreStartButtonTimeout);
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

    startButton.innerHTML = '<span class="glyphicon glyphicon-refresh"></span> Running...';
    startButton.disabled = true;
    startButton.classList.add('btn-danger');
}


// -----------------------------------------------
// Timer Example
// -----------------------------------------------

var seconds = 30;

setInterval(startTimer, 1000);

function startTimer() {
    seconds--;

    document.querySelector('#time').innerHTML = seconds;

    if (seconds === 0) {
        window.location.href = 'http://giphy.com/gifs/frustration-eObS0vBCqq7te';
    }
}