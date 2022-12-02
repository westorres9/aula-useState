import { useState } from "react"


function App() {

  const [count, setCount] =useState(0);

  function Increase() {
    setCount(count + 1)
  }

  function Decrease() {
    setCount(count - 1);
  }

  function Erase() {
    setCount(0);
  }


  return (
    <>
      <h1>Contagem = {count}</h1>
      <button onClick={Increase}>Incrementar</button>

      <button onClick={Decrease}>Diminuir</button>

      <button onClick={Erase}>Zerar</button>
    </>
  )
}

export default App
