import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import s from './Form.module.css'

const App = () => {
const [contacts, setContacts] = useState(
  JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContact = ({ name, number }) => {
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }
    setContacts(prev => [
      ...prev,
      { name: name, number: number, id: nanoid() },
    ]);
    
  }


  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleChangedFilter = e => {
    setFilter(e.target.value);
  };

    const deleteContact = (id) => {
      setContacts(contacts.filter(contact => contact.id !== id));
    };
  
return (
  <>
    <div className={s.container}>
      <h1>Phonebook 📱</h1>
      <Form onSubmit={handleContact} />
      <Filter onFilter={handleChangedFilter} />
      <h2>Contacts 🖇️</h2>
      <ContactsList
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  </>
);
    
}

export default App;
