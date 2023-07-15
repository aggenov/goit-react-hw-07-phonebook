import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/filter";

import { Box } from "./App.styled";  

const App = () => {

    return (
    <>
      <Box>             
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>

      <Box>  
        <h2>Contacts</h2>
        <Filter />
        <ContactList />        
      </Box> 
    </>
    );
};

export default App;

