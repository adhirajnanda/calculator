function display(number) {
  document.getElementById("result").value += number;
}

function calculate() {
  var result = document.getElementById("result").value;
  var y = eval(result);
  document.getElementById("result").value = y;
}

function clearscr() {
  document.getElementById("result").value = "";
}

function plusminus() {
  document.getElementById("result").value = "+" && "-";
}

function invalid() {
  document.getElementById("result").value = ("a", "b");
  console.log("error");
}
