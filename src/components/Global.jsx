import styled from 'styled-components';

const StyledGlobal = styled.div`
  background-color: #f8f9fa;
  padding: 4rem 0;

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 0 5rem;
  }

  .global__cards {
    display: flex;
    flex-direction: row;
    margin: 0 30rem;
  }

  .global__title {
    color: #06d6a0;
    font-weight: 500;
  }

  .global__caption {
    margin-bottom: 3rem;
    margin-top: 1rem;
    color: #118ab2;
    font-weight: 500;
  }

  .global__card {
    border-radius: 10px;
    box-shadow: 0px 7px 10px -5px black;
    margin: 2rem;
    padding: 3rem 0;
  }

  .global__card__title {
    color: #073b4c;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .global__card__confirmed {
    color: #06d6a0;
    font-size: 2rem;
  }
  .global__card__recovered {
    color: #118ab2;
    font-size: 2rem;
  }
  .global__card__death {
    color: #ef476f;
    font-size: 2rem;
  }

  /* Meidum Screen */
  @media (max-width: 991px) {
    .global__card {
      margin: 1rem;
      padding: 2rem;
    }

    .global__caption {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
  }

  /* Small Screen */
  @media (max-width: 767px) {
    .global__cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 60%;
    }

    .global__title {
      font-size: 2rem;
    }

    .global__caption {
      font-size: 0.8rem;
    }
  }
`;

const Global = () => {
  return (
    <StyledGlobal>
      <div className="container">
        <h1 className="global__title">Global Situation</h1>
        <h5 className="global__caption">Data Covid Berdasarkan Global</h5>
        <div className="global__cards">
          <div className="global__card">
            <h3 className="global__card__title">Confirmed</h3>
            <div className="global__card__confirmed">00000</div>
          </div>
          <div className="global__card">
            <h3 className="global__card__title">Recovered</h3>
            <div className="global__card__recovered">00000</div>
          </div>
          <div className="global__card">
            <h3 className="global__card__title">Death</h3>
            <div className="global__card__death">00000</div>
          </div>
        </div>
      </div>
    </StyledGlobal>
  );
};

export default Global;
