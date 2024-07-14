import { useState } from "react"

export const FormInput  = ()=>{

    const [inputValue, setInputValue] = useState("");

    const getInputValue = (e)=>{
        setInputValue(e.target.value);
    }



    return(
        <>
        <form >
            <input type="text" placeholder = "Enter Todo item" value={inputValue} onChange={getInputValue}/>
            <button type="submit">Add item</button>
        </form>
        </>
    )
}
