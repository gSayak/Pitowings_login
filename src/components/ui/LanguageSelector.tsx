import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

const Languages = [
    {
        code: 'en',
        name: 'English'
    },
    {
        code: 'es',
        name: 'Spanish'
    },
    {
        code: 'fr',
        name: 'French'
    },
    {
        code: 'hi',
        name: 'Hindi'
    }
]

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [showSelectedLang, setShowSelectedLang] = React.useState('Language');
    const LanguageCodeChange = (lang: { code: string, name: string }) => {
        i18n.changeLanguage(lang.code);
        setShowSelectedLang(lang.name);
        setShowDropdown(false);
    };

    useEffect(() => {
        const lang = Languages.find((lang) => lang.code === i18n.language);
        if (lang) {
            setShowSelectedLang(lang.name);
        }
    }, [
        i18n.language
    ]);

    const [showDropdown, setShowDropdown] = React.useState(false);
    return (
        <div className='absolute right-10 top-6'>
            <button onClick={() => setShowDropdown(!showDropdown)} className="text-black focus:ring-2 border-2 border-button-hoverbg ring-button-focusring font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">{showSelectedLang} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div id="dropdown" className={`${showDropdown ? "relative" : "hidden"} z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                    {Languages.map((lang, index) => (
                        <li key={index}>
                            <p
                                onClick={() => LanguageCodeChange(lang)}
                                className="block px-4 py-2 hover:bg-gray-100 text-black">{lang.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LanguageSelector
