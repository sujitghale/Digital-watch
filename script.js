let timeDisplay = document.querySelector(".time");
let timebtn = document.querySelector(".timebtn");
let timerbtn = document.querySelector(".timerbtn");

function updateclock() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  minute = minute.toString().padStart(2, "0");
  second = second.toString().padStart(2, "0");

  timedisplay = `${hour}:${minute}:${second}`;

  document.querySelector(".display").innerHTML = timedisplay;
}

setInterval(updateclock, 1000);

timebtn.addEventListener("click", () => {
  document.querySelector(".time").innerHTML = `<p class="display"></p>`;
});

let alarmbtn = document.querySelector(".alarmbtn");

function showAlarm() {
  timeDisplay.innerHTML = `<input type="time" id="alarm-time" />
  <button class="settingAlarm"  onclick = "setalarm()"; style="
      height: 100px;
      width: 200px;
      font-size: 30px;
      font-weight:bold;
      background-color: #f9bc60;
      border: 3px solid black;
      border-radius: 15px;
      margin-left: 20px;
  ">Set Alarm </button>`;
}

function setalarm() {
  let alarm_time = document.getElementById("alarm-time").value;
  if (!alarm_time) {
    alert("Please Enter the valid alarm Time.");
    return;
  }
  setInterval(() => {
    let nowTime = new Date();
    let currentHrs = nowTime.getHours().toString().padStart(2, "0");
    let currentMin = nowTime.getMinutes().toString().padStart(2, "0");
    let storeTime = `${currentHrs}:${currentMin}`;

    if (alarm_time === storeTime) {
      document.getElementById("alarmSound").play();
    }
  }, 1000);
}

// let alarm = document.getElementsByClassName("settingAlarm");
// alarm.addEventListener("click", setalarm);

// working on the timer function
let time = 0;
let timer;
let running = false;

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      time++;
      document.querySelector(".displayTimer").innerHTML = ` Timer: ${time}s`;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  time = 0;
  running = false;
  document.querySelector(".displayTimer").innerHTML = `0s`;
}
function showtimer() {
  timeDisplay.innerHTML = `
  
  <div class="main" style="
  height:100%;
  width:100%;
  ">

  <div id = "timerbuttons" style="

    position: relative;
    width: 100%;
    height: 40%;
    display:flex;
    justify-content:space-around;
    
    
  ">
  <button class= "btn one" onclick="startTimer();" style = "
  height: 50px;
  width:150px;
  margin-top: 30px;
  border:3px solid #001e1d;
  border-radius: 25px;
  font-size: 20px;
  font-weight:bold;
  background-color:#fffffe;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  ">Start Timer</button>
  <button class ="btn two" onclick="stopTimer();" style = "
  height: 50px;
  width:150px;
  margin-top: 30px;
  border:3px solid #001e1d;
  border-radius: 25px;
  font-size: 20px;
  font-weight:bold;
  background-color:#fffffe;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  ">Stop Timer</button>
  <button class ="btn three" onclick="resetTimer();" style = "
  height: 50px;
  width:150px;
  margin-top: 30px;
  border:3px solid #001e1d;
  border-radius: 25px;
  font-size: 20px;
  font-weight:bold;
  background-color:#fffffe;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  ">Reset Timer</button>
  
   </div>
  <div style="
  text-align:center;
  ">
  <p class="displayTimer" style="
  font-size: 50px;

  ">0s</p></div>

  </div>
  
   
   

 
  `;
}


  // <p class="displayTimer">0s</p>;