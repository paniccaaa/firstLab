
export const methodRight = (funcStr, lowerLimit, upperLimit, partitions) => {
  const dx = (upperLimit - lowerLimit) / partitions; // шаг разбиения
  let sum = 0;
  for (let i = 1; i <= partitions; i++) {
    const x = lowerLimit + i * dx; // правая граница прямоугольника
    const y = eval(funcStr.replace(/x/g, x)); // значение функции в точке x
    sum += y * dx; // площадь прямоугольника
  }
  return sum;
}



export const methodLeft = (func, a, b, pieces) => {
  let step = (b - a) / pieces;
  let x = a;
  let ans = 0;
  while (x < b) {
    ans = ans + eval(func.replace(/x/g, x));
    x += step;
  }
  return ans * step;
}

export const methodParabol = (func, a, b, pieces) => {
  let step = (b - a) / pieces;
  let x = a + step;
  let ans = 0;
  while (x < b - step) {
    ans += 4 * eval(func.replace(/x/g, x));
    ans += 2 * eval(func.replace(/x/g, x + step));
    x += step * 2;
  }
  ans = (step / 3) * (ans + eval(func.replace(/x/g, a)) + eval(func.replace(/x/g, b)));

  return ans;
}

export const methodTrap = (func, a, b, pieces) => {
  let step = (b - a) / pieces;
  let x = a + step;
  let ans = 0;
  while (x < b - step) {
    ans += ((eval(func.replace(/x/g, x)) + eval(func.replace(/x/g, x + step))) / 2);
    x += step;
  }
  ans = step * (((eval(func.replace(/x/g, a)) + eval(func.replace(/x/g, b))) / 2) + ans);

  return ans;
}

// export const methodTrap = (func, a, b, pieces) => {
//   const step = (b - a) / pieces;
//   let x = a + step;
//   let ans = (eval(func, {"builtins": null}, {"cos": Math.cos, "sin": Math.sin, "tan": Math.tan, "x": a}) + eval(func, {"builtins": null}, {"cos": Math.cos, "sin": Math.sin, "tan": Math.tan, "x": b})) / 2;

//   while (x < b) {
//     ans = ans + eval(func, {"builtins": null}, {"cos": Math.cos, "sin": Math.sin, "tan": Math.tan, "x": x});
//     x += step;
//   }

//   return ans * step;
// }


export const integralsMethods = [
  {
    value: "right",
    label: "Правых частей"
  },
  {
    value: "left",
    label: "Левых частей"
  },
  {
    value: "trap",
    label: "Трапеции"
  },
  {
    value: "parab",
    label: "Парабола"
  }
]
export const stepsVersions = [
  {
    value: "regular",
    label: "Постоянный шаг"
  },
  {
    value: "variable",
    label: "Переменный шаг"
  }
]