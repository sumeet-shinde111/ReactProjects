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
            if(list.includes(inputValue)){
                alert("Item already exists")
            }else{
                setList((prevList)=>{
                    return[...prevList,inputValue];
                })
                clearInputBox();
            }
           
        }
    }

    const clearInputBox = ()=>{
        setInputValue("");
    }
   
    return(
        <>
            <h1>Todo</h1>
            <form onSubmit = {handleForm}>
                <input type="text" placeholder = "Enter Todo item" value={inputValue} onChange={getInputValue}/>
                <button type="submit">Add item</button>
             </form>
             <ul>
                {
                    list.map((item,index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
             </ul>
        </>
    )
}