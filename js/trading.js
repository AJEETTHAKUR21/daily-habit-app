function calculatePL() {
  let entry = Number(document.getElementById("entry").value);
  let exit = Number(document.getElementById("exit").value);
  let qty = Number(document.getElementById("qty").value);

  let pl = (exit - entry) * qty;

  let plText = document.getElementById("pl");
  plText.innerText = pl;

  if (pl > 0) {
    plText.style.color = "green";
  } else if (pl < 0) {
    plText.style.color = "red";
  } else {
    plText.style.color = "black";
  }
}

function saveTrade() {
  let trade = {
    mode: mode.value,
    entry: entry.value,
    exit: exit.value,
    qty: qty.value,
    pl: document.getElementById("pl").innerText,
    date: new Date().toLocaleString()
  };

  localStorage.setItem("trade-" + Date.now(), JSON.stringify(trade));
  document.getElementById("msg").innerText = "✅ Trade saved successfully";
}
