import styled from 'styled-components';
import Hero from '../components/Hero';
import Global from '../components/Global';
import Regions from '../components/Regions';

const StyledHome = styled.div``;

const Home = () => {
  return (
    <StyledHome>
      <main>
        <Hero />
        <Global />
        <Regions />
      </main>
    </StyledHome>
  );
};

export default Home;
