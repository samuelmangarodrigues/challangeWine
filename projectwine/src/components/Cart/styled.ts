import styled from "styled-components";



export const ContainerInfoCart = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
` 
export const ContainerCartCards =styled.div`
align-items: center;
width: 20rem;
height: 15.813rem;
padding: 1rem;
margin: 2rem;
display: flex;
background-color: white;
`
export const ContainerMainCart = styled.div`
font-family: "Lato";
font-size: 1rem;
display:flex;
flex-direction:column;
justify-content:flex-start;`

export const ButtonCart = styled.button`
background-color:transparent;
border:none;
color: gray;
width: 1rem;
padding: 0;
margin-top: 1rem;
:hover{
    color: red;
    transition: 0.1s;
}
` 