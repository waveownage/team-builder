import React, { useState } from "react";
import Members from "./Components/Members-List";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const [formState, setFormState] = useState([
    {
      Id: 1,
      Name: "BoB",
      Email: "acb.gmail.com",
      Role: "Student"
    }
  ]);

  const addFormHandler = newForm => {
    console.log("adding Form", newForm);
    setFormState([...formState, newForm]);
  };

  return (
    <div className="App">
      <Form addMember={addFormHandler} />
      <Members member={formState} />
    </div>
  );
}
export default App;
