import styled from 'styled-components';
import Image from '../../assets/map.png';
import YelowSun from '../../assets/smileEllow2.svg'
import PinkSun from '../../assets/smilePink.svg'

export const Earth = styled.div`
&::before{
position: absolute;
content: url(${Image});
right: 0;
top: 0;
z-index: 3;
}
&::after{
 content: url(${PinkSun});
 position: absolute;
 z-index: 4;
right: 427px;
top: 463px;
}
`;

export const YellowSmile = styled.div`
&::after{
content: url(${YelowSun});
position: absolute;
left: 757px;
top: 400px;
z-index: 5;
}
`;