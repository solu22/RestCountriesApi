import { Container } from "@material-ui/core";
import React, { useState } from "react";
import Appbar from "../Components/Appbar";
import TablePage from "../Components/Table";

import useCountry from "../custom-hook/useCountry";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [countries, isLoading, error] = useCountry();
  const filteredCountry = countries.filter((country: { name: string }) =>
    country.name.toLowerCase().includes(search.toLowerCase())
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
