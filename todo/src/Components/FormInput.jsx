import { useState } from "react"

export const FormInput  = ({handleformSubmittion})=>{

    const [inputValue, setInputValue] = useState("");

    const getInputValue = (e)=>{
        setInputValue(e.target.value);
    }

    const handleForm = (e)=>{
        e.preventDefault();
        handleformSubmittion(inputValue)
        clearInputBox();
    }

    const clearInputBox = ()=>{
        setInputValue("");
    }
    return(
        <>
       <form onSubmit = {handleForm}>
            <input type="text" placeholder = "Enter Todo item" value={inputValue} onChange={getInputValue}/>
            <button type="submit">Add item</button>
        </form>
        </>
    )
}
