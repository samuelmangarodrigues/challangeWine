import styled from "styled-components";



export const DivItems = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
export const FindProducts = styled.span`
font-family:"Lato";`

export const ContainerPagination=styled.div`
text-align: center;
margin: 1rem;
` 
export const ButtonPagination=styled.button`
color:#B6116E;
background-color: transparent;
border: 1px solid #B6116E;
border-radius: 3px;
margin: 5px;
:hover{
    color: white;
    background-color:#B6116E;
    animation-delay: unset;
}
`
export const ContainerStore=styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

export const ButtonSearch=styled.button`
background-color:transparent;
border:none;
margin: 5px;
border-radius: 4px;
`
export const ContainerSearch=styled.div`
margin: 10px;
border-radius: 4px;
display: flex;
background-color: white;
justify-content: center;
`
export const InputSearch=styled.input`
border:none;
border-radius: 4px;
width: 13.75rem;
outline:none;
color: #D14B8F;
font-size: 1rem;

:hover::placeholder{
    color: #D14B8F;
    transition: 0.5s;
}`
