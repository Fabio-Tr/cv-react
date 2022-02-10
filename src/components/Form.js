import { useState } from "react"

function Form() {

    const [value, setValue] = useState("")

    function handleInput(event) {
        console.log(event.target.value)
        setValue(event.target.value)
    }

    return (
        <form>
            <label htmlFor="name">Scrivi il tuo nome</label>
            <input 
            id="name" 
            name="name" 
            type="text" 
            required={true}
            onChange={handleInput} 
            value={value}>

            </input>
        </form>


    )
}

export default Form