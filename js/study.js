let seconds = 0;
let timer;

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    document.getElementById("timer").innerText =
      `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  document.getElementById("timer").innerText = "00:00:00";
}

function saveStudy() {
  let data = {
    topic: topic.value,
    hours: hours.value,
    notes: notes.value,
    time: document.getElementById("timer").innerText,
    date: new Date().toLocaleDateString()
  };

  localStorage.setItem("study-" + Date.now(), JSON.stringify(data));
  document.getElementById("msg").innerText = "✅ Study data saved";
}
