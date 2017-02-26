//creates an anonymous function for when the start button is clicked to run the startTimer function every 100 milliseconds.

document.querySelector('#start').addEventListener('click', function() { setInterval(startTimer, 10)});

var seconds = 0;
var tenthSeconds = 0;
var minutes = 0;
var t = 0;

// var red = Math.round(Math.random() * 255);
// var green = Math.round(Math.random() * 255);
// var blue = Math.round(Math.random() * 255);

function startTimer(e) {
    tenthSeconds++;

    document.querySelector('#time').innerHTML = `${minutes} : ${seconds} : ${tenthSeconds}`;

    if (tenthSeconds >= 99) {
        tenthSeconds = 0;
        seconds++;
    }

    else if (seconds >= 60) {
        seconds = 0;
        minutes++;
        //target.e.style.color = `rgb(${red}, ${green}, ${blue})`;
    }

}     


// PAUSE ATTEMPTS

// function stopWatch(e) {
//     if (e.target.innerHTML === 'Start') {
//             tenthSeconds++;

//             document.querySelector('#time').innerHTML = `${minutes} : ${seconds} : ${tenthSeconds}`;

//             if (tenthSeconds >= 99) {
//                 tenthSeconds = 0;
//                 seconds++;
//             }

//             else if (seconds >= 60) {
//                 seconds = 0;
//                 minutes++;
//                 //target.e.style.color = `rgb(${red}, ${green}, ${blue})`;
//             }
//         timer = setInterval(startTimer, 100);
//         e.target.innerHTML = 'Pause';
//     }

//     else if (e.target.innerHTML === 'Pause') {
//         clearInterval(timer);
//         e.target.innerHTML = 'Resume';
//     }

// }
    

// var playPause = document.getElementById("start");
// var isCounting = false;

// function togglePlay() {
//   if (isCounting) {
//     playPause.pause()
//   } else {
//     playPause.play();
//   }
// };
// playPause.onplaying = function() {
//   isCounting = true;
// };
// playPause.onpause = function() {
//   isCounting = false;
// };


// function pauseTimer() {
//         if (talkToTimer === 'resume') {
//             clearTimeout(t);
//             document.getElementById('start').value="Resume";
//             talkToTimer='pause';
//         }
//         else {
//             talkToTimer='resume';
//             document.getElementById('start').value="Pause";
//             resume();
//         }
//     }

// function resume() {
//     t = setTimeout(startTimer, 10);}
