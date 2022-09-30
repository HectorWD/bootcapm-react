import { useContador } from "./hooks/useContador"

const Contador = () => {
    const {contador,increment,decrement,reset} = useContador(0,10,2);
  return (
    <div>
        <div onClick={reset}>{contador} </div>
        <button onClick={increment}>+</button>
        <button onClick={decrement} >-</button>
    </div>
  )
}
export default Contador