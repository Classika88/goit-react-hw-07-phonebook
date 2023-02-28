import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const value = event.target.value;
    dispatch(filterContact(value));
  };

  return (
    <label className={css.name} htmlFor="">
      Find contacts by name
      <input
        type="text"
        name="name"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilter}
        className={css.userName}
      />
    </label>
  );
};
