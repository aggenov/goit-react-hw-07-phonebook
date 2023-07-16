export const selectContacts = state => state.contacts.items;

export const selectFilter = ({ filter }) => filter;

export const selectFilteredContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
