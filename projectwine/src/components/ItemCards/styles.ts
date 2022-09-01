import styled from "styled-components";


export const ContainerItem = styled.div`
display: flex;
background-color: white;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
font-size: 1rem;
margin: 2rem;
padding: 1rem;
`

export const Img = styled.img`
width: 11.875rem;
`
export const ContainerCardItem = styled.div`
display: flex;
flex-direction: column;

`
export const ButtonItems = styled.button`
border: none;
border-radius: 4px;
background-color: #7EBC43;
color: white;
margin: 1rem;
padding: 1rem;
:hover{
    background-color: green;
    transition: 0.2s;
}
`