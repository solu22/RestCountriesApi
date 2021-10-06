import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesThunk } from "../Redux/actions";
import { AppState } from "../Redux/Reducers";

const useCountry = () => {
  const dispatch = useDispatch();
  const countryData = useSelector(
    (state: AppState) => state.countryReducer.countries
  );
  useEffect(() => {
    dispatch(fetchCountriesThunk());
  }, [dispatch]);
  return countryData

}

export default useCountry;

