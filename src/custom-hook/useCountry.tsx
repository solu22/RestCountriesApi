
import  { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountriesThunk } from '../Redux/actions'
import { AppState } from '../Redux/Reducers'


const useCountry = ()=> {
    const dispatch = useDispatch()
    const {countries, isLoading, error} = useSelector((state: AppState)=> state.countryReducer)
    useEffect(() => {
       
       dispatch(fetchCountriesThunk())
       
    }, [dispatch])
  return [ countries, isLoading, error] as const 
}

export default useCountry
