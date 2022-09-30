import { useState } from "react"

export const useList=(initialValue=[])=>{
    const [list, setList] = useState(initialValue)
    //Agregar
        const addList=(element)=>{
            setList((oldValue)=>[...oldValue,element])
        }
    //Modificar
    //TODO: Checar bien que funcione
        const updateList=(index,newValue)=>{
          const newList= list.splice(index,1,newValue)  
          setList(newList)
        }
    //Eliminar
        const removeList=(element)=>{
            const indexElement= list.indexOf(element)
            const newList= list.filter((_,index)=> index !== indexElement)
            setList(newList)
            console.log(element)
        }
    //isEmpty?
        const isEmpty=()=> list.length !== 0
    
    //Ordenar
        const orderList=()=>list.sort()
    //Limpiar lista
    const clearList=()=> setList(initialValue)

    return {list,addList,updateList,removeList,isEmpty,clearList,orderList}
}


