import styled from "styled-components";

export const ContainerHeader = styled.div`
margin: 0;
display: flex;
box-shadow:  0px 5px 10px gray;
justify-content: space-evenly;
align-items: center;
font-size: 18px;
font-family: "Lato";
font-weight: 700;
padding-left: 15px;
background-color: white;
    img{
        background-color: white;
    }
`
export const ListMenu = styled.ul`
background-color: white;
display:flex;
list-style: none;
justify-content: space-around;
`
export const ListItem = styled.li`
cursor: pointer;
margin: 1rem;
background-color: white;
border: 1px solid transparent;
    :hover{
    border-bottom: 1px solid darkred;
    transition: 0.2s;
    color: darkred;
    }
`