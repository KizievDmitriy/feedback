import { ContactForm } from './ContactForm/ContactForm';
import { Container } from './Container/container';
import { Earth, YellowSmile } from './Earth/Earth.styled';
import { Main } from './main.styled';
import { Footer } from './Footer/Footer';
import { Sun } from './Sun/Sun';


export const App = () => {
  return (
    <>
      <Main>
        <Container>
          <ContactForm />
        </Container>
        <Earth /> 
        <YellowSmile />
        <Sun/>
      </Main>
      <Footer/>
    </>
  );
};


