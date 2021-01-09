import { useEffect, useState, useRef } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ data: undefined, loading: false })
    const isCurrent = useRef(true)

    useEffect(() => {

        return () => {
            isCurrent.current = false
        }
    }, [])

    useEffect(() => {
        setState(prevState => ({ data: prevState.data, loading: true }))
        const fetchData = async () => {
            const resp = await fetch(url)
            const resp_text = await resp.text()
            if (isCurrent) {
                setTimeout(() => {
                    setState({ data: resp_text, loading: false })
                }, 3000);
            }
        }
        fetchData()
    }, [url, setState])

    return state
}
