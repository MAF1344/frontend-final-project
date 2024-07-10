import styled from 'styled-components';

const StyledTableProvinsi = styled.form`
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
  }

  .tableprovinsi__table,
  .tableprovinsi__table__cell,
  .tableprovinsi__table__title {
    border-collapse: collapse;
    border: 1px solid black;
  }

  .tableprovinsi__table__title {
    color: #06d6a0;
  }

  .tableprovinsi__table__title,
  .tableprovinsi__table__cell {
    padding: 1rem;
    width: 4rem;
  }

  /* Meidum Screen */
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
  return (
    <StyledTableProvinsi>
      <div className="container">
        <h1 className="tableprovinsi__title">Provinsi</h1>
        <h5 className="tableprovinsi__caption">Data Covid Berdasarkan Provinsi</h5>
        <table className="tableprovinsi__table">
          <tr>
            <th className="tableprovinsi__table__title">No</th>
            <th className="tableprovinsi__table__title">Provinsi</th>
            <th className="tableprovinsi__table__title">Postif</th>
            <th className="tableprovinsi__table__title">Sembuh</th>
            <th className="tableprovinsi__table__title">Dirawat</th>
            <th className="tableprovinsi__table__title">Meninggal</th>
          </tr>
          <tr>
            <td className="tableprovinsi__table__cell">1</td>
            <td className="tableprovinsi__table__cell">Jawa Barat</td>
            <td className="tableprovinsi__table__cell">100</td>
            <td className="tableprovinsi__table__cell">50</td>
            <td className="tableprovinsi__table__cell">20</td>
            <td className="tableprovinsi__table__cell">10</td>
          </tr>
        </table>
      </div>
    </StyledTableProvinsi>
  );
};

export default TableProvinsi;
