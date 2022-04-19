import { useState, useEffect } from 'react';
import FilterSearch from './FilterSearch';
import PersonForm from './PersonForm';
import Persons from './Persons';
import personService from './services/personService';
import Notification from './Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const checkIfUnique = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (checkIfUnique === true) {
      if (
        window.confirm(
          `${personObject.name} is already added to the phonebook, replace the old number with a new one?`
        ) === true
      ) {
        // need to find the id for the existing object
        const updatedObjectWithId = persons.find(
          (person) =>
            person.name.toLowerCase() === personObject.name.toLowerCase()
        );
        // Update the new number
        updatedObjectWithId.number = personObject.number;
        // Update the list with numbers. The new number comes last.
        personService
          .update(updatedObjectWithId.id, updatedObjectWithId)
          .then((returnedPerson) => {
            setPersons(
              persons
                .filter((person) => person.name !== updatedObjectWithId.name)
                .concat(returnedPerson)
            );
            setMessage(`Updated ${returnedPerson.name} successfully`);
            setTimeout(() => {
              setMessage(null);
            }, 4000);
          })
          .catch((error) => {
            setMessage(
              `Information of ${updatedObjectWithId.name} was already removed from server`
            );
            setTimeout(() => {
              setMessage(null);
            }, 4000);
          });
      }
      // empty the input fields
      setNewName('');
      setNewNumber('');
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setMessage(`Added ${returnedPerson.name} successfully`);
        setTimeout(() => {
          setMessage(null);
        }, 4000);
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const deletePerson = (name, id) => {
    if (window.confirm(`Delete ${name}?`) === true) {
      personService.remove(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <FilterSearch
        text="filter shown with: "
        name={searchName}
        onChange={handleSearchName}
      />
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        handleNameChange={handleNameChange}
        numberValue={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
