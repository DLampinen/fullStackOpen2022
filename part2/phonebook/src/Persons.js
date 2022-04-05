const Persons = ({ persons }) => (
  <>
    <h2>Numbers</h2>
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  </>
);

export default Persons;
