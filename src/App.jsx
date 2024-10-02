import { useState } from 'react'

import imageOne from './assets/image1.jpg'
import imageTwo from './assets/image2.jpg'
import imageThree from './assets/image3.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a target="_blank">
          <img src={imageOne} className="logo" alt="Vite logo" />
        </a>
       
        <a target="_blank">
          <img src={imageTwo} className="logo react" alt="React logo" />
        </a>
         <a  target="_blank">
          <img src={imageThree} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Ознобишина Дарья Юрьевна</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Группа 426ВЕБ
        </p>
      </div>
      <a href="https://github.com/KuiYL" className="read-the-docs">
        Нажмите, чтобы перейти на GitHub
      </a>


    </>
  )
}

export default App
