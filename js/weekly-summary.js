let days = {};
let list = document.getElementById("weekData");

for (let key in localStorage) {
  if (key.startsWith("gym-")) {
    let g = JSON.parse(localStorage.getItem(key));
    days[g.day] = (days[g.day] || 0) + 1;
  }
}

for (let d in days) {
  let li = document.createElement("li");
  li.innerText = `${d} : ${days[d]} workouts`;
  list.appendChild(li);
}
