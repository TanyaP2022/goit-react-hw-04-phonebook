import { nanoid } from 'nanoid'

import {ContactFormStyle, ContactFormLabel, ContactFormInput} from './ContactFormStyled'
import { useState } from 'react';

export default function ContactForm({onSubmit, onChange}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    let nameId = nanoid();
    let contactId = nanoid();
    
   const handleChange = e => {
       const { name, value } = e.currentTarget;

       switch (name) {
           case 'name':
               setName(value);
               break;
           
           case 'number':
               setNumber(value);
               break;
           
           default:
               return;
       }
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ number, name });
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <ContactFormStyle onSubmit={handleSubmit}>
            <ContactFormLabel htmlFor={nameId}>
                Name <ContactFormInput
                    id={nameId}
                    type="text"
                    name="name"
                    value ={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                />
            </ContactFormLabel>
            <ContactFormLabel htmlFor={contactId}>
                Number <ContactFormInput
                    id={contactId}
                    type="tel"
                    name="number"
                    value ={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                />
            </ContactFormLabel>
            <button type="submit">add contact</button>
        </ContactFormStyle>
        );
    }