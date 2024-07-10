import styled from 'styled-components';
import {useCovidData} from '../context/CovidContext';

const StyledIndo = styled.div`
  background-color: #f8f9fa;
  padding: 4rem 0;

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 0 5rem;
  }

  .indo__cards {
    display: flex;
    flex-direction: row;
    margin: 0 30rem;
  }

  .indo__title {
    color: #06d6a0;
    font-weight: 500;
  }

  .indo__caption {
    margin-bottom: 3rem;
    margin-top: 1rem;
    color: #118ab2;
    font-weight: 500;
  }

  .indo__card {
    border-radius: 10px;
    box-shadow: 0px 7px 10px -5px black;
    margin: 2rem;
    padding: 3rem 0;
  }

  .indo__card__title {
    color: #073b4c;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .indo__card__confirmed {
    color: #06d6a0;
    font-size: 2rem;
  }
  .indo__card__recovered {
    color: #118ab2;
    font-size: 2rem;
  }
  .indo__card__death {
    color: #ef476f;
    font-size: 2rem;
  }

  /* Medium Screen */
  @media (max-width: 991px) {
    .indo__card {
      margin: 1rem;
      padding: 2rem;
    }

    .indo__caption {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
  }

  /* Small Screen */
  @media (max-width: 767px) {
    .indo__cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 60%;
    }

    .indo__title {
      font-size: 2rem;
    }

    .indo__caption {
      font-size: 0.8rem;
    }
  }
`;

const Indo = () => {
  const {indoData} = useCovidData();

  return (
    <StyledIndo>
      <div className="container">
        <h1 className="indo__title">Indonesia Situation</h1>
        <h5 className="indo__caption">Data Covid Berdasarkan Indonesia</h5>
        <div className="indo__cards">
          {indoData &&
            indoData.map((data, index) => (
              <div key={index} className="indo__card">
                <h3 className="indo__card__title">{data.status.charAt(0).toUpperCase() + data.status.slice(1)}</h3>
                <div className={`indo__card__${data.status}`}>{data.total.toLocaleString('en', {useGrouping: true}).replace(/,/g, '.')}</div>
              </div>
            ))}
        </div>
      </div>
    </StyledIndo>
  );
};

export default Indo;
