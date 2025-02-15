// function validate(){
//     let item=document.getElementById("todo").value;
    

//     // let show_name = document.getElementById("show").innerHTML=name;

  

//    let element = document.createElement('ul');
   
//         element.innerHTML=`<li>${item}</li><button type='button'>Delete</button>`;
//     document.body.appendChild(element);
        
// }

// document.addEventListener("DOMContentLoaded", function(){
//     let ball = document.getElementById('ball');
// let gameArea = document.getElementById('gameArea');

// let xPos = 0;
// let yPos = 0;
// let xSpeed = 4;
// let ySpeed = 3;

// function moveBall() {
//     xPos += xSpeed;
//     yPos += ySpeed;

//     // Bounce off the edges
//     if (xPos + 30 > gameArea.clientWidth || xPos < 0) {
//         xSpeed = -xSpeed; // Reverse direction
//     }
//     if (yPos + 30 > gameArea.clientHeight || yPos < 0) {
//         ySpeed = -ySpeed; // Reverse direction
//     }

//     ball.style.left = `${xPos}px`;
//     ball.style.top = `${yPos}px`;

//     requestAnimationFrame(moveBall); // Keep the ball moving
// }

// moveBall();

// })


document.addEventListener('keydown',function(event){
    let key = event.key.toUpperCase();

    let audio;

    switch(key){
        case 'A':
            audio = new Audio('/music/percussive-drum-hit-4-189789.mp3');
        break;
        
        case 'B':
            audio = new Audio('/music/percussive-drum-hit-5-189791.mp3');
        break;

        case 'C':
            audio = new Audio('/music/sfx-percussion-huge-cinematic-tom-hit-283585.mp3');
        break; 

        case 'D':
            audio = new Audio('/music/whoosh-drum-hits-169007.mp3');
        break;

        default:
            return;
    }

    audio.currentTime = 0;
    audio.play();
});

document.addEventListener("DOMContentLoaded",function(){
    let btn = document.getElementById('checkBtn');
    if(btn){
    let randomnum = Math.floor(Math.random() * 10) + 1;

    let attempts = 0;

    btn.addEventListener('click',function(){
        let userInput = document.getElementById("userGuess").value; 
            let output = document.getElementById("output");

            userInput = parseInt(userInput);
        
            if(userInput < 1 || userInput > 10){
                output.innerText = "Enter a valid number between 1 and 10!";
                output.style.color="red";
                return;
            }

            attempts++;

            if (userInput === randomnum) {
                output.innerText = `Congratulations! You guessed it in ${attempts} attempts!`;
                output.style.color = "green";
            } else if (userInput > randomnum) {
                output.innerText = "Too High! Try a smaller number.";
                output.style.color = "blue";
            } else {
                output.innerText = "Too Low! Try a bigger number.";
                output.style.color = "blue";
            }
    })
}
});









