import { Button } from "@mui/material"
import styles from "./Home.module.scss"
import { useNavigate } from "react-router-dom"
export const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div className={styles.home_container}>
      
      <Button onClick={() => navigate("/integral")} variant="contained" type="submit">Интегрирование</Button>
      {/* <Button onClick={() => navigate("/diff")} variant="contained" type="submit">Дифференцирование</Button> */}
    </div>
  )
}