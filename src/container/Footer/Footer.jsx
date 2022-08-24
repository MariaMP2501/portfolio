import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message:''});
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message} = formData;

  const handleChangeInput = (e) => {
    const { name, value} = e.target;
    setFormData({...formData,[name]: value }); /*à etudier!!*/
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(()=>{
      setLoading(false);
      setFormSubmitted(true)
    })

  }

  return (
    <>
      <h2 className="head-text"> Prendre un café et discuter avec moi </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:maria.mendezp.pro@gmail.com" className="p-text">maria.mendezp.pro@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt=" mobile" />
          <a href="tel: +33 (06 05 69 32 44)" className="p-text"> +33 06 05 69 32 44</a>
        </div>
        <div className="app__footer-card">
          <img src={images.CV} alt=" mobile" />
          <a href={images.cvcv} download className="p-text"> Télécharger mon CV </a>
        </div>
      </div>

      {!isFormSubmitted ? 
      <div className="app__footer-form app__flex">

        <div className="app__flex">
          <input type="text" placeholder='Nom-Prénom' name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input type="text" placeholder='Email' name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
           />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}> {loading ? 'Envoi' : 'Envoyer le message'}</button>
      </div>
      : <div>
          <h3 className="head-text">Merci de m'avoir contacté!</h3>
      </div> }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);