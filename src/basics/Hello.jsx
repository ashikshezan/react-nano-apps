import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'


export const Hello = () => {
    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))

        // return () => {
        //     console.log("Hello is unmounting")
        // }

    }, [count])


    return (
        <>
            <div>Count: {count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>Increiment</button>
            <div>{!data ? "loading" : data}
            </div>
        </>
    )
}
