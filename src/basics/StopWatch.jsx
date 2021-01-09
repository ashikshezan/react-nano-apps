import React, { useState, useEffect } from 'react'

export const StopWatch = () => {

    const [second, setSecond] = useState(0)
    const [isActivate, setIsActivate] = useState(false)
    useEffect(() => {
        let interval = null
        if (isActivate) {
            interval = setInterval(() => {
                setSecond(s => s + 1)
            }, 1000);
        }
        // else {
        //     clearInterval(interval)
        // }
        return () => {
            clearInterval(interval)
            // setSecond(0)
        }
    }, [isActivate])

    return (
        <div>
            <h1>Extra Time!</h1>
            <button onClick={() => setIsActivate(prv => !prv)}>{isActivate ? "Pause" : "Start"}</button>
            {/* <button>Pause</button> */}
            {/* <button>Lap</button> */}
            <button onClick={() => {
                setSecond(0)
                setIsActivate(false)
            }}>Reset</button>

            <h1>{second}</h1>
            {console.log(second)}

            {/* <p>1. Lap time: 4.55..</p> */}
            {/* <p>2. Lap time: 2.32..</p> */}
        </div>
    )
}
