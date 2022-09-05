import styled from "styled-components";




export const EmptyCart =styled.h1`
font-family:"Lato";
color: gray;
text-align: center;
`
export const ContainerEmptyCart =styled.div`
display:flex;
flex-direction: column;
font-family: "Lato";
font-size: 22px;
font-weight: 700;
align-items: center;
`

export const TotalPrice = styled.div`
text-align: center;
font-family: "Lato";
font-weight: 700;
`

export const EmptyCartMessage = styled.span`

`
export const ButtonFinalyBuy=styled.button`
display: flex;
text-align: center;
margin: 10px;
font-family: "Lato";
font-size: 1rem;
font-weight: 700;
background-color:#D14B8F;
opacity: 70%;
padding: 1rem;
border-radius: 4px;
border: none;
:hover{
    
    opacity:100%;
    transition: 0.2s;
}
`
export const ContainerTotalPriceButton=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;`