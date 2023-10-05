import React from "react"
import { MenuItem, TextField, Button } from "@mui/material"
import styles from "./DataIntegral.module.scss"
import { integralsMethods, stepsVersions, methodLeft, methodRight, methodParabol, methodTrap } from "./helpers/allMethods"

export const DataIntegral = () => {
  const [method, setMethod] = React.useState("right"); // выбранный метод интегрирования
  const [step, setStep] = React.useState("regular"); // выбранный тип шага
  const [func, setFunc] = React.useState(""); // введенная пользователем функция
  const [pieces, setPieces] = React.useState(1); // введенное пользователем количество разбиений
  const [lowerLimit, setLowerLimit] = React.useState(0); // введенный пользователем нижний предел интегрирования
  const [upperLimit, setUpperLimit] = React.useState(1);
  

  const handleFuncChange = (event) => {
    setFunc(event.target.value);
  };

  // функция для обработки изменений в TextField с количеством разбиений
  const handlePiecesChange = (event) => {
    setPieces(event.target.value);
  };

  
  const handleLowerLimitChange = (event) => {
    setLowerLimit(event.target.value);
  };

  
  const handleUpperLimitChange = (event) => {
    setUpperLimit(event.target.value);
  };
  
  const calculateIntegral = () => {
    let result = 0;
  
    // преобразуем значения полей ввода в числа
    const parsedPieces = parseInt(pieces);
    const parsedLowerLimit = parseFloat(lowerLimit);
    const parsedUpperLimit = parseFloat(upperLimit);
  
    // проверяем, какой метод интегрирования выбран
    switch (method) {
      case "right":
        result = methodRight(func, parsedLowerLimit, parsedUpperLimit, parsedPieces);
        break;
      case "left":
        result = methodLeft(func, parsedLowerLimit, parsedUpperLimit, parsedPieces);
        break;
      case "parab":
        result = methodParabol(func, parsedLowerLimit, parsedUpperLimit, parsedPieces);
        break;
      case "trap":
        result = methodTrap(func, parsedLowerLimit, parsedUpperLimit, parsedPieces);
        break;
      default:
        break;
    }
  
    // возвращаем результат вычисления интеграла
    return result;
  };

  return (
    <div>
    <h1 className={styles.integral_text}>Вычисление интеграла</h1>
    <TextField
      id="outlined-select-method"
      select
      defaultValue="right"
      helperText="Выберите метод вычисления интеграла"
      value={method}
      onChange={(event) => setMethod(event.target.value)}
    >
      {integralsMethods.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      id="outlined-select-step"
      select
      defaultValue="regular"
      helperText="Выберите шаг"
      value={step}
      onChange={(event) => setStep(event.target.value)}
    >
      {stepsVersions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    <TextField placeholder="Введите функцию" value={func} onChange={handleFuncChange} />
    <TextField placeholder="Введите кол-во разбиений" value={pieces} onChange={handlePiecesChange} />
    <TextField placeholder="Введите нижний предел" value={lowerLimit} onChange={handleLowerLimitChange} />
    <TextField placeholder="Введите верхний предел" value={upperLimit} onChange={handleUpperLimitChange} />
    <Button onClick={() => alert(calculateIntegral())}>Вычислить интеграл</Button>
  </div>
  )
}