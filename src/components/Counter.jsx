import { useState } from 'react'

// imutabilidade

//usuarios = ['diego123', 'pceolat', 'fernando45']
//usuarios.push('rafacamarda') //sem imutabilidade

//novoUsuario = [...usuarios, 'rafacamarda'] //imutabilidade


export function Counter() {
  let [counter, setCounter] = useState(0)


  function increment() {
    setCounter(counter + 1)
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
