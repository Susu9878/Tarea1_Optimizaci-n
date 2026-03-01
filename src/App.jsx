import { useState } from 'react'
import './App.css'
import HijoA from './HijoA'
import HijoB from './HijoB'
import HijoC from './HijoC'
import DynamicList from './dynamicList'

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

      <DynamicList />
    </div>
  );
}

export default App
