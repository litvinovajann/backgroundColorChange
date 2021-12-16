import './App.css';
import { useState } from "react";
//import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';

const defaultColors = {
  firstColor: "#ffff00",
  secondColor: "#000044",
  thirdColor: "#ff0000",
}

//  убрать кнопку
//  менять фон, если все инпуты валидные
//  невалидные инпуты обводить красным

function App() {
  const [colors, setColors] = useState(defaultColors)
  const [background, setBackground] = useState(() => {
    const initialColors = Object.keys(defaultColors).map((oneColor)=>(defaultColors[oneColor])).join(',');
    return `linear-gradient(to bottom,${initialColors}`;
  });
  
  function handleChange(e) {
    setColors((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    handleAllInputsChange(e) 
  }
  function handleAllInputsChange(e) {
   e.preventDefault(); 
   const insertColors = Object.keys(colors).map((oneColor)=>(colors[oneColor])).join(',');
   setBackground(`linear-gradient(to bottom,${insertColors})`); 
  }

  return (
    <div className="App" 
      style={{ background }}
    >
      <form
      >
      {
        Object.keys(defaultColors).map((oneColor)=> (
          <input 
            key={oneColor}
            value={colors[oneColor]}
            onChange={(e) => {handleChange(e)}}
            name={oneColor}
          />)
        )
      }
      </form>
    </div>
  );
}

export default App;