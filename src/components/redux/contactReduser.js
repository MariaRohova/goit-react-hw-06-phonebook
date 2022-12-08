import { createSlice } from "@reduxjs/toolkit";

const contactsState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsState,
  },
  reducers: {
    addContact(state, action) {
      if (
        state.contacts.find(
          el => action.payload.name.toLowerCase() === el.name.toLowerCase()
        )
      ) {
        alert('Please enter other name');
        return state;
      }
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(contact => {
        return action.payload !== contact.id;
      });
    },
  },
});   

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

