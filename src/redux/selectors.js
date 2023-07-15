export const selectContacts = state => state.contacts;

export const selectFilter = ({ filter }) => filter;

export const selectFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
