import { useState } from "react"
import { FormInput } from "./FormInput"
import { ItemList } from "./ItemList"

export const Todo = ()=>{
    const [inputValue, setInputValue] = useState("");
    const [list,setList] = useState([])

    const getInputValue = (e)=>{
        setInputValue(e.target.value);
    }

    const handleForm = (e)=>{
        e.preventDefault();
        if(!inputValue){
            return
        }else{
            (list.includes(inputValue)) ?  alert("Item already exists") : setList([...list,inputValue]);
            
        }
    }
   
    return(
        <>
            <h1>Todo</h1>
            <form onSubmit = {handleForm}>
                <input type="text" placeholder = "Enter Todo item" value={inputValue} onChange={getInputValue}/>
                <button type="submit">Add item</button>
             </form>
        </>
    )
}