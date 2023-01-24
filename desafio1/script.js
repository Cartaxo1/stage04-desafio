let numberOne = Number(prompt("Digite aqui o primeiro número:"));
let numberTwo = Number(prompt("Digite aqui o segundo número:"));

const mySum = numberOne + numberTwo;
alert(mySum);

const mySub = numberOne - numberTwo;
alert(mySub);

const myMult = numberOne * numberTwo;
alert(myMult);

const myDiv = numberOne / numberTwo;
alert(myDiv);

const myRest = numberOne % numberTwo;
alert(myRest);

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
