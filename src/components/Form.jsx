import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: white;

  .form__title {
    color: #06d6a0;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .form {
    display: flex;
    padding: 3rem 7rem;
  }

  .form__input__part {
    margin: 1rem 0;
  }

  .form__input {
    color: #64748b;
    background-color: white;
    border: 2px solid #06d6a0;
    border-radius: 5px;
    padding: 0.2rem;
  }

  .form__left {
    padding: 3rem;
  }

  .form__right {
    margin-left: 5rem;
  }

  .form__label {
    color: #64748b;
  }

  .form__button {
    color: white;
    background-color: #06d6a0;
    padding: 0.2rem;
  }

  /* Meidum Screen */
  @media (max-width: 991px) {
    .form {
      padding-bottom: 5rem;
    }

    .form__title {
      font-size: 2rem;
    }

    .form__left {
      padding: 0;
      width: 120%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* Small Screen */
  @media (max-width: 767px) {
    .form {
      padding-bottom: 5rem;
    }

    .form__title {
      font-size: 2rem;
    }

    .form__left {
      padding: 0;
      width: 120%;
    }
  }
`;

const Form = () => {
  return (
    <StyledForm>
      <form action="" className="form">
        <div className="form__left">
          <img src="../../src/img/form.png" alt="form.png" className="form__img" />
        </div>
        <div className="form__right">
          <h1 className="form__title">Form Covid</h1>
          <div className="form__input__part">
            <label htmlFor="provinsi" className="form__label">
              Provinsi
            </label>
            <select name="form__provinsi" id="form__provinsi" className="form__input">
              <option value="Jawa Barat">Jawa Barat</option>
            </select>
          </div>
          <div className="form__input__part">
            <label htmlFor="status" className="form__label">
              Status
            </label>
            <select name="form__status" id="form__status" className="form__input">
              <option value="positif">Positif</option>
              <option value="sembuh">Sembuh</option>
              <option value="dirawat">Dirawat</option>
              <option value="meninggal">Meninggal</option>
            </select>
          </div>
          <div className="form__input__part">
            <label htmlFor="jumlah" className="form__label">
              Jumlah
            </label>
            <input type="number" className="form__input" />
          </div>
          <button className="form__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </StyledForm>
  );
};

export default Form;
