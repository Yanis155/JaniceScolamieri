function sumar(num1, num2) {
  let resultado = (num1 + num2);
  console.log(resultado);

}
function suma_de_num() {
  let num1 = document.getElementById("valorA").value;
  let num2 = document.getElementById("valorB").value;

  document.getElementById("resultado").innerHTML = "resultado: " +(Number(num1) + Number(num2));

  let resultado = Number(num1) + Number(num2);
  console.log(resultado);

  if (num1 > num2) {
    (num1)
    alert("num1 es mayor que num2")
  }
  else if (num2 > num1) {
    (num2)
    alert("num2 es mayor que num1")
  }
}
