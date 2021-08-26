import React, { useState } from 'react'
import Appbar from '../Components/Appbar'
import TablePage from '../Components/TablePage'

import useCountry from '../custom-hook/useCountry'

const HomePage = () => {
    const[search, setSearch] = useState('')
  const[countries] = useCountry()

    const filteredCountry = countries?.filter((country: {name: string}) => country.name.toLowerCase().includes(search.toLowerCase()))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
        setSearch(e.target.value)
        //console.log(e.target.value);
        
       
      }

    return (
        <div>
            <Appbar search={search} onChange={handleChange}/>
            <TablePage countries={filteredCountry}/>
        </div>
    )
}

export default HomePage


