import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchCountry from './SearchCountry';
import Countries from './Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  const handleShowClick = (event) => {
    event.preventDefault();
    setSearchCountry(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <div>
      <SearchCountry
        text="find countries"
        country={searchCountry}
        onChange={handleSearchCountry}
        onButtonClick={handleShowClick}
      />
      <Countries
        filteredCountries={filteredCountries}
        handleShowClick={handleShowClick}
      />
    </div>
  );
};

export default App;
