
import  { useEffect, useState } from 'react'
import axios from 'axios'
import { Country } from '../types'

const baseURL = 'https://restcountries.eu/rest/v2/all'
const useCountry = ()=> {
    const [countries, setCountries] = useState<Country[]>([])
    const [error, setError]= useState()
    useEffect(() => {
       axios.get(baseURL)
       .then(res => setCountries(res.data))
       .catch(err => setError(err))
       
    }, [])

    return [countries, error]

}

export default useCountry
