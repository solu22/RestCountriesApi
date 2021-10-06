import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Appbar from "../Components/Appbar";
import TablePage from "../Components/Table";
import useCountry from "../custom-hook/useCountry";
import { AppState } from "../Redux/Reducers";
import { Country } from "../types";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const countryData = useCountry();
  const {error, isLoading} = useSelector((state:AppState)=> state.countryReducer)
  const filteredCountry = (countryData as Country[]).filter((country: any) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Appbar search={search} onChange={handleChange} />
        {error && <p>{error}</p>}
        {!isLoading && filteredCountry.length === 0 && (
          <p>No Countries found</p>
        )}
        {isLoading && <p>Loading Data</p>}
        <TablePage countries={filteredCountry} />
      </Container>
    </>
  );
};

export default HomePage;
