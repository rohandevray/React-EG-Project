import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //here we can add the css which we apply to the whole website
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        
    }
    body{
        background: #62b3fe;

        p{
            font-size: 1.1rem;
            font-weight: 550;
        }
    }
   
       
    
`;

export default GlobalStyle;
