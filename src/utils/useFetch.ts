import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = (url:string) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)
    
    useEffect(() => {
        const caller = async () => {
            try {
                const _data = await axios.get(url)
                const validate = _data !== null && _data !== undefined
                if(validate) {
                    setData(_data)
                }
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
    
        }
        caller()
        return () => {
            setData(null)
            setLoading(true)
            setError(null)
        }
    }, [url])
    return {
        data, loading, error
    }

}