import { useState } from 'react'

import styles from "./App.module.scss"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div classname={styles.main_container}>
        {/* <h1>Это прикольное приложение</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Provider>
    
  )
}

export default App
