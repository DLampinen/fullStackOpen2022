/* eslint-disable react/prop-types */
const Persons = ({ persons, deletePerson }) => (
  <>
    <h2>Numbers</h2>
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number} &nbsp;&nbsp;
          <button
            type="button"
            onClick={() => deletePerson(person.name, person.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

export default Persons;
