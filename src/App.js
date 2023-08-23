import React, { useState } from "react"

const App = () => {
  
    const [formSubmit, setFormSubmit] = useState({
      name: "",
      number: "",
      email: ""
    })

    const [showData, setShowData] = useState(false)

    const handleChange = (e) => {
      const {name, value} = e.target 
      setFormSubmit((prevData)=>({
        ...prevData,
        [name]: value
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setShowData(true)
    }


    return(
      <div className="all-block">
        <form onSubmit={handleSubmit}>
          <h2>Введите свои данные</h2>
          <input value = {formSubmit.name} onChange={handleChange} required placeholder="Ваше ФИО"
           name="name" type="text" 
           className="block_input"></input>
          <input value = {formSubmit.number} onChange={handleChange} required placeholder="Ваш номер телефона"
           name="number" type="phone" className="block_input"></input>
          <input value = {formSubmit.email} onChange={handleChange} type="email"  name="email" placeholder='E-mail' className="block_input"></input>
          <button className="block_button">submit</button>
        </form>
        {showData&& (<div className="block2">
          <p>ФИО: {formSubmit.name}</p>
          <p>Номер: {formSubmit.number}</p>
          <p>Почта: {formSubmit.email}</p>
        </div>)}
      </div>
    )
  }


export default App;
