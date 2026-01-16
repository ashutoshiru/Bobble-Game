// incrScore Function
let count = 0;
function increScore() {
  count += 10;
  document.querySelector("#Score").textContent = count;



}


// HighScore function
let total = 0;
function highScore() {
  if (count > total) {
    total = count;
  }

}


// Create restart button  function

function reSetbtn() {

  let button = document.createElement("button");
  button.textContent = "Restart";
  button.id = "resetButton"; // for styling in css
  document.querySelector("#pbtm").append(button);

  button.addEventListener("click", () => {

    count = 0;
    document.querySelector("#Score").textContent = count;

    makeBubble();
    runTimer();
    Hit();
    scoreCount();


  })
}


// bubble function
function makeBubble() {
  let bStore = "";
  for (let i = 1; i <= 182; i++) {
    let bGen = Math.floor(Math.random() * 10);
    bStore += `<div class = bubble> ${bGen} </div>`;
  }

  document.querySelector("#pbtm").innerHTML = bStore;
}




// Hit Function
let rnd;
function Hit() {
  rnd = Math.floor(Math.random() * 10);
  document.querySelector("#hitBob").textContent = rnd;
}


// timer function
function runTimer() {
  let timer = 60;
  let timerInt = setInterval(function () {
    if (timer >= 0) {
      document.querySelector("#timer").textContent = timer;
      timer--;
    } else {

      highScore() // restart highscore function and cout high score before reseting

      clearInterval(timerInt); // clearInterval for closing  setINterval function .
      let as = document.querySelector("#pbtm").innerHTML = `<pre><p>Game Over! Your Score is: ${count} 
          High Score is: ${total}</p></pre>`; // using pre tag for next lining   

      reSetbtn();   // Click button to Reset Game

      document.querySelector("#hitBob").textContent = "🚫";
      document.querySelector("#timer").textContent = "⏱️";


    }
  }, 1000);
}

// scoreCount function
let exectClick;
function scoreCount() {
  let clickedNum = document
    .querySelector("#pbtm")
    .addEventListener("click", function (clickVal) {
      exectClick = Number(clickVal.target.textContent);
      // console.log(exectClick);



      if (exectClick === rnd) {
        increScore();
        makeBubble();
        Hit();
      }
    });
}

// All Function Calling

makeBubble();
runTimer();
Hit();
scoreCount();
highScore()
  




