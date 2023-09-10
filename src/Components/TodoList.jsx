import { React, useState, useEffect } from "react";
import "../Styles/todo.css";
import { Plus, PencilSquare, Trash3Fill } from "react-bootstrap-icons";

const getData = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [listItems, setListItems] = useState(getData());
    const [showUpaate, setShowUpdate] = useState(false);
    const [showAdd, setShowAdd] = useState(true);
    const [clickedId, setClickedId] = useState();
    const [addClass, setAddClass] = useState("");
    const [toggle,setToggle] = useState({
        value:false,
        message:""
    });

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(listItems));
        setTimeout(function() {
            setToggle({
                value:false,
                message:""
            })
        }, 2000);
    }, [listItems]);

    const getinputValues = (e) => {
        const userInputValue = e.target.value;
        setInputValue(userInputValue);
    };

    const AddItems = (e) => {
        console.log(e.target.id)
        if (inputValue.length === 0) {
            alert("Empty value");
        } else {
            const values = (oldItems) => {
                return [...oldItems, inputValue];
            }
            setListItems(values);
            setInputValue("");
            localStorage.setItem("list", JSON.stringify(listItems));
            setToggle({
                value:true,
                message:"New item added successfully"
            })
        }

    }

    const deleteItem = (id) => {
        setListItems((oldItems) => {
            return oldItems.filter((val, index) => {
                return index !== id;
            })
        })
        setToggle({
            value:true,
            message:"Item deleted successfully"
        })
    }

    const editItem = (id, value) => {
        setInputValue(value);
        setClickedId(id);
        setShowUpdate(true);
        setShowAdd(false);
        setAddClass("column");
    };

    const update = (id) => {
        const updatedValue = listItems.splice(id, 1, inputValue);
        if (inputValue.length === 0) {
            alert("Empty value");
        } else {
            setListItems((oldItems) => {
                return [...oldItems, updatedValue];
            });
            localStorage.setItem("list", JSON.stringify(listItems));
            setToggle({
                value:true,
                message:"Item updated successfully"
            })
            setInputValue("");
            setShowUpdate(false);
            setShowAdd(true);
            setAddClass("");
            console.log("1");
        }
    }

    const clearText = () => {
        setInputValue("");
    }

    const cancel = ()=>{
        setAddClass("");
        setShowUpdate(false)
        setShowAdd(true);
        window.location.reload()
    }

    return (
        <>
            <div className="container">
                <h1 className="heading"><span className="todo">Todo</span> <span className="list">List</span> </h1>
                <div className="childContainer">
                    <div className={`wrapper ${addClass}`}>
                        <input type="text" placeholder="enter item" onChange={getinputValues} value={inputValue} id="userInput" />
                        {showAdd && <Plus className="add" onClick={AddItems} id="addItem" />}
                        {
                            showUpaate &&
                            <div className="">
                                <input type="button" className="update" value={"Update"} onClick={() => { return update(clickedId) }} />
                                <input type="button" className="clear" value={"Clear"} onClick={() => { return clearText() }} />
                                <input type="button" className="cancel" value={"Cancel"} onClick={() => { return cancel() }} />
                            </div>
                        }
                    </div>
                    {
                        toggle.value && <div className="toastNotification">
                            {toggle.message}
                        </div>
                    }   
                    <div className="listWrapper">
                        <ul>
                            {
                                listItems.map((value, index) => {
                                    return (
                                        <li key={index}>
                                            <div className={`item`} >
                                                <span className="itemName" id={index}>{value}</span>
                                                <div className="controls">
                                                    <PencilSquare 
                                                        className="controlBtns edit" 
                                                        id={index} 
                                                        onClick={() => { return editItem(index, value) }} />

                                                    <Trash3Fill 
                                                        className="controlBtns delete"
                                                        value={"Delete"}
                                                        onDoubleClick={() => { return deleteItem(index) }}
                                                        />
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
export default TodoList;