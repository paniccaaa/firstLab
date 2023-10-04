import { MenuItem, TextField } from "@mui/material"
import styles from "./DataIntegral.module.scss"


export const DataIntegral = () => {
  const integralsMethods = [
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
  const stepsVersions = [
    {
      value: "regular",
      label: "Постоянный шаг"
    },
    {
      value: "variable",
      label: "Переменный шаг"
    }
  ]
  return (
    <div>
      <h1 className={styles.integral_text}>Вычисление интеграла</h1>
      <TextField
        id="outlined-select-method"
        select
        //label="Метод интегралов"
        defaultValue="right"
        helperText="Выберите метод вычисления интеграла"
      >
        {
          integralsMethods.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        }
      </TextField>
      <TextField
        id="outlined-select-step"
        select
        //label="Выбор шага"
        defaultValue="regular"
        helperText="Выберите шаг"
      >
        {
          stepsVersions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        }
      </TextField>
    </div>
  )
}