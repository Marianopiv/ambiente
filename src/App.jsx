import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(null)

  const formulario = useRef(null)

  const handleInput = (e) => {
    const {name,value} = e.target
    setAuth({...auth,[name]:value})
  }

  const send = (e) => {
    e.preventDefault()
    console.log(auth)
    formulario.current.reset()
    setAuth(null)
  }

  return (
    <form ref={formulario} onSubmit={send} className="App">
      <h1>Form</h1>
      <input onChange={handleInput} name="email" type="email" />
      <input onChange={handleInput} name="password" type="password" />
      <button disabled={!auth}>Submit</button>
    </form>
  );
}

export default App;
