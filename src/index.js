const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// HTML Components
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("time");
const toastElement = document.getElementById("toast");
const toastCloseButton = document.getElementById("close-toast");
const toastMessage = document.getElementById("toast-message");

//TODO ITERATION 1: Add event listener to the start button
// Your code goes here ...

startButton.addEventListener("click", () => {
  startCountdown();
});

//TODO ITERATION 2: Start Countdown
function startCountdown() {
  // Your code goes here ...
  toastMessage.innerText = "⏰ Final countdown! ⏰";
  showToast();
  timer = setInterval(() => {
    remainingTime--;
    timerElement.innerText = remainingTime;
    if (remainingTime === 5) {
      toastMessage.innerText = "Start the engines! 💥";
      showToast();
    }
    if (remainingTime === 0) {
      clearInterval(timer);
      toastMessage.innerText = "Lift off! 🚀";
      showToast();
    }
  }, 1000);
}

//TODO ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement.style.visibility = "visible";
  // Close Button
  toastCloseButton.addEventListener("click", () => {
    toastElement.style.visibility = "hidden";
  });
  // Timers
  setTimeout(() => {
    toastElement.style.visibility = "hidden";
  }, 3000);

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
