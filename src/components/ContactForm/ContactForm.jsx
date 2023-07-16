import { useState } from "react";

import { FormStyle, Label, Input, Button } from "./ContactForm.styled";

import { useDispatch, useSelector } from "react-redux"; 
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";
import { Notify } from "notiflix";


export const ContactForm = () => {

  //локальный стейт для формы
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contact = {
      name: name,
      phone: phone,
  }
  
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const newContactName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase().trim());
    if (newContactName) {
      Notify.failure(`Name  "${name}"  is already in contacts`, Notify.init({
        clickToClose: true,
        position: 'center-top',
      }));
      return;
    }

    const newContactPhone = contacts.find(contact => contact.phone === phone);
    if (newContactPhone) {
      Notify.failure(`Phone   "${phone}"  is already in contacts`, Notify.init({
        clickToClose: true,
        position: 'center-top',
      }));
      return;
    }

    dispatch(addContact(contact));
    reset();
  };

  //изменение значений полей импута через стейт
  const handleChange = event => {
    const { name, value } = event.currentTarget;

     switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  //очистка полей инпута
  const reset = () => {
    setName('');
    setPhone('');
  };


  return(
    <>
    <form onSubmit={handleSubmit}>
    <FormStyle>      
      <Label>
        Name 
        <Input
          type='text' 
          name='name'
          value={name} 
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required='Name required'
        />
      </Label> 

      <Label>
        Phone 
        <Input
          type='tel' 
          name='phone'
          value={phone} 
              onChange={handleChange}
              placeholder="_ _ _ - _ _ _ - _ _ _ _"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required='Phone number required'
        />
      </Label> 

      <Button type="submit" disabled={!name || !phone} >Add contact</Button>
    </FormStyle>
    </form>
    </>
  )

}
