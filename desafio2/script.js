let students = [];
students = [
  {
    name: "João",
    p1: 9,
    p2: 8,
  },
  {
    name: "Carlos",
    p1: 7,
    p2: 5,
  },
  {
    name: "Luiz",
    p1: 7,
    p2: 7,
  },
  {
    name: "Caio",
    p1: 8,
    p2: 5,
  },
];

function calculate() {
  let result = [];
  for (let index = 0; index < students.length; index++)
    result.push({
      name: students[index].name,
      average: (students[index].p1 + students[index].p2) / 2,
    });
  return result;
}

result = calculate();

for (let index = 0; index < result.length; index++) {
  if (result[index].average >= 7) {
    alert(`A média do(a) aluno(a) ${result[index].name} é: ${result[index].average}
Parabéns você passou!`);
  } else {
    alert(`A média do(a) aluno(a) ${result[index].name} é: ${result[index].average}
Você reprovou. Se esforce mais na próxima!`);
  }
}
