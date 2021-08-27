import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import Appbar from '../Components/Appbar'
import TablePage from '../Components/TablePage'

import useCountry from '../custom-hook/useCountry'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const countryData = useCountry()

  const filteredCountry = countryData?.filter((country: { name: string }) => country.name.toLowerCase().includes(search.toLowerCase()))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setSearch(e.target.value)



  }

  return (
    <Container maxWidth="lg">
      <Appbar search={search} onChange={handleChange} />
      <TablePage countries={filteredCountry} />
    </Container>
  )
}

export default HomePage


