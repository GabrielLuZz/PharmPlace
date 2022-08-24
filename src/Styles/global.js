import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #fff;
    --grey: #E5E5E5;
    --grey2: #474747;
    --primary: #2E3192;
    --secundary: #4357AC;
    --terciary: #597DC6;
    --fourth: #6EA2DF;
    --fifth: #83C8F9;
    --orange: #E64727;
    --green: #4FC646;
    --blue: #0077B6;
    --redwine:  #a6192e;
    --background-banner: #3063a8;
    --black: #000;

    --body-background: #f4f4f4;



    --main-font: 'Roboto', sans-serif;
    --second-font: 'Poppins', sans-serif;
}

body{
    background-color: var(--body-background);
    font-family: var(--main-font);
    overflow-x: hidden;
}

input, button, label, select{
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    border-radius: 5px;
}

h1, h2, h3, h4, h5, h6 {
 font-family: var(--second-font);
 font-weight: 700;
} 

button{
 border-radius: 5px;
 cursor: pointer;
 opacity: 0.6;
 transition: all ease 0.3s;
 border: none;
 padding: 10px 20px;

 &:hover{
    opacity: 1;
 }
}

a{
    text-decoration: none;
}

li, ul {
    list-style: none;
}
`;
