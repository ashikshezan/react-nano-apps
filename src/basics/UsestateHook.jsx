// import React, { useState, useEffect } from 'react'
import { useForm } from './useForm'
import { useState } from "react"
import { Hello } from './Hello'

export const UsestateHook = () => {
    const [values, handleChange] = useForm({ username: "", password: "" })

    // useEffect(() => {
    //     const mouseMovement = e => {
    //         console.log(e)
    //     }
    //     window.addEventListener("mousemove", mouseMovement)
    //     console.log('Using the effect!')
    //     return () => {
    //         window.removeEventListener("mousemove")
    //     }
    // }, [])

    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <input name="username" type="text" onChange={handleChange} value={values.username} />
            <input name="password" type="password" onChange={handleChange} value={values.password} />
            <button onClick={() => setToggle(prev => (!prev))}>Toggle</button>
            {toggle ? <Hello /> : ""}

        </div>
    )
}

export default UsestateHook