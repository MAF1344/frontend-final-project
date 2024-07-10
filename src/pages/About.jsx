import styled from 'styled-components';

const StyledAbout = styled.div`
  .container {
    background-color: white;
    align-items: center;
  }

  .about__title {
    color: #06d6a0;
    font-weight: 500;
    padding: 5rem 0 2rem 0;
    text-align: center;
  }

  .about__desc {
    color: #64748b;
    padding: 1rem 8rem 5rem 8rem;
    text-align: center;
    align-items: center;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="container">
        <h1 className="about__title">About</h1>
        <p className="about__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque dolore, libero nobis rerum hic omnis cumque tenetur nisi nulla suscipit similique aliquam fugit sequi ducimus cupiditate, inventore nostrum quaerat sunt.
          Dolores harum saepe dignissimos fuga, porro error soluta placeat eveniet! Consectetur aspernatur facere expedita architecto doloremque. Similique repellendus dicta, accusamus veniam ullam ab sit quo dignissimos harum eligendi
          reiciendis cumque ratione est incidunt explicabo, dolor odio adipisci excepturi! Incidunt dolores ut aliquid consectetur tempore quos voluptatem ipsa quas, vitae nihil nisi sit, officiis, in recusandae sed. Ut quae aliquam earum.
          Officia facere quam, minima sint placeat tempore laborum. Atque.
        </p>
      </div>
    </StyledAbout>
  );
};

export default About;
