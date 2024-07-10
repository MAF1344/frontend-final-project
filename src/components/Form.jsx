import styled from 'styled-components';
import {useCovidData} from '../context/CovidContext';

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

  /* Medium Screen */
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
  const {provinsiIndoData, formData, handleChange, handleSubmit} = useCovidData();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="form">
        <div className="form__left">
          <img src="../../src/img/form.png" alt="form.png" className="form__img" />
        </div>
        <div className="form__right">
          <h1 className="form__title">Form Covid</h1>
          <div className="form__input__part">
            <label htmlFor="provinsi" className="form__label">
              Provinsi
            </label>
            <select name="provinsi" id="provinsi" className="form__input" value={formData.provinsi} onChange={handleChange}>
              {provinsiIndoData &&
                provinsiIndoData.map((province, index) => (
                  <option key={index} value={province.name}>
                    {province.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="form__input__part">
            <label htmlFor="status" className="form__label">
              Status
            </label>
            <select name="status" id="status" className="form__input" value={formData.status} onChange={handleChange}>
              <option value="confirmed">Positif</option>
              <option value="recovered">Sembuh</option>
              <option value="treatment">Dirawat</option>
              <option value="death">Meninggal</option>
            </select>
          </div>
          <div className="form__input__part">
            <label htmlFor="jumlah" className="form__label">
              Jumlah
            </label>
            <input type="number" name="jumlah" id="jumlah" className="form__input" value={formData.jumlah} onChange={handleChange} />
          </div>
          <button className="form__button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
