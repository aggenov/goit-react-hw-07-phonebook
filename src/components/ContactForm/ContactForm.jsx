import { useState } from "react";

import { FormStyle, Label, Input, Button } from "./ContactForm.styled";

import { useDispatch, useSelector } from "react-redux"; 
import { addContacts } from "redux/contactsSlice";
import { selectContacts } from "redux/selectors";
import { nanoid } from "@reduxjs/toolkit";
import { Notify } from "notiflix";


export const ContactForm = () => {

  //локальный стейт для формы
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contact = {
     id: nanoid(),
      name: name,
      number: number,
  }
  
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const newContactName = contacts.find(contact => contact.name === name);
    if (newContactName) {
      Notify.failure(`Name  "${name}"  is already in contacts`, Notify.init({
        clickToClose: true,
        position: 'center-top',
      }));
      return;
    }

    const newContactNumber = contacts.find(contact => contact.number === number);
    if (newContactNumber) {
      Notify.failure(`Number   "${number}"  is already in contacts`, Notify.init({
        clickToClose: true,
        position: 'center-top',
      }));
      return;
    }

    dispatch(addContacts(contact));
    reset();
  };

  //изменение значений полей импута через стейт
  const handleChange = event => {
    const { name, value } = event.currentTarget;

     switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  //очистка полей инпута
  const reset = () => {
    setName('');
    setNumber('');
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
        Number 
        <Input
          type='tel' 
          name='number'
          value={number} 
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required='Phone number required'
        />
      </Label> 

      <Button type="submit" disabled={!name || !number} >Add contact</Button>
    </FormStyle>
    </form>
    </>
  )

}
