import styled from 'styled-components';
import Smile from '../../assets/smileEllow.svg'
import Cloud from '../../assets/Cloud.png';

export const ContainerWrap = styled.div`
  margin-top: 179px;
  margin-left: 147px;
  width: 575px;
  
  
  &::before{
    content: url(${Smile});
    position: absolute;
    top: 23px;
    left: 29px;
  }
  &::after{
    content: url(${Cloud});
    position: absolute;
    z-index: 3;
    top: 8.95%;
    left: -6.39%;
  }
  
`;
