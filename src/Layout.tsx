import React from 'react'
import logo from "./assets/logo.svg";
import Navbar from './components/newUser/Navbar';
import { LANGUAGES } from './components/newUser/constant/Constans';
import { useTranslation } from 'react-i18next';

interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = (props: layoutProps) => {
  const {i18n , t } = useTranslation();

     const  onChangeLang = (e: { target: { value: any; }; }) =>{
      const lang_code = e.target.value;
      i18n.changeLanguage(lang_code);

     }
  return (
    <div className=' '>
      <header className='p-3'>
        <img src={logo} alt="logo" />
      </header>
      <div>
        {props.children}
      </div>
      <select defaultValue="en" onChange={onChangeLang}>
        {
          LANGUAGES.map (({code, label})=>(
            <option key={code} value={code}>{label}</option>
          ))}

      </select>
    </div>
  )
}

export default Layout
