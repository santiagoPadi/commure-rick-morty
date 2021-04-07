import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../../utils/useFetch'
import Header from './components/header'
import PeopleList from './components/peopleList'

const  MainRick =  () => {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)
    const callInfo = async () => {
    try {
        const _data = await axios.get('https://rickandmortyapi.com/api/character')
        const validate = _data !== null && _data !== undefined && _data.data && _data.data.results
        if(validate) {
          setData(_data.data.results)
        }
    } catch (error) {
        setError(error)
    } finally {
        setLoading(false)
    }
}
useEffect(() => {
   callInfo()
    
}, [])
const validation = data !== null && !loading
    return (
        <div className="h-screen">
            <Header />
            {validation && <PeopleList data={data}/>}
        </div>
    )
}

export default MainRick
