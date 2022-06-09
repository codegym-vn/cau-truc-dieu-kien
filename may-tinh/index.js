let p1 = document.getElementById("number_1_value");
let p2 = document.getElementById("number_2_value");
let p3 = document.getElementById("calculus_p");
let p4 = document.getElementById("print_value");

const insertValue = (number) => {
  let number1 = p1.innerHTML;
  let calcu = p3.innerHTML;
  if (!number1) {
    p1.innerHTML = p1.innerHTML + number;
  } else {
    if (!calcu) {
      p1.innerHTML = p1.innerHTML + number;
    } else {
      p2.innerHTML = p2.innerHTML + number;
    }
  }
}

const calculus = (value) => {
  if (value !== "=") {
    p3.innerHTML = value;
    let print_value = p4.innerHTML;
    p4.innerHTML = "";
    if (print_value) {
      p1.innerHTML = print_value;
      p2.innerHTML = '';
    }
  } else {
    let calcu = p3.innerHTML;
    let number1 = p1.innerHTML;
    let number2 = p2.innerHTML;
    let result;
    if (calcu && number1 && number2) {
      switch (calcu) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case 'x':
          result = number1 * number2;
          break;
        case '÷':
          result = number1 / number2;
          break;
      }
    }
    p4.innerHTML = result;
  }
}

const delete_all = () => {
  p1.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";
  p4.innerHTML = "";
}