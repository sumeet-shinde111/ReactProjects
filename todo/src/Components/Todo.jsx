import { useState } from "react"
import { FormInput } from "./FormInput"
import { ItemList } from "./ItemList"

export const Todo = ()=>{
  
    const [list,setList] = useState([])

    const handleForm = (inputValue)=>{
       
        if(!inputValue){
            return
        }else{
            if(list.includes(inputValue)){
                alert("Item already exists")
            }else{
                setList((prevList)=>{
                    return[...prevList,inputValue];
                })
            }
           
        }
    }

    return(
        <>
            <h1>Todo</h1>
            <FormInput handleformSubmittion = {handleForm}/>
            <ItemList listItem={list}/>
        </>
    )
}