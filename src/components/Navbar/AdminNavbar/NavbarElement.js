import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { FaPizzaSlice} from 'react-icons/fa';

export const Nav = styled.nav`
  background: #B3ABAB;
  height: 70px;
  display: flex;
  justify-content: center;
  font-weight: bold;

`;

export const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
cursor: pointer;
padding-top: 10px;

@media screen and (max-width: 400px){
    position: absolute;
    top: 10px;
    left: 25px;
}
`;

export const NavIcon = styled.div`
display: block;

position: absolute;
top: 0;
right: 0;
padding-top: 5px;

cursor: pointer;
color: #fff;

p{
    transform: translate(-175%,100%);
    font-weight: bold;
}
`;

export const Navp = styled(Link)`
display:inline-block ;

position:absolute;
top:0;
left:0;
padding:25px;
color: #fff;
font-size: 1.1rem;


text-decoration: none;
&:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`
export const Navp2 = styled(Link)`
display:inline-block ;

position:absolute;
top:0;
left:60px;
padding:25px;
color: #fff;
font-size: 1.1rem;


text-decoration: none;
&:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`

export const Navp1 = styled.div`
display:block;
position:absolute;
top:0;
left:60px;
padding:25px;
color: #fff;
font-size: 1.1rem;

text-decoration: none;
p{
    transform: translate(-175%,100%);
    font-weight: bold;
}
`

export const Bars = styled(FaPizzaSlice)`
font-size: 2rem;
transform: translate(-50%,-80%)`;
