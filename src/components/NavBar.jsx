import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { media } from "../styles/media";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${media.lg} {
    padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.xxl};
  }
`;

const NavLinks = styled.ul`
  display: none;
  list-style: none;
  gap: ${({ theme }) => theme.space.xl};

  ${media.lg} {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  padding: ${({ theme }) => theme.space.xs} 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  cursor: pointer;
  z-index: 1001;
  background: ${({ $isOpen, theme }) =>
    $isOpen ? "transparent" : theme.colors.white};
  border: ${({ $isOpen, theme }) =>
    $isOpen ? "none" : `1px solid ${theme.colors.primary}`};
  border-radius: 8px;
  padding: 0;
  transition: background 0.3s ease, border 0.3s ease;

  ${media.lg} {
    display: none;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    margin: 5px 0;
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"};
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;

  ${media.lg} {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${({ theme }) => theme.space.md};
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const navItems = [
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#featured-projects" },
  { label: "Skills", href: "#skills" },
  { label: "Articles", href: "#my-words" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement?.focus();

    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Nav role="navigation" aria-label="Main navigation">
        {/* Desktop navigation */}
        <NavLinks>
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </NavLinks>

        {/* Mobile hamburger button */}
        <HamburgerButton
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <HamburgerLine $isOpen={isOpen} />
          <HamburgerLine $isOpen={isOpen} />
          <HamburgerLine $isOpen={isOpen} />
        </HamburgerButton>
      </Nav>

      {/* Mobile menu overlay */}
      <MobileMenu
        ref={menuRef}
        id="mobile-menu"
        $isOpen={isOpen}
        aria-hidden={!isOpen}
      >
        {navItems.map((item) => (
          <MobileNavLink
            key={item.href}
            href={item.href}
            onClick={handleLinkClick}
            tabIndex={isOpen ? 0 : -1}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </>
  );
}
