import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    width: 100%;
}

body{
    margin: 0;
    font-family: 'Poppins';
}
`;

export default GlobalStyle;
