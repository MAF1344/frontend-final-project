import styled from 'styled-components';
import Hero from '../components/Hero';
import Indo from '../components/Indo';
import Provinces from '../components/Provinces';

const StyledIndonesia = styled.div``;

const Indonesia = () => {
  return (
    <StyledIndonesia>
      <Hero />
      <Indo />
      <Provinces />
    </StyledIndonesia>
  );
};

export default Indonesia;
