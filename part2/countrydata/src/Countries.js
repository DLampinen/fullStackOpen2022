import Weather from './Weather';

const Countries = ({ filteredCountries, handleShowClick }) => {
  if (filteredCountries.length === 1) {
    return (
      <>
        <h2>{filteredCountries[0].name.common}</h2>
        <div>capital {filteredCountries[0].capital}</div>
        <div>area {filteredCountries[0].area}</div>
        <h4>languages</h4>
        <ul>
          {Object.values(filteredCountries[0].languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img style={{ width: '150px' }} src={filteredCountries[0].flags.png} />
        <Weather capital={filteredCountries[0].capital} />
      </>
    );
  }
  if (filteredCountries.length < 10) {
    return (
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {filteredCountries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}{' '}
            <button
              type="button"
              value={country.name.common}
              onClick={handleShowClick}
            >
              show
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <br /> Too many matches, specify another filter
    </div>
  );
};

export default Countries;
