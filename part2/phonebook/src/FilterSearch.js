const FilterSearch = ({ text, value, onChange }) => (
  <div>
    {text} <input value={value} onChange={onChange} />
    <br />
    <br />
  </div>
);

export default FilterSearch;
