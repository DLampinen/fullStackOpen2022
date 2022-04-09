import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchCountry from './SearchCountry';

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

  return (
    <div>
      <SearchCountry
        text="find countries"
        country={searchCountry}
        onChange={handleSearchCountry}
      />
    </div>
  );
};

export default App;
