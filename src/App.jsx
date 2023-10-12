import { useState } from 'react'

import styles from "./App.module.scss"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { DataIntegral } from './pages/SelectDataForIntegral/DataIntegral'
import { DataDiff } from './pages/SelectDataDiff/DataDiff'


function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  //onClick={() => navigate("/")}
  
  return (
    <Provider store={store}>
      <div className={styles.main_container}>
        <div>
        <Link to="/">
          <h1 className={styles.he}>Вычислительная математика</h1>
        </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integral" element={<DataIntegral />} />
          <Route path="/diff" element={<DataDiff />} />
        </Routes>
      </div>
    </Provider>
    
  )
}

export default App
