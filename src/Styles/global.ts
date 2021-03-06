import { createGlobalStyle } from 'styled-components'

// template literal ( `` )
// Boas Práticas 
export const GlobalStyle = createGlobalStyle`
:root {

--red: #e52e4d;
--green: #33cc95;
--blue: #5429cc;


--blue-light: #6933ff;

--text-title: #363f5f;
--text-body: #969cb3;

--background: #F0F8FF;
--shape: #F0E68C;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1680px) {
    font-size: 93.75%;
    }
    @media (max-width: 720px){
    font-size: 87.5%;
    }
}
// com essa pratica a resolução acompanha o tamanho da tela

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: Arial, Helvetica, sans-serif;
}
h1, h2, h3, h4, h5, h6, strong {
font-weight: 600;
}

button {
    cursor: pointer;
}
[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`