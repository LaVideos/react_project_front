import {createGlobalStyle} from "styled-components";


export const darkTheme = {
    body: ``
}


export const lightTheme = {
    body: "#ffffff",
    textColor:'black',
    header:'#f6f6f6'
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 `