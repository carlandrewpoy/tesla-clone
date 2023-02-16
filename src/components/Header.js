import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(0)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a href='#'>
        <img src='images/logo.svg'/>
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href='#'>{car}</a>
        ))}
      </Menu>
      <Right>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <HamMenu onClick={()=> setBurgerStatus(1)}/>
      </Right>
      <HamList show={burgerStatus}>
        <CloseWrap>
          <Close onClick={()=> setBurgerStatus(0)}/>
        </CloseWrap>
        {cars && cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
        <li>Existing Inventory</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Help</li>
        <li>Check Update</li>
        <li>Sign-out</li>
      </HamList>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  a {
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 8px;
  }
  @media(max-width: 768px) {
    display: none;
  }
`
const Right = styled.div`
  display: flex;
  align-items: center;

  a {
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 5px;
  }
`
const HamMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-left: 5px;
`
const HamList = styled.div`
  list-style: none;
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  text-align: start;
  padding: 20px;
  font-weight: 600;
  transition: transform .2s;
  transform: ${props=> props.show ? 'translateX(0)':'translateX(100%)'};
  li {
  border-bottom: 1px solid gray;
  padding: 15px 0;
  cursor: pointer;
  }
`
const Close = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`