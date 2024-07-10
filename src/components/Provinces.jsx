import styled from 'styled-components';

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
  }

  .provinces__table,
  .provinces__table__cell,
  .provinces__table__title {
    border-collapse: collapse;
    border: 1px solid black;
  }

  .provinces__table__title {
    color: #06d6a0;
  }

  .provinces__table__title,
  .provinces__table__cell {
    padding: 1rem;
    width: 4rem;
  }

  /* Meidum Screen */
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
  return (
    <StyledProvinces>
      <div className="container">
        <h1 className="provinces__title">Indonesia Situation</h1>
        <h5 className="provinces__caption">Data Covid Berdasarkan Indonesia</h5>
        <table className="provinces__table">
          <tr>
            <th className="provinces__table__title">No</th>
            <th className="provinces__table__title">Provinsi</th>
            <th className="provinces__table__title">Postif</th>
            <th className="provinces__table__title">Sembuh</th>
            <th className="provinces__table__title">Dirawat</th>
            <th className="provinces__table__title">Meninggal</th>
          </tr>
          <tr>
            <td className="provinces__table__cell">1</td>
            <td className="provinces__table__cell">Jawa Barat</td>
            <td className="provinces__table__cell">100</td>
            <td className="provinces__table__cell">50</td>
            <td className="provinces__table__cell">20</td>
            <td className="provinces__table__cell">10</td>
          </tr>
        </table>
      </div>
    </StyledProvinces>
  );
};

export default Provinces;
