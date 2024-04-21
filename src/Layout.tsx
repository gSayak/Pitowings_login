import React from 'react'
import logo from "./assets/logo.svg";
import Navbar from './components/newUser/Navbar';

interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = (props: layoutProps) => {
  return (
    <div>
      <header className='p-3'>
        <img src={logo} alt="logo" />
      </header>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout
