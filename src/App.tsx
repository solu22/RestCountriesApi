/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import useCountry from './custom-hook/useCountry'

import { Country } from './types'



const App = () => {
  const [countries, error] = useCountry()

  if(! countries) return <p>loading</p>
  return (
    <>
      {countries.map((country:Country)=>(
        <p key = {country.name}>{country.name}</p>
      ))}
      
    </>
  )
}

export default App


