// eslint-disable-next-line
const SearchCountry = ({ text, country, onChange }) => (
  <>
    {text} <input value={country} onChange={onChange} />
  </>
);

export default SearchCountry;
