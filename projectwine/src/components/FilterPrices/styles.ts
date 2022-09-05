import styled from "styled-components";

export const ContainerCheckBox=styled.div`
display:flex;
flex-direction:column;
align-self: flex-start;
font-family: "Lato";
margin: 20px;
font-weight: 700;
span{
    font-size: 10px;
}
@media (max-width: 855px) {
    align-self: center;
}
`
export const ContainerInputsLabel = styled.div`
display: flex;
width: 10rem;
font-size: 1rem;
font-weight: 300;
`