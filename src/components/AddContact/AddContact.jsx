import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdContacts } from 'redux/option';
import { Field, ContainerForm, BtnDisabled } from './AddContact.styled';
import { toast } from 'react-hot-toast';

export function AddContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dataState = {
    name,
    number,
  };
  const { items: contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  // console.log(contacts);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(dataState);
    reset();
  };

  const onSubmit = ({ name, number }) => {
    const newContact = {
      name,
      number,
    };

    contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? toast.error(`${name} is in your Contacts`)
      : dispatch(fetchAdContacts(newContact));
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <label>
        Name
        <Field
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name..."
          onChange={handleChange}
        />
      </label>
      <label>
        Phone number
        <Field
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number..."
          onChange={handleChange}
        />
      </label>
      <BtnDisabled type="submit" disabled={!name || !number}>
        Add contact
      </BtnDisabled>
    </ContainerForm>
  );
}

// AddContact.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
