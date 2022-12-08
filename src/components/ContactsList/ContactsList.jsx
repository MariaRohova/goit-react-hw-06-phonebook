import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Contacts } from './Styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'components/redux/contactReduser';

const ContactList = ({ filterContacts }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <Contacts>
      {filterContacts.map(({ name, number, id }) => {
        return (
          <li key={nanoid()}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </Contacts>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
