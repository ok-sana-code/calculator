let a = ""; //first number
let b = ""; //second number
let sign = ""; //math sign
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

//screen
const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = ""; //first number and result
  b = ""; //second number
  sign = ""; //math sign
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  // натиснута не кнопка
  if (!event.target.classList.contains("btn")) return;
  // натиснута кнопка "ac"
  if (event.target.classList.contains("ac")) return;
  out.textContent = "";

  // отримати натиснуту кнопку
  const key = event.target.textContent;

  //якщо натиснута кнопка 1-9 або .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
        b = key;
        finish = false;
        out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    return;
  }

  //якщо натиснута кнопка + - x /
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }

  //натиснуте =
  if (key === "=") {
    if (b=='') b = a
    
    switch (sign) {
      case "+":
        a = +a + +b;
        break;

      case "-":
        a = a - b;
        break;

      case "x":
        a = a * b;
        break;

      case "/":
        if (b === '0'){
            out.textContent = "Error";
            a = '';
            b = '';
            sign ='';
            return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
  }
};
