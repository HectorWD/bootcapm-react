import { useState } from "react"
import { useList } from "./hooks/useList";

const CustomForm = () => {
    const [task, setTask] = useState('');
    const {list,addList,updateList,removeList,isEmpty,clearList,orderList}= useList([]);
    const handleChange=(e)=>{
        setTask(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addList(task)
        setTask('')
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Inserte una tarea" onChange={handleChange} value={task} /><br/>
        <button type="submit">Agregar</button>
        <button onClick={clearList}>Limpiar</button>
        <button onClick={orderList} >Ordenar</button>
    </form>
    {list.length !== 0 ? 
    list.map((element,index)=>
    <p key={index} onClick={(e)=>removeList(e.target.innerText)}>
        {element}
    </p>)
    :''}
    </div>
  )
}
export default CustomForm