import styled from 'styled-components';

const SyledRegions = styled.div`
  text-align: center;
  padding: 3rem 0;
  background-color: white;

  .container {
    padding: 0 5rem;
  }

  .region__title {
    color: #06d6a0;
    font-weight: 500;
  }

  .region__caption {
    margin-bottom: 3rem;
    margin-top: 1rem;
    color: #118ab2;
    font-weight: 500;
  }

  .region__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .region__card {
    border-radius: 10px;
    box-shadow: 0px 7px 10px -5px black;
    margin: 2em;
    padding: 1.4rem 0;
    width: 27%;
  }

  .region__card__title {
    color: #073b4c;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .region__card__confirmed,
  .region__card__recovered,
  .region__card__death {
    display: flex;
    margin: 1.5rem 0;
  }

  .region__card__confirmed__left,
  .region__card__recovered__left,
  .region__card__death__left {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
  }

  .region__card__confirmed__right,
  .region__card__recovered__right,
  .region__card__death__right {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .region__card__confirmed__title,
  .region__card__recovered__title,
  .region__card__death__title {
    color: #64748b;
    font-weight: 500;
    font-size: 0.7rem;
  }

  .region__card__confirmed__value {
    color: #06d6a0;
    font-size: 1.2rem;
  }

  .region__card__recovered__value {
    color: #118ab2;
    font-size: 1.2rem;
  }

  .region__card__death__value {
    color: #ef476f;
    font-size: 1.2rem;
  }

  .region__card__confirmed__img {
    width: 2.2rem;
  }

  .region__card__death__img,
  .region__card__recovered__img {
    width: 1.5rem;
  }

  /* Meidum Screen */
  @media (max-width: 991px) {
    .region__caption {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }

    .region__card {
      margin: 1rem;
      padding: 1rem 0.3rem 0 1rem;
      width: 44%;
    }
  }

  /* Small Screen */
  @media (max-width: 767px) {
    .region__card {
      margin: 1em;
      width: 40%;
    }

    .region__title {
      font-size: 2rem;
    }

    .region__caption {
      font-size: 0.8rem;
    }
  }
`;

const Regions = () => {
  return (
    <SyledRegions>
      <div className="container">
        <h1 className="region__title">Situations by Regions</h1>
        <h5 className="region__caption">Bacaan Pilihan Covid</h5>
        <div className="region__cards">
          <div className="region__card">
            <h3 className="region__card__title">Europe</h3>
            <div className="region__card__content">
              <div className="region__card__confirmed">
                <div className="region__card__confirmed__left">
                  <h4 className="region__card__confirmed__title">Confirmed</h4>
                  <p className="region__card__confirmed__value">00000</p>
                </div>
                <div className="region__card__confirmed__right">
                  <img src="../../src/img/confirmed.png" alt="confirmed" className="region__card__confirmed__img" />
                </div>
              </div>
              <div className="region__card__recovered">
                <div className="region__card__recovered__left">
                  <h4 className="region__card__recovered__title">Recovered</h4>
                  <p className="region__card__recovered__value">00000</p>
                </div>
                <div className="region__card__recovered__right">
                  <img src="../../src/img/recovered.png" alt="recovered" className="region__card__recovered__img" />
                </div>
              </div>
              <div className="region__card__death">
                <div className="region__card__death__left">
                  <h4 className="region__card__death__title">Death</h4>
                  <p className="region__card__death__value">00000</p>
                </div>
                <div className="region__card__death__right">
                  <img src="../../src/img/death.png" alt="death" className="region__card__death__img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SyledRegions>
  );
};

export default Regions;
