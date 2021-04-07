import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../../utils/useFetch'
import Header from './components/header'
import PeopleList from './components/peopleList'

const  MainRick =  () => {
    const [info, setinfo] = useState<any[]>([])
    const {data, loading} = useFetch('https://rickandmortyapi.com/api/character')

useEffect(() => {
    const validate = data !== null && data !== undefined && data.data && data.data.results
            if(validate) {
                setinfo(data.data.results)
            }
    
}, [data])
const validation = info !== null && !loading
    return (
        <div className="h-screen">
            <Header />
            {validation && <PeopleList data={info}/>}
        </div>
    )
}

export default MainRick
