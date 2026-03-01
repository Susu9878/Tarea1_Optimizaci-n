import { useState } from 'react'
import './App.css'
import HijoA from './components/HijoA'
import HijoB from './components/HijoB'
import HijoC from './components/HijoC'

function App() {
  const [count, setCount] = useState(0)

  console.log("Render App");

  return (
    <div>
      <h1>Contador: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>

      <HijoA />
      <HijoB />
      <HijoC />
    </div>
  );
}

export default App
