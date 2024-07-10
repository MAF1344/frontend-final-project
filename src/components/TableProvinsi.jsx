import styled from 'styled-components';
import {useCovidData} from '../context/CovidContext'; // Adjust the path as necessary

const StyledTableProvinsi = styled.div`
  background-color: #f8f9fa;
  padding: 4rem 0;

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 0 5rem;
  }

  .tableprovinsi__title {
    color: #06d6a0;
    font-weight: 500;
  }

  .tableprovinsi__caption {
    margin-bottom: 3rem;
    margin-top: 1rem;
    color: #118ab2;
    font-weight: 500;
  }

  .tableprovinsi__table {
    color: #64748b;
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
  }

  .tableprovinsi__table th,
  .tableprovinsi__table td {
    border: 1px solid black;
    padding: 1rem;
    text-align: center;
  }

  .tableprovinsi__table__title {
    color: #06d6a0;
  }

  .tableprovinsi__table__title,
  .tableprovinsi__table__cell {
    padding: 1rem;
    width: 4rem;
  }

  /* Medium Screen */
  @media (max-width: 991px) {
  }

  /* Small Screen */
  @media (max-width: 767px) {
    .tableprovinsi__title {
      font-size: 2rem;
    }

    .tableprovinsi__caption {
      font-size: 0.8rem;
    }
  }
`;

const TableProvinsi = () => {
  const {topProvinsiIndoData} = useCovidData();

  const formatNumber = (number) => {
    return number ? number.toLocaleString('id-ID') : '-'; // Format number with thousands separator (ID locale), fallback to '-' if number is undefined
  };

  return (
    <StyledTableProvinsi>
      <div className="container">
        <h1 className="tableprovinsi__title">Provinsi</h1>
        <h5 className="tableprovinsi__caption">Data Covid Berdasarkan Provinsi</h5>
        <table className="tableprovinsi__table">
          <thead>
            <tr>
              <th className="tableprovinsi__table__title">No</th>
              <th className="tableprovinsi__table__title">Provinsi</th>
              <th className="tableprovinsi__table__title">Positif</th>
              <th className="tableprovinsi__table__title">Sembuh</th>
              <th className="tableprovinsi__table__title">Dirawat</th>
              <th className="tableprovinsi__table__title">Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {topProvinsiIndoData &&
              topProvinsiIndoData.map((province, index) => (
                <tr key={index}>
                  <td className="tableprovinsi__table__cell">{index + 1}</td>
                  <td className="tableprovinsi__table__cell">{province.name}</td>
                  <td className="tableprovinsi__table__cell">{formatNumber(province.numbers.confirmed)}</td>
                  <td className="tableprovinsi__table__cell">{formatNumber(province.numbers.recovered)}</td>
                  <td className="tableprovinsi__table__cell">{formatNumber(province.numbers.treatment)}</td>
                  <td className="tableprovinsi__table__cell">{formatNumber(province.numbers.death)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </StyledTableProvinsi>
  );
};

export default TableProvinsi;
