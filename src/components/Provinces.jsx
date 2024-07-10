import styled from 'styled-components';
import {useCovidData} from '../context/CovidContext';

const StyledProvinces = styled.form`
  background-color: #f8f9fa;
  padding: 4rem 0;

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 0 5rem;
  }

  .provinces__title {
    color: #06d6a0;
    font-weight: 500;
  }

  .provinces__caption {
    margin-bottom: 3rem;
    margin-top: 1rem;
    color: #118ab2;
    font-weight: 500;
  }

  .provinces__table {
    color: #64748b;
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
  }

  .provinces__table th,
  .provinces__table td {
    border: 1px solid black;
    padding: 1rem;
    text-align: center;
  }

  .provinces__table__title {
    color: #06d6a0;
  }

  .provinces__table__title,
  .provinces__table__cell {
    padding: 1rem;
    width: 4rem;
  }

  /* Medium Screen */
  @media (max-width: 991px) {
  }

  /* Small Screen */
  @media (max-width: 767px) {
    .provinces__title {
      font-size: 2rem;
    }

    .provinces__caption {
      font-size: 0.8rem;
    }
  }
`;

const Provinces = () => {
  const {provinsiIndoData} = useCovidData();

  const formatNumber = (number) => {
    if (number !== undefined && number !== null) {
      return number.toLocaleString('id-ID');
    }
    return '-';
  };

  return (
    <StyledProvinces>
      <div className="container">
        <h1 className="provinces__title">Indonesia Situation</h1>
        <h5 className="provinces__caption">Data Covid Berdasarkan Indonesia</h5>
        <table className="provinces__table">
          <thead>
            <tr>
              <th className="provinces__table__title">No</th>
              <th className="provinces__table__title">Provinsi</th>
              <th className="provinces__table__title">Positif</th>
              <th className="provinces__table__title">Sembuh</th>
              <th className="provinces__table__title">Dirawat</th>
              <th className="provinces__table__title">Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {provinsiIndoData &&
              provinsiIndoData.map((province, index) => (
                <tr key={index}>
                  <td className="provinces__table__cell">{index + 1}</td>
                  <td className="provinces__table__cell">{province.name}</td>
                  <td className="provinces__table__cell">{formatNumber(province.numbers?.confirmed)}</td>
                  <td className="provinces__table__cell">{formatNumber(province.numbers?.recovered)}</td>
                  <td className="provinces__table__cell">{formatNumber(province.numbers?.treatment)}</td>
                  <td className="provinces__table__cell">{formatNumber(province.numbers?.death)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </StyledProvinces>
  );
};

export default Provinces;
