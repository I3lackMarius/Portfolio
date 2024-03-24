<div align="center">
  <h3 align="center">Progetto Portfolio 3D</h3>
</div>

## 📋 <a name="table">Contenuti</a>

[Introduzione](#introduction)
[Stack Tecnologico](#tech-stack)
[Caratteristiche](#features)
[Come iniziare](#quick-start)

## <a name="introduction">Introduzione</a>

Questo progetto comprende libreire 3D ed animazioni, lo standard multilingua facilmente espandibile con le lingue desiderate, presenta uno stile minimale e si adatta ad ogni dispoistivo utilizzato.


## <a name="tech-stack"> Stack tecnologico</a>

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Email JS
- Vite
- Tailwind CSS
- i18next

## <a name="features">Caratteristiche</a>

- **Facilmente personalizzabile**: I dati sono strutturati in modo semplice e minimale, in modo da essere facilmente modificati.

- **Effetti interattivi**: Utilizza animazioni basate sul framer motion per coinvolgere i visitatori in un'esperienza unica.

- **Modelli 3D**: Integra modelli tridimensionali tramite three.js e React Three fiber, che siano i propri, o già creati da altri.

- **Sezione Contattaci**: Permette ai potenziali clienti di contattarti tramite un form minimale ma efficace basato sulla libreria emailjs.

- **Design adattabile**: Garantisce una visibilità e funzionalità ottimale da ogni tipo di dispositivo venga visitato.

e non finiscono qui, ci sono tante altre caratteristiche interessanti come il facile riutilizzo del codice piuttosto che la sua architattura ben definita

## <a name="quick-start">Come iniziare</a>

Segui i passaggi sottostanti per impostare il progetto localmente sulla propria macchina.

**Prerequisiti**

Make sure you have the following installed on your machine:
Assicurati di avere installato sulla tua macchina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Clona questa Repository**

```bash
git clone git@github.com:I3lackMarius/portfolio.git
cd NomeCartellaProgetto
```

**Installazione**

Installa le dipendenze del progetto con npm:

```bash
npm install
```

**Imposta le variabili di sistema**

Morifica il file `Contact.jsx` nella root `src/components/` del progetto come segue:

```Contact.jsx
emailjs
      .send(
        "service_xxx", // <- insert here your emailjs service id
        "template_yyy", // <- insert here your emailjs template id 
        {
          from_name: form.name,
          to_name: "Your Name",
          from_email: form.email,
          to_email: "emailexample@example.com", // <- insert here your emailjs user id
          message: form.message,
        },
        "publicKey" // <- insert here your emailjs publicKey
      )
      ...
```

Sostituisci i valori di esempio con le tue credenziali EmailJS. Se non sei registrato puoi farlo qui: [EmailJS](https://www.emailjs.com/).

**Avviare il progetto**

```bash
npm run dev
```

Apri [http://localhost:5173](http://localhost:5173) sul tuo motore di ricerca per visualizzare il progetto.

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>
