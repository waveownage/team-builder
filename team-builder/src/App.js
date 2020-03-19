import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [formState, setFormState] = useState([
    {
      Id: 1
      Name: "BoB"
      Email: "acb.gmail.com"
      Role:  "Student"
    }
  ]);

  const addFormHandler = newForm => {
    console.log("adding Form", newForm);
    setFormState([...formState, newForm]);
  };

}

export default App;
