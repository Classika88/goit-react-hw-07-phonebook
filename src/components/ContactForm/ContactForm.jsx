import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormChange = event => {
    const { name, value } = event.target;

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

  const handleFormSumbit = event => {
    event.preventDefault();

    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    addNewContact(newContact);
    setName('');
    setNumber('');
  };
  const addNewContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${newContact.name} is already in the contacts`);
      return;
    }

    dispatch(addContact(newContact));
  };
  return (
    <div>
      <form className={css.form} onSubmit={handleFormSumbit}>
        <p className={css.inputTitle}>Name</p>
        <input
          type="text"
          name="name"
          value={name || ''}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleFormChange}
          required
        />
        <p className={css.inputTitle}>Number</p>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleFormChange}
          required
        />
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
