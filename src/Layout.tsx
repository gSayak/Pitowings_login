import React from 'react'
import logo from "./assets/logo.svg";
import LanguageSelector from './components/ui/LanguageSelector';

interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = (props: layoutProps) => {
  return (
    <div>
      <header className='relative p-3 flex items-center justify-between'>
        <img src={logo} alt="logo" />
        <LanguageSelector />
      </header>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout
