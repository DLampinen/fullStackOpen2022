import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchCountry from './SearchCountry';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);
  countries.map((country) => console.log(country.name.common));
  return (
    <div>
      <SearchCountry text="find countries" />
    </div>
  );
};

export default App;
