import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')
    const isColor = (input) => {
        const s = new Option().style;
        s.color = input;
        return s.color !== ''
    }
    const handleSubmit = (e) => {
        if(isColor(input)){
            e.preventDefault()
            props.addColor(input)
            e.target.reset()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm