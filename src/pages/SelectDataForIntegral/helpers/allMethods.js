
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

export const approximateIntegration = (func, a, b, n) => {
  // Инициализация начальных значений
  let hv = (b - a) / n;
  let S1 = 0;
  let S2 = 0;
  let I1 = 0;
  let I2 = 0;
  const tolerance = 0.01;

  // Выполнение первой итерации
  for (let i = 1; i <= n; i++) {
    const x = a + hv * (i - 1);
    S1 += eval(func);
  }

  I1 = hv * S1;

  // Выполнение последующих итераций
  for (let count = 0; count < 3; count++) {
    const hs = hv / 2;

    S2 = 0;
    let x = a + hs;

    while (x < b - hv) {
      S2 += eval(func);
      x += hv;
    }

    S1 = S1 + S2;
    I2 = I1;
    I1 = hv * S1;

    if (Math.abs(I2 - I1) < tolerance) {
      break;
    }

    hv = hs;
  }
  console.log('это быстрый метод', I1 / 2);
  return I1 / 2;
};

export const methodLeftVariable = (func, a, b, n) => {
  let h = (b - a) / n;
  let IN = 0;
  let S2 = 0;
  let x = a;
  let E = 0.01;

  S2 = S2 + eval(func.replace(/x/g, x));
  x = x + h;

  while (x <= b - h) {
    S2 = S2 + eval(func.replace(/x/g, x));
    x = x + h;
  }

  let I2N = h * S2;
  let R = Math.abs(I2N - IN);
  IN = I2N;
  h = h / 2;

  while (R > E) {
    I2N = 0;
    x = a + h / 2;

    while (x <= b - h) {
      I2N = I2N + eval(func.replace(/x/g, x));
      x = x + h;
    }

    I2N = (h / 2) * (S2 + 2 * I2N);
    R = Math.abs(I2N - IN);
    IN = I2N;
    h = h / 2;
  }
  console.log('это медленный метод', I2N);
  return I2N;
};

export const methodParabol = (func, a, b, pieces) => {
  let step = (b - a) / pieces;
  let x = a + step;
  let ans = 0;
  while (x < b - step) {
    ans += 4 * eval(func.replace(/x/g, x));
    ans += 2 * eval(func.replace(/x/g, x + step));
    x += step * 2;
  }
  ans =
    (step / 3) *
    (ans + eval(func.replace(/x/g, a)) + eval(func.replace(/x/g, b)));

  return ans;
};

export const methodTrap = (func, a, b, pieces) => {
  let step = (b - a) / pieces;
  let x = a + step;
  let ans = 0;
  while (x < b - step) {
    ans +=
      (eval(func.replace(/x/g, x)) + eval(func.replace(/x/g, x + step))) / 2;
    x += step;
  }
  ans =
    step *
    ((eval(func.replace(/x/g, a)) + eval(func.replace(/x/g, b))) / 2 + ans);

  return ans;
};

export const integralsMethodsRegular = [
  {
    value: 'right',
    label: 'Правых частей',
  },
  {
    value: 'left',
    label: 'Левых частей',
  },
  {
    value: 'trap',
    label: 'Трапеции',
  },
  {
    value: 'parab',
    label: 'Парабола',
  },
];

export const integralsMethodsVariable = [
  {
    value: 'left',
    label: 'Левых частей(медленный)',
  },
  {
    value: 'left2',
    label: 'Левых частей(быстрый)',
  },
];

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