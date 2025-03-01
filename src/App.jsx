import { useState } from 'react'
import './App.css'
import MyContext from './Context/MyContext'
import MyCard from './Components/MyCard.jsx'

function App() {
 const [inputValue, setInputValue] = useState('Adarsh');
 const handleInputChange = (event) => {
  setInputValue(event.target.value);
};
  return (
   
    <MyContext.Provider value={inputValue}>
    <h2>Hello World,i am <input name="myInput" placeholder='adarsh' onChange={handleInputChange}/> your programmer</h2>
    <MyCard/>
    </MyContext.Provider>
  )
}

export default App
