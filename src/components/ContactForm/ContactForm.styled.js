import styled from 'styled-components';

export const FormContacts = styled.form`
  position: absolute;
  z-index: 45;
  margin-bottom: 174px;
  width: 575px;
  display: flex;
  flex-direction: column;
`;



export const InputForm = styled.input`
  min-width: 514px;
  padding: 30px;
  margin-bottom: 8px;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
`;

export const Textarea = styled.textarea`
  min-width: 514px;
  min-height: 127px;
  padding: 30px;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
`;
export const SubmitBtn = styled.button`
  margin-top: 23px;
  width: 218px;
  height: 73px;
  padding: 27px 52px;
  border: none;
  border-radius: 500px;
  background-color: #323232;
  color: #fff;
  background: #FAD34F;
  transition: all 350ms ease-in;
  &:hover{
    cursor: pointer;
    background-color: green;
  }
`;
