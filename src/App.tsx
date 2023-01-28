import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador es {count}
        </button>
        <p>
          Editar <code>src/App.tsx</code> y guarda para testear HMR
        </p>
      </div>
      <p className="read-the-docs">
        Haz click en los logos de Vite y React para aprender más
      </p>
    </div>
  )
}

export default App
