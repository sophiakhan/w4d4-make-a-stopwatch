var startButton = document.querySelector('#start'); // calls button from html as shared variable
var timeDisplay = document.querySelector('#timeDisplay');
var tenths = 0;
var seconds = 0;
var minutes = 0;
var intervalSlot; 

makeStartButtonClickable();
makeStartButtonDoubleClickable(); 

function makeStartButtonClickable() {
    startButton.addEventListener('click', startWatch); // when clicked, the button will start watch
}

function makeStartButtonDoubleClickable() {
    startButton.addEventListener('dblclick', resetWatch); 
}

function startWatch() {
    if (startButton.innerText.trim() === 'Start') {
        
        startUpdatingTimer();
        changeButtonToPause();
    }

    else if (startButton.innerHTML.trim() === 'Pause') {
        pauseTimerFromCountingUp();
        setTimeout(resetTimerAfter15Seconds, 15000);
        changeButtonToSayResume();
    }

    else if (startButton.innerHTML.trim() === 'Resume') {
        startUpdatingTimer();
        changeButtonToPause();
    }
}

function resetWatch() {
    if (startButton.innerHTML.trim() === 'Pause') {
        pauseTimerFromCountingUp();
        resetTimersToZero();
        updateTimerDisplay();
        changeButtonToSayStart();
    }
}

function updateTimer() {
    startCountingUpEveryTenth();        
    
    updateTimerDisplay();
    
    if (tenths == 0) {
         changeColor();
    }
}

function startCountingUpEveryTenth() {
    tenths++;

    if (tenths === 9) { // starts at 9 since the var is starting at 0
        seconds++;
        tenths = 0;
    }

    // not else if since they can both be true
    if (seconds === 59) {
        minutes++;
        seconds = 0;
    }
}

function updateTimerDisplay() {
    timeDisplay.innerHTML = `${minutes}:${seconds}:${tenths}`;
}

function changeColor() {
    var red = _randomNumber(255);
    var green = _randomNumber(255);
    var blue = _randomNumber(255);
    timeDisplay.style.color = `rgb(${red}, ${green}, ${blue})`;
}

function changeButtonToPause() {
    startButton.innerHTML = 'Pause';
}

function pauseTimerFromCountingUp() {
    clearInterval(intervalSlot);
}

function startUpdatingTimer() {
    intervalSlot = setInterval(updateTimer, 100);
}

function changeButtonToSayResume() {
    startButton.innerHTML = 'Resume';
}

function changeButtonToSayStart() {
    startButton.innerHTML = 'Start';
}

function resetTimersToZero() {
    tenths = 0;
    seconds = 0;
    minutes = 0;
}

function resetTimerAfter15Seconds() {
    if (startButton.innerHTML.trim() === 'Resume') {
        pauseTimerFromCountingUp();
        resetTimersToZero();
        updateTimerDisplay();
        changeButtonToSayStart();
   }
}

// helpers
function _randomNumber(max) { // underscore is to notate a personal utility built for coder 
    return Math.round(Math.random() * max); 
}