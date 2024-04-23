import React from 'react'
import logo from "../../assets/logo.png"

import { LANGUAGES } from  "./constant/Constans";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const {i18n ,t} = useTranslation();

  const  onChangeLang = (e: { target: { value: any; }; }) =>{
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);

   }
  return (
    <div className=' flex flex-row  justify-between items-center'>
      <div>
      <img src={logo}
        
        className= "bg-white"
        alt='logoImage'
        height={100}
        width={100}
        />

      </div>
        <div>
        <select defaultValue="en" onChange={onChangeLang}>
        {
          LANGUAGES.map (({code, label})=>(
            <option key={code} value={code}>{label}</option>
          ))}

      </select>
        </div>

    </div>
  )
}

export default Navbar