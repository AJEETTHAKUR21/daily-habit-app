let today = new Date().toLocaleDateString();
let month = new Date().getMonth();
let year = new Date().getFullYear();

let todayTotal = 0;
let monthTotal = 0;

for (let key in localStorage) {
  if (key.startsWith("trade-")) {
    let trade = JSON.parse(localStorage.getItem(key));
    let tradeDate = new Date(trade.date);

    let pl = Number(trade.pl);

    if (tradeDate.toLocaleDateString() === today) {
      todayTotal += pl;
    }

    if (
      tradeDate.getMonth() === month &&
      tradeDate.getFullYear() === year
    ) {
      monthTotal += pl;
    }
  }
}

document.getElementById("todayPL").innerText = todayTotal;
document.getElementById("monthPL").innerText = monthTotal;
