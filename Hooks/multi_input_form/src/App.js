import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const  [data, setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    gender:"",
  });

  const getFormValues = (e)=>{
    const key = e.target.name;
    const value = e.target.value;
    setData({
      ...data ,[key]:value 
    })
  }

  const showData = (e)=>{
    e.preventDefault();
    console.table(data);
  }

  return (
    <div className="App">
     <h1>Multi input form handling</h1>
      <form onSubmit = {showData}>
        <input type = "text" name = "firstname" placeholder = "firstname" value={data.firstname} onChange = {getFormValues}></input>
        <input type = "text" name="lastname" placeholder = "lastname" value={data.lastname} onChange = {getFormValues}></input>
        <input type = "text" name ="email" placeholder = "email" value={data.email} onChange = {getFormValues}></input>

        
        <input type='radio' name = "gender" value="male" checked = {data.gender === "male"} onChange={getFormValues}/>
        <label>Male</label>
        
        <input type='radio' name = "gender" value="female" checked ={data.gender === "female"} onChange={getFormValues}/>
        <label>Female</label>

        <input type = "submit"></input>
      </form>
    </div>
  );
}

export default App;
