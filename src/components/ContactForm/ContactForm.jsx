import { useState } from 'react';
import {
  useAddContactMutation,
} from 'redux/contactsAPI';
import { Report } from 'notiflix/build/notiflix-report-aio';

import {
  FormContacts,
  SubmitBtn,
  InputForm,
  Textarea,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [addContact, { isLoading, error }] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await addContact({ name, email, feedback });
      Report.success(`Feedback sent!`);
      reset();
    } catch {
      Report.failure(`Error:${error}`);  
    }  
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
          <SubmitBtn type="submit" disabled={isLoading}>{isLoading ? 'Sending ...' : 'Send massage'}</SubmitBtn>
        </FormContacts>
      </>
    );
  
}
