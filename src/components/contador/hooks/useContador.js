import { useState } from "react";


export const useContador=(initialValue=0,max=10000,min=0)=>{
    const [contador, setContador] = useState(initialValue)
    const increment=()=>{
        if(contador < max) setContador((oldvalue)=>oldvalue+1)
    }
    const decrement=()=>{
        if(contador != 0 && contador > min) setContador((oldvalue)=>oldvalue-1)
    }
    const reset=()=>{
        setContador(initialValue)
    }
    return {contador,increment,decrement,reset}
}

