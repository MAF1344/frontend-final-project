import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

const StyledNavbar = styled.nav`
  .navbar {
    display: flex;
    align-items: center;
    background-color: #06d6a0;
    position: relative;
    padding: 1rem;
  }

  .navbar__title {
    margin: 0 auto 0 1rem;
    font-weight: 500;
  }

  .navbar__list {
    display: flex;
    text-align: center;
    list-style: none;
    width: 80%;
    margin-right: 4rem;
  }

  .navbar__link {
    color: white;
    transition: 0.5s;
  }

  .navbar__link:hover {
    color: black;
    transition: 0.5s;
  }

  .navbar__icons {
    display: none;
  }

  /* Medium Screen */
  @media (max-width: 991px) {
    .navbar__list {
      width: 100%;
    }
  }

  /* Small Screen */
  @media (max-width: 767px) {
    .navbar__title {
      font-size: 0.7rem;
    }

    .navbar__list {
      position: fixed;
      flex-direction: column;
      align-items: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #06d6a0;
      color: white;
      justify-content: center;
      transform: translateX(${(props) => (props.isVisible ? '0' : '-100%')});
      transition: transform 0.3s ease-in-out;
      z-index: 1;
    }

    .navbar__item {
      margin: 3rem 0;
    }

    .navbar__icons {
      display: flex;
      font-size: 2.5rem;
      z-index: 2;
      color: white;
      position: relative;
    }

    .navbar__icon {
      transition: opacity 0.3s, transform 0.3s;
    }

    .navbar__icon--bars {
      opacity: ${(props) => (props.isVisible ? '0' : '1')};
      transform: ${(props) => (props.isVisible ? 'rotate(-90deg)' : 'rotate(0)')};
      margin-left: 17rem;
    }

    .navbar__icon--xmark {
      opacity: ${(props) => (props.isVisible ? '1' : '0')};
      transform: ${(props) => (props.isVisible ? 'rotate(0)' : 'rotate(90deg)')};
      margin-left: -5rem;
    }
  }
`;

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleLinkClick = () => {
    setIsNavbarVisible(false);
  };

  return (
    <StyledNavbar isVisible={isNavbarVisible}>
      <nav className="navbar">
        <div className="navbar__title">
          <h1>Covid ID</h1>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to={'/'} className="navbar__link" onClick={handleLinkClick}>
              Global
            </Link>
          </li>
          <li className="navbar__item">
            <Link to={'/indonesia'} className="navbar__link" onClick={handleLinkClick}>
              Indonesia
            </Link>
          </li>
          <li className="navbar__item">
            <Link to={'/provinsi'} className="navbar__link" onClick={handleLinkClick}>
              Provinsi
            </Link>
          </li>
          <li className="navbar__item">
            <Link to={'/about'} className="navbar__link" onClick={handleLinkClick}>
              About
            </Link>
          </li>
        </ul>
        <div className="navbar__icons">
          <FontAwesomeIcon icon={faBars} className={`navbar__icon navbar__icon--bars`} onClick={toggleNavbar} />
          <FontAwesomeIcon icon={faXmark} className={`navbar__icon navbar__icon--xmark`} onClick={toggleNavbar} />
        </div>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
