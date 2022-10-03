import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

import React, {Component } from 'react';
import {ContactFormStyle, ContactFormLabel, ContactFormInput} from './ContactFormStyled'


class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    nameId = nanoid();
    contactId = nanoid();


    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { number, name } = this.state;
        this.props.onSubmit({ number, name });
        this.reset();
    };
    reset = () => {
        this.setState({ name: '', number:'' });
    };

    render() {
        const { nameId, contactId } = this;
    return (
        <ContactFormStyle onSubmit={this.handleSubmit}>
            <ContactFormLabel htmlFor={nameId}>
                 Name <ContactFormInput
                    id={nameId}
                    type="text"
                    name="name"
                    value ={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                />
            </ContactFormLabel>
            <ContactFormLabel htmlFor={contactId}>
                 Number <ContactFormInput
                    id={contactId}
                    type="tel"
                    name="number"
                    value ={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                />
            </ContactFormLabel>
            <button type="submit">add contact</button>
        </ContactFormStyle>
        );
    }
}

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};


export default Form;