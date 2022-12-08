import React from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';
import { useSelector } from 'react-redux';

const App = () => {

  const contactsFromStore = useSelector(state => {
    return state.contacts.contacts;
    // loading: state.contacts.loading,
    // error: state.contacts.error,
  });

  const filterFromStore = useSelector(state => state.filter);

  const getFilterContacts = () => {
    return contactsFromStore.filter(el =>
      el.name.toLowerCase().includes(filterFromStore.toLowerCase())
    );
  };

    return (
      <div>
        <h2>Phonebook</h2>
        <Form/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList
          contacts={contactsFromStore}
          filterContacts={getFilterContacts()}
        />
      </div>
    );
};


export default App;
