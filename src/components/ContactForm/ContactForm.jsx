import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch} from 'react-redux';
import { addContact } from 'redux/contactSlice';
import {
  FormContacts,
  SubmitBtn,
  LabelForm,
  InputForm,
  Textarea,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

     dispatch(addContact({
      id: nanoid(),
      name,
      email,
      feedback,
    }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setFeedback('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;
      
      case 'feedback':
        setFeedback(value);
        break;      
      
      default:
        return;
    }
  };

    return (
      <>
        <FormContacts onSubmit={handleSubmit}>
          <h1>Reach out to us!</h1>
            <InputForm
              type="text"
              name="name"
              value={name}
              placeholder="Your name*"
              onChange={handleChange}
              pattern="^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$"  
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <InputForm
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Your e-mail*"
              pattern="^.+@.+$"
              title="Email"
              required
            />
              <Textarea
              type="text"
              name="feedback"
              value={feedback}
              placeholder="Your massage*"
              onChange={handleChange} 
              title="Feedback massage"
              required
              />
          <SubmitBtn type="submit">Send massage</SubmitBtn>
        </FormContacts>
      </>
    );
  
}
