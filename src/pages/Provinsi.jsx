import styled from 'styled-components';
import Hero from '../components/Hero';
import TableProvinsi from '../components/TableProvinsi';
import Form from '../components/Form';

const StyledProvinsi = styled.div``;

const Provinsi = () => {
  return (
    <StyledProvinsi>
      <Hero />
      <TableProvinsi />
      <Form />
    </StyledProvinsi>
  );
};

export default Provinsi;
