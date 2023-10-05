import React from "react"
import { MenuItem, TextField } from "@mui/material"
import styles from "./DataIntegral.module.scss"
import { integralsMethods, stepsVersions, methodLeft, methodRight, methodParabol, methodTrap } from "./helpers/allMethods"

export const DataIntegral = () => {
  const [method, setMethod] = React.useState("right"); // выбранный метод интегрирования
  const [step, setStep] = React.useState("regular"); // выбранный тип шага
  const [func, setFunc] = React.useState(""); // введенная пользователем функция
  const [pieces, setPieces] = React.useState(""); // введенное пользователем количество разбиений
  const [lowerLimit, setLowerLimit] = React.useState(""); // введенный пользователем нижний предел интегрирования
  const [upperLimit, setUpperLimit] = React.useState("");
  // функция для обработки изменений в TextField с функцией
  const handleFuncChange = (event) => {
    setFunc(event.target.value);
  };

  // функция для обработки изменений в TextField с количеством разбиений
  const handlePiecesChange = (event) => {
    setPieces(event.target.value);
  };

  // функция для обработки изменений в TextField с нижним пределом интегрирования
  const handleLowerLimitChange = (event) => {
    setLowerLimit(event.target.value);
  };

  // функция для обработки изменений в TextField с верхним пределом интегрирования
  const handleUpperLimitChange = (event) => {
    setUpperLimit(event.target.value);
  };
  
  const calculateIntegral = () => {
    let result = 0;
  
    // проверяем, какой метод интегрирования выбран
    switch (method) {
      case "right":
        result = methodRight(func, lowerLimit, upperLimit, pieces);
        break;
      case "left":
        result = methodLeft(func, lowerLimit, upperLimit, pieces);
        break;
      case "parab":
        result = methodParabol(func, lowerLimit, upperLimit, pieces);
        break;
      case "trap":
        result = methodTrap(func, lowerLimit, upperLimit, pieces);
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
    <button onClick={() => console.log(calculateIntegral())}>Вычислить интеграл</button>
  </div>
  )
}