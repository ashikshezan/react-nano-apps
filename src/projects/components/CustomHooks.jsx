import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [response, setResponse] = useState()
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(res => setResponse(res))

    }, [url])

    return response
}