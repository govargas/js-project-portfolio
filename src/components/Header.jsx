// src/components/Header.jsx
import React from 'react';
import './Header.css'; // minimal flex/cover styles

export default function Header() {
  return (
    <header className="header">
      <img 
        src="/talo_header.webp" 
        alt="Portrait of Talo Vargas" 
        className="header__bg" 
      />
      <div className="header__overlay">
        <p>Hi there, I’m</p>
        <h1>Talo Vargas</h1>
        <h2>Creative Frontend Developer with a Background in Journalism, Arts Education and Music Tech</h2>
        <p>
          I’m a frontend developer who brings together code, creativity, and communication. With a background in public libraries, journalism, and music, I’m used to turning complex ideas into clear, engaging experiences for diverse audiences. Whether collaborating in a team or building solo, I code with people in mind — always aiming for thoughtful, accessible, and user‑friendly solutions.
        </p>
      </div>
    </header>
  );
}