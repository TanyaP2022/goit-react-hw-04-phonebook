import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import  Form  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container, ContainerHed, ContainerHeder } from './AppStyled';


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  
  addContact = ({name, number} ) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(({ contacts }) => {
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()|| contact.number.toLowerCase() === number.toLowerCase()
        )
      ) {
        return alert(`${name}/${number} is already in contacts!`);
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };


  handleChangeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  };
 

  currentContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase())|| contact.number.toLowerCase().includes(filter.toLowerCase());
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  render() {
    const {  addContact, handleChangeFilter, deleteContact, currentContacts } = this;
    const { filter } = this.state;


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
};


export default App;