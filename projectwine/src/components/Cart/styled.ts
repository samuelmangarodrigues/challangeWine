import styled from "styled-components";



export const ContainerInfoCart = styled.div`
display: flex;
width: 17rem;
flex-direction: column;
justify-content: center;
` 
export const ContainerCartCards =styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 50rem;
height: 8.813rem;
padding: 1rem;
margin: 2rem;
display: flex;
background-color: white;
border-radius: 3px;
@media (max-width: 900px) {
    width: 40rem;
}
@media (max-width: 737px) {
    width: 35rem;
}
@media (max-width: 657px) {
    width: 30rem;
}
@media (max-width: 579px) {
    width: 25rem;
}
@media (max-width: 500px) {
    width: 19rem;
    height: 10rem;
}
@media (max-width: 406px) {
    width: 14rem;
    height: 13rem;
}
`
export const ContainerMainCart = styled.div`
font-family: "Lato";
font-size: 1rem;
font-weight: 700;
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
export const ContainerAddAndSubCart = styled.div`
display: flex;
margin-top: 5px;
`

export const ButtonAddAndSub = styled.button`
background-color:#D14B8F;
border: none;
border-radius: 5px;
margin:3px;

`