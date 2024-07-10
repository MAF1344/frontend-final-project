import styled from 'styled-components';

const StyledHero = styled.div`
  background-color: white;
  .container {
    display: flex;
    padding: 5rem;
  }

  .hero__kiri {
    margin-right: 6rem;
  }

  .hero__title {
    color: #06d6a0;
    font-weight: 500;
  }

  .hero__caption {
    margin-bottom: 3rem;
    margin-top: 1rem;
    color: #118ab2;
    font-weight: 500;
  }

  .hero__desc {
    color: #64748b;
  }

  .hero__button {
    width: 50%;
    background-color: #06d6a0;
    margin: 2rem 0;
  }

  /* Meidum Screen */
  @media (max-width: 991px) {
    .hero__kanan {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero__caption {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 0.9rem;
    }

    .hero__title {
      font-size: 3rem;
    }

    .hero__desc {
      font-size: .9rem;
    }
  }

  /* Small Screen */
  @media (max-width: 767px) {
    .hero__title {
      font-size: 2rem;
    }

    .hero__caption {
      font-size: 0.8rem;
    }

    .hero__desc {
      font-size: 0.7rem;
    }

    .hero__kanan{
      width: 120%;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
        <div className="hero__kiri">
          <h1 className="hero__title">Covid ID</h1>
          <h5 className="hero__caption">Monitoring Perkembangan Covid</h5>
          <p className="hero__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum alias vitae praesentium laudantium quas dicta mollitia id rem facilis blanditiis. Nihil, voluptas. Eos, illum ipsa quia natus tenetur totam repudiandae.
          </p>
          <button className="hero__button">Vaccine</button>
        </div>
        <div className="hero__kanan">
          <img src="../../src/img/hero.png" alt="hero" className="hero__img" />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
