let numberOne = Number(prompt("Digite aqui o primeiro número:"));
let numberTwo = Number(prompt("Digite aqui o segundo número:"));

const mySum = numberOne + numberTwo;
alert(`A soma dos dois números é ${mySum}`);

const mySub = numberOne - numberTwo;
alert(`A subtração dos dois números é ${mySub}`);

const myMult = numberOne * numberTwo;
alert(`A multiplicação dos dois números é ${myMult}`);

const myDiv = numberOne / numberTwo;
alert(`A divisão dos dois números é ${myDiv}`);

const myRest = numberOne % numberTwo;
alert(`O resto da divisão dos dois números é ${myRest}`);

if (mySum % 2 == 0) {
  alert("A soma dos números é par!");
} else {
  alert("A soma dos números é impar!");
}

if (numberOne === numberTwo) {
  alert("Os dois números são iguais!");
} else {
  alert("Os dois números sao diferentes!");
}
