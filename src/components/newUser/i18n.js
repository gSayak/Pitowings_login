import i18n from "i18next";

import { Translation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: {
        New: "New User",
        Personal: "Personal Details",
        First: "First Name",
        Last: "Last Name",
        Email: "Email",
        Phone: "Phone Number",
        Company: "Company Details",
        CompanyName: "Company Name",
        Job: "Job Title",
        Password: "Password",
        Confirm: "Confirm Password",
        Accept: "Accept the terms and conditions of service",
        Cancel: "CANCEL",
        Register: "REGISTER",
        First1: "Enter your firstname",
        Last1: "Enter your lastname",
        Email1: "Enter your email",
        Phone1: "Enter your phone Number",
        Company1: "Enter your Company Name",
        Job1: "Enter your job title",
        Password1: "Enter your password",
        Confirm1: "Enter your confirm Password",
      },
    },
    es: {
      translation: {
        New: "Nuevo Usuario",
        Personal: "Detalles Personales",
        First: "Nombre",
        Last: "Apellido",
        Email: "Correo Electrónico",
        Phone: "Número de Teléfono",
        Company: "Detalles de la Empresa",
        CompanyName: "Nombre de la Empresa",
        Job: "Puesto de Trabajo",
        Password: "Contraseña",
        Confirm: "Confirmar Contraseña",
        Accept: "Aceptar los términos y condiciones del servicio",
        Cancel: "CANCELAR",
        Register: "REGISTRAR",
        First1: "Ingrese su nombre",
        Last1: "Ingrese su apellido",
        Email1: "Ingrese su correo electrónico",
        Phone1: "Ingrese su número de teléfono",
        Company1: "Ingrese el nombre de su empresa",
        Job1: "Ingrese su título laboral",
        Password1: "Ingrese su contraseña",
        Confirm1: "Confirmar su contraseña",
      },
    },
    it: {
      translation: {
        New: "Nuovo Utente",
        Personal: "Dettagli Personali",
        First: "Nome",
        Last: "Cognome",
        Email: "Email",
        Phone: "Numero di Telefono",
        Company: "Dettagli Aziendali",
        CompanyName: "Nome Azienda",
        Job: "Titolo di Lavoro",
        Password: "Password",
        Confirm: "Conferma Password",
        Accept: "Accetta i termini e le condizioni del servizio",
        Cancel: "CANCELLA",
        Register: "REGISTRATI",
        First1: "Inserisci il tuo nome",
        Last1: "Inserisci il tuo cognome",
        Email1: "Inserisci la tua email",
        Phone1: "Inserisci il tuo numero di telefono",
        Company1: "Inserisci il nome della tua azienda",
        Job1: "Inserisci il tuo titolo lavorativo",
        Password1: "Inserisci la tua password",
        Confirm1: "Conferma la tua password"
      },
    },
    hi: {
      translation: {
        New: "नया उपयोगकर्ता",
        Personal: "व्यक्तिगत विवरण",
        First: "नाम",
        Last: "उपनाम",
        Email: "ईमेल",
        Phone: "फ़ोन नंबर",
        Company: "कंपनी का विवरण",
        CompanyName: "कंपनी का नाम",
        Job: "नौकरी का शीर्षक",
        Password: "पासवर्ड",
        Confirm: "पासवर्ड की पुष्टि करें",
        Accept: "सेवा की नियम और शर्तों को स्वीकार करें",
        Cancel: "रद्द करें",
        Register: "रजिस्टर करें",
        First1: "अपना नाम दर्ज करें",
        Last1: "अपना उपनाम दर्ज करें",
        Email1: "अपना ईमेल दर्ज करें",
        Phone1: "अपना फ़ोन नंबर दर्ज करें",
        Company1: "अपने कंपनी का नाम दर्ज करें",
        Job1: "अपना नौकरी का शीर्षक दर्ज करें",
        Password1: "अपना पासवर्ड दर्ज करें",
        Confirm1: "अपना पासवर्ड की पुष्टि करें"
      },
    },
  },
});
