import { nanoid } from 'nanoid'
import  Form  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container, ContainerHed, ContainerHeder } from './AppStyled';
import { useState, useEffect } from 'react';


export default function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

const addContact = ({ name, number }) => {
  const contact = {
    name,
    number,
    id: nanoid(),
  };

  if (
    contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()|| contact.number.toLowerCase() === number.toLowerCase()
    )
  ) {
    return alert(`${name}/${number} is already in contacts!`);
  }
    return setContacts([contact, ...contacts])
  };

 const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const currentContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase())|| contact.number.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const deleteContact = contactId => {
    setContacts(prevState=> prevState.filter(contact => contact.id !== contactId),);
    };

    return (
      <Container>
        <ContainerHed>Phonebook</ContainerHed>
          <Form onSubmit={addContact} />
        <ContainerHeder>Contacts</ContainerHeder>
        <Filter
          filter={filter}
          onChange={handleChangeFilter}
        />
        <ContactList
          items={currentContacts()}
          onDeleteContact={deleteContact} />
      </Container>
    );
  }