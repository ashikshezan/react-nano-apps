import React, { useState, useEffect } from 'react'
import { useFetch } from './components/CustomHooks'

const API_URL = "https://randomuser.me/api"

export const Person = () => {

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {

        fetch(API_URL)
            .then(res => res.json())
            .then(res => setUserInfo(res.results))

    }, [])

    return (
        <div>
            {console.log(userInfo)}
            {/* {userInfo ?  ; : "data not ready"} */}
            <button>Counter</button>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

        </div>
    )
}

