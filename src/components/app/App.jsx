import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/filter";

import { Box,Text } from "./App.styled";  
import { selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

const App = () => {


  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
    return (
    <>
      <Box>             
        <Text>Phonebook</Text>
          <ContactForm />
        </Box>
        <Box>
          {error && <p>{error}</p>} 
          {isLoading
            ? <Text >Loading...</Text>
            : <>
                <Text>Contacts</Text>
                  <Filter />
                <ContactList />
              </>
            }
          </Box>
    </>
    );
};

export default App;

