import styled from "styled-components";

export const ContainerHeader = styled.div`
margin-bottom: 3rem;
margin: 0;
display: flex;
box-shadow:  0px 5px 10px gray;
justify-content: space-between;
align-items: center;
font-size: 18px;
font-family: "Lato";
font-weight: 700;
padding-left: 15px;
background-color: white;
    img{
        background-color: white;
    }
    #iconWine{
        display: none;
    }
@media (max-width: 744px) {
    #removeItems{
        display: none;
    }
    #iconWine{
        display: block;
    }
}
`
export const ListMenu = styled.ul`
background-color: white;
display:flex;
list-style: none;
justify-content: space-around;
@media (max-width: 744px) {
    margin: 0;
    padding: 0;
}
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
export const ButtonCart=styled.button`
background-color: transparent;
border: none;
color: gray;
border-radius: 8px;
margin-left: 10px;
:hover{
    color: green;
}
`

export const CartLenghtItems = styled.span`
background-color: red;
color: white;
padding: 5px;
border-radius: 50%;
font-family: "Lato";
`

export const LinkPortfolio=styled.a`
color: gray;
:hover{
    color: #D14B8F;
}

`