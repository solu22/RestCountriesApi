import React from 'react'
import { useParams } from 'react-router'
import useCountry from '../custom-hook/useCountry'
import { Country } from '../types'

type Params= {
    countryName: string
}

const SingleCountryPage = () =>{
const { countryName }= useParams<Params>()

const [countries]  = useCountry()

const details = countries?.find((country: any | Country[])=> country.name.toLowerCase() === countryName.toLowerCase())
return (
    <>
    {details && (
        <>
        {details.name}
        </>
    )}
    </>
)
 


}

export default SingleCountryPage