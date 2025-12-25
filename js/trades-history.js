let table = document.getElementById("tradeTable");

for (let key in localStorage) {
  if (key.startsWith("trade-")) {
    let trade = JSON.parse(localStorage.getItem(key));

    let row = table.insertRow();

    row.insertCell(0).innerText = trade.date;
    row.insertCell(1).innerText = trade.mode;
    row.insertCell(2).innerText = trade.entry;
    row.insertCell(3).innerText = trade.exit;
    row.insertCell(4).innerText = trade.qty;

    let plCell = row.insertCell(5);
    plCell.innerText = trade.pl;

    if (trade.pl > 0) plCell.style.color = "green";
    else if (trade.pl < 0) plCell.style.color = "red";
  }
}
