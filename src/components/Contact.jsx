// src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <footer id="contact">
      <h2>Let’s Talk</h2>
      <img src="/talo_profile.jpg" alt="Talo Vargas" className="contact__photo"/>
      <p>Talo Vargas</p>
      <p>+46(0)725 79 46 77</p>
      <p><a href="mailto:talovargasd@gmail.com">talovargasd@gmail.com</a></p>
      <div className="contact__icons">
        <a href="https://linkedin.com/in/…"><img src="/linkedin.svg" alt="LinkedIn"/></a>
        <a href="https://github.com/…"><img src="/github.svg" alt="GitHub"/></a>
      </div>
    </footer>
  );
}