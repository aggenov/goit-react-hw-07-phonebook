import { ContactListItem } from "../ContactListItem/ContactListItem";

import { List } from "./ContactList.styled";

import {  useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/selectors";



export const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <>
    <List>    
        {filteredContacts.map(contact => (
            <ContactListItem
              key={contact.id}
              renderListItem={contact}
            />            
          )
        )}    
    </List>  
    </> 
  );
};

