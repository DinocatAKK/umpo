import React, { useState, useEffect } from 'react';
import classes from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      // Меняем стиль при скролле
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Управление видимостью header
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Закрываем меню при скролле
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);
  // Закрытие меню при клике на ссылку
  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };
  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={`${classes.header} 
      ${!isVisible ? classes.hidden : ''} 
      ${scrolled ? classes.scrolled : ''} 
      ${isMenuOpen ? classes.menuOpen : ''}`}>
        <img onClick={() => navigate("/")} src="/img/logo.svg" alt="logo" />
        
        {/* Десктопная навигация */}
        <nav>
          <a onClick={() => navigate("/")} href="">Главная</a>
          <a onClick={() => navigate("/career")} href="">Карьера</a>
          <a onClick={() => navigate("/news")} href="">Пресс-центр</a>
        </nav>
        
        {/* Бургер-кнопка (только для мобильных) */}
        <button className={classes.burgerBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Оверлей */}
        <div className={classes.overlay} onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Мобильное меню */}
        <div className={classes.mobileNav}>
          <a onClick={() => handleNavClick("/")}>Главная</a>
          <a onClick={() => handleNavClick("/career")}>Карьера</a>
          <a onClick={() => handleNavClick("/news")}>Пресс-центр</a>
        </div>
      </div>
      <hr className={`${!isVisible ? classes.hrHidden : ''}`} />
    </>
  );
};

export default Header;