import React, { useState } from 'react';
import { HeaderWrapper } from './HeaderWrapper';
import Navbar from './Navbar';
import MenuButton from './MenuButton';
import logoCargill from '../../../assets/logoCargill.jpg';
import '../NavBar/StyleHeader.css';


export const Header = () => {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!open);
    };

  return (
    <>
    <div className='container-Header'>
     <HeaderWrapper>
      <Navbar open={open}/>
      <MenuButton open={open} handleClick={handleClick}/>
      <img  className='logo' width='100%' height='100%'  src={logoCargill} alt='logo'/>
      </HeaderWrapper>
    </div>
    </>
  );
}
