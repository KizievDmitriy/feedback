import styled from 'styled-components';
import PinkSmile from '../../assets/footerpink.svg';
import YellowSmile from '../../assets/footeryellow.svg';
import GreenSmile from '../../assets/smileGreen.svg';

export const Container = styled.footer`
width: 100%;
height: 200px;
background: #FAFAFA;
border-top: 1px solid #D8D8D8;

&::before{
    content: url(${PinkSmile});
    position: absolute;
    left: 0;
    bottom: 0;
}
&::after{
    content: url(${YellowSmile});
    position: absolute;
    bottom: 28px;
    right: 0;
}
`;
export const LinksList = styled.ul`
list-style: none;
display: flex;
align-items: flex-start;
margin-top: 79px;
@media(min-width: 768px) {
    margin-left: 300px;
}



`;
export const LinksItem = styled.li`
margin-right: 25px;
transform: scale(1);
transition: transform 350ms ease;
&:hover{
transform: scale(1.5);
}
`;

export const Div = styled.div`
&::before{
    content: url(${GreenSmile});
    position: absolute;
    right: 127px;
}
`