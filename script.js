let decimalInp = document.getElementById("decimal_value");
let binInp = document.getElementById("binary_value");
let octInp = document.getElementById("octal_value");
let hexInp = document.getElementById("hexadecimal_value");
let errorMsg = document.getElementById("error_message");

function updateFieldsFromDecimal(decimalValue) {
  binInp.value = decimalValue.toString(2);
  octInp.value = decimalValue.toString(8);
  hexInp.value = decimalValue.toString(16).toUpperCase();
}

function updateFieldsFromBinary(binaryValue) {
  if (binValidator(binaryValue)) {
    let decimalValue = parseInt(binaryValue, 2);
    decimalInp.value = decimalValue;
    octInp.value = decimalValue.toString(8);
    hexInp.value = decimalValue.toString(16).toUpperCase();
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Please Enter Binary Value";
  }
}

function updateFieldsFromOctal(octalValue) {
  if (octValidator(octalValue)) {
    let decimalValue = parseInt(octalValue, 8);
    decimalInp.value = decimalValue;
    binInp.value = decimalValue.toString(2);
    hexInp.value = decimalValue.toString(16).toUpperCase();
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Please Enter Octal Value";
  }
}

function updateFieldsFromHexadecimal(hexValue) {
  if (hexValidator(hexValue)) {
    let decimalValue = parseInt(hexValue, 16);
    decimalInp.value = decimalValue;
    binInp.value = decimalValue.toString(2);
    octInp.value = decimalValue.toString(8);
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Please Enter Hexadecimal Value";
  }
}

decimalInp.addEventListener("input", () => {
  let decValue = parseInt(decimalInp.value);
  updateFieldsFromDecimal(decValue);
});

binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  updateFieldsFromBinary(binValue);
});

octInp.addEventListener("input", () => {
  let octValue = octInp.value;
  updateFieldsFromOctal(octValue);
});

hexInp.addEventListener("input", () => {
  let hexValue = hexInp.value;
  updateFieldsFromHexadecimal(hexValue);
});

function binValidator(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== "0" && num[i] !== "1") {
      return false;
    }
  }
  return true;
}

function octValidator(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] < "0" || num[i] > "7") {
      return false;
    }
  }
  return true;
}

function hexValidator(num) {
  const hexRegex = /^[0-9A-Fa-f]+$/;
  return hexRegex.test(num);
}
