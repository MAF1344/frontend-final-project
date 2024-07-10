import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

const StyledFooter = styled.nav`
  .footer {
    display: flex;
    align-items: center;
    background-color: #06d6a0;
    position: relative;
    padding: 1rem;
  }

  .footer__title {
    margin: 1rem 0 1rem 3rem;
    font-weight: 500;
  }

  .footer__list {
    display: flex;
    text-align: center;
    list-style: none;
    width: 80%;
    margin-right: 4rem;
  }

  .footer__link {
    color: white;
    transition: 0.5s;
  }

  .footer__link:hover {
    color: black;
    transition: 0.5s;
  }

  .footer__icons {
    display: none;
  }

  /* Medium Screen */
  @media (max-width: 991px) {
    .footer__list {
      width: 100%;
    }
  }

  /* Small Screen */
  @media (max-width: 767px) {
    .footer__title {
      font-size: 0.7rem;
    }

    .footer__list {
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

    .footer__item {
      margin: 3rem 0;
    }

    .footer__icons {
      display: flex;
      font-size: 2.5rem;
      z-index: 2;
      color: white;
      position: relative;
    }

    .footer__icon {
      transition: opacity 0.3s, transform 0.3s;
    }

    .footer__icon--bars {
      opacity: ${(props) => (props.isVisible ? '0' : '1')};
      transform: ${(props) => (props.isVisible ? 'rotate(-90deg)' : 'rotate(0)')};
      margin-left: 17rem;
    }

    .footer__icon--xmark {
      opacity: ${(props) => (props.isVisible ? '1' : '0')};
      transform: ${(props) => (props.isVisible ? 'rotate(0)' : 'rotate(90deg)')};
      margin-left: -5rem;
    }
  }
`;

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const toggleFooter = () => {
    setIsFooterVisible(!isFooterVisible);
  };

  const handleLinkClick = () => {
    setIsFooterVisible(false);
  };

  return (
    <StyledFooter isVisible={isFooterVisible}>
      <nav className="footer">
        <div className="footer__title">
          <h1>Covid ID</h1>
          <p>Develop by Muhammad Al Fatih</p>
        </div>
        <ul className="footer__list">
          <li className="footer__item">
            <Link to={'/'} className="footer__link" onClick={handleLinkClick}>
              Global
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/indonesia'} className="footer__link" onClick={handleLinkClick}>
              Indonesia
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/provinsi'} className="footer__link" onClick={handleLinkClick}>
              Provinsi
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/about'} className="footer__link" onClick={handleLinkClick}>
              About
            </Link>
          </li>
        </ul>
        <div className="footer__icons">
          <FontAwesomeIcon icon={faBars} className={`footer__icon footer__icon--bars`} onClick={toggleFooter} />
          <FontAwesomeIcon icon={faXmark} className={`footer__icon footer__icon--xmark`} onClick={toggleFooter} />
        </div>
      </nav>
    </StyledFooter>
  );
};

export default Footer;
