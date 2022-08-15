import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  :root{
    
    
  }
  body{
    font-family: 'Inter', sans-serif;
    background-color: #1A202C;
   
    
    
    
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    
    
  }

  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }

`;
