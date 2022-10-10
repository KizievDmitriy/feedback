import { Container, LinksList, LinksItem, Div } from './Footer.styled';
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialPinterest
} from 'react-icons/ti';

export const Footer = () => {
    return (
      <>
        <Container>
          <Div/>
          <LinksList>
            <LinksItem><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="linkedin"><TiSocialLinkedin  /></a></LinksItem>
            <LinksItem><a  href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="twitter"><TiSocialTwitter /></a></LinksItem>
            <LinksItem><a  href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="facebook"><TiSocialFacebook /></a></LinksItem>
            <LinksItem><a  href="https://ru.pinterest.com/" target="_blank" rel="noopener noreferrer"  aria-label="pinterest"><TiSocialPinterest /></a></LinksItem>
          </LinksList>
        </Container>
      </>
    )
}

