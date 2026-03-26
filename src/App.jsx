import { useState } from "react"
import Form from "./Components/Form"
import { dataContextAPI } from "./ContextAPI/ContextAPI";


function App() {
  const [diseaseResult, setDiseaseResult] = useState("");
  return (
    <>
      <dataContextAPI.Provider value={{ diseaseResult, setDiseaseResult }}>
        <Form />
      </dataContextAPI.Provider>
    </>
  )
}

export default App
