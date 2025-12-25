let table = document.getElementById("gymTable");
let total = 0;

for (let key in localStorage) {
  if (key.startsWith("gym-")) {
    let g = JSON.parse(localStorage.getItem(key));
    let lifted = g.sets * g.reps * g.weight;
    total += lifted;

    let row = table.insertRow();
    row.insertCell(0).innerText = g.date;
    row.insertCell(1).innerText = g.day;
    row.insertCell(2).innerText = g.exercise;
    row.insertCell(3).innerText = g.sets;
    row.insertCell(4).innerText = g.reps;
    row.insertCell(5).innerText = g.weight;
    row.insertCell(6).innerText = lifted + " kg";
  }
}

document.body.innerHTML += `<h3 style="text-align:center">Total Weight Lifted: ${total} kg</h3>`;
row.insertCell(7).innerHTML =
  `<button onclick="deleteWorkout('${key}')">❌</button>`;

function deleteWorkout(id) {
  localStorage.removeItem(id);
  location.reload();
}
