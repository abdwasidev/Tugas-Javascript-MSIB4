function CalculatorTambah() {
  let total = 0;
  let firstNumber = document.getElementById("setFirstNumber").value;
  let secondNumber = document.getElementById("setSecondNumber").value;
  if (firstNumber === "" || secondNumber === "") {
    Swal.fire({
      icon: "error",
      title: "<h5 style='color:#6e91fe'>Oops...</h5>",
      color: "red",
      background: "#f2f5ff",
      text: "Anda Belum Memasukkan Angka",
      confirmButtonColor: "#6e91fe",
      inputAttributes: {
        input: "number",
        required: "false",
      },
    });
  }

  let parseFirstNumber = parseFloat(firstNumber);
  let parseSecondNumber = parseFloat(secondNumber);

  total = parseFirstNumber + parseSecondNumber;

  document.getElementById("getHasilTambah").innerHTML =
    "<th> " +
    firstNumber +
    " + " +
    secondNumber +
    '</th><td><b>&nbsp;&nbsp; : &nbsp;&nbsp;</b><span class="hasil">' +
    total +
    "</span></td>";
}

function CalculatorKurang() {
  let total = 0;
  let firstNumber = document.getElementById("setFirstNumber").value;
  let secondNumber = document.getElementById("setSecondNumber").value;
  if (firstNumber === "" || secondNumber === "") {
    Swal.fire({
      icon: "error",
      title: "<h5 style='color:#6e91fe'>Oops...</h5>",
      color: "red",
      background: "#f2f5ff",
      text: "Anda Belum Memasukkan Angka",
      confirmButtonColor: "#6e91fe",
      inputAttributes: {
        input: "number",
        required: "false",
      },
    });
  }

  let parseFirstNumber = parseFloat(firstNumber);
  let parseSecondNumber = parseFloat(secondNumber);

  total = parseFirstNumber - parseSecondNumber;

  document.getElementById("getHasilTambah").innerHTML =
    "<th> " +
    firstNumber +
    " - " +
    secondNumber +
    '</th><td><b>&nbsp;&nbsp; : &nbsp;&nbsp;</b><span class="hasil">' +
    total +
    "</span></td>";
}

function CalculatorKali() {
  let total = 0;
  let firstNumber = document.getElementById("setFirstNumber").value;
  let secondNumber = document.getElementById("setSecondNumber").value;
  if (firstNumber === "" || secondNumber === "") {
    Swal.fire({
      icon: "error",
      title: "<h5 style='color:#6e91fe'>Oops...</h5>",
      color: "red",
      background: "#f2f5ff",
      text: "Anda Belum Memasukkan Angka",
      confirmButtonColor: "#6e91fe",
      inputAttributes: {
        input: "number",
        required: "false",
      },
    });
  }

  let parseFirstNumber = parseFloat(firstNumber);
  let parseSecondNumber = parseFloat(secondNumber);

  total = parseFirstNumber * parseSecondNumber;

  document.getElementById("getHasilTambah").innerHTML =
    "<th> " +
    firstNumber +
    " x " +
    secondNumber +
    '</th><td><b>&nbsp;&nbsp; = &nbsp;&nbsp;</b><span class="hasil">' +
    total +
    "</span></td>";
}

function CalculatorBagi() {
  let total = 0;
  let firstNumber = document.getElementById("setFirstNumber").value;
  let secondNumber = document.getElementById("setSecondNumber").value;
  if (firstNumber === "" || secondNumber === "") {
    Swal.fire({
      icon: "error",
      title: "<h5 style='color:#6e91fe'>Oops...</h5>",
      color: "red",
      background: "#f2f5ff",
      text: "Anda Belum Memasukkan Angka",
      confirmButtonColor: "#6e91fe",
      inputAttributes: {
        input: "number",
        required: "false",
      },
    });
  }

  let parseFirstNumber = parseFloat(firstNumber);
  let parseSecondNumber = parseFloat(secondNumber);

  total = parseFirstNumber / parseSecondNumber;

  document.getElementById("getHasilTambah").innerHTML =
    "<th> " +
    firstNumber +
    " / " +
    secondNumber +
    '</th><td><b>&nbsp;&nbsp; = &nbsp;&nbsp;</b><span class="hasil">' +
    total +
    "</span></td>";
}

function CalculatorPangkat() {
  let total = 0;
  let firstNumber = document.getElementById("setFirstNumber").value;
  let secondNumber = document.getElementById("setSecondNumber").value;
  if (firstNumber === "" || secondNumber === "") {
    Swal.fire({
      icon: "error",
      title: "<h5 style='color:#6e91fe'>Oops...</h5>",
      color: "red",
      background: "#f2f5ff",
      text: "Anda Belum Memasukkan Angka",
      confirmButtonColor: "#6e91fe",
      inputAttributes: {
        input: "number",
        required: "false",
      },
    });
  }

  let parseFirstNumber = parseFloat(firstNumber);
  let parseSecondNumber = parseFloat(secondNumber);

  total = parseFirstNumber ** parseSecondNumber;

  const para = document.createElement("p");
  para.innerText = "This is a paragraph";
  document.body.appendChild(para);

  document.getElementById("getHasilTambah").innerHTML =
    "<th> " +
    firstNumber +
    "<sup>" +
    secondNumber +
    "</sup>" +
    '</th><td><b>&nbsp;&nbsp; = &nbsp;&nbsp;</b><span class="hasil">' +
    total +
    "</span></td>";
}
