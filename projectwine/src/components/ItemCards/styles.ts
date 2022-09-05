import styled from "styled-components";


export const ContainerItem = styled.div`
display: flex;
box-shadow:  0px 5px 10px gray;
background-color: white;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
font-size: 1rem;
margin: 2rem;
padding: 1rem;
width: 14rem;
height: 20.813rem;
justify-content: center;
text-align: center;
`

export const Img = styled.img`
width: 9.688;
height: 11.133rem;
`
export const ContainerCardItem = styled.div`
display: flex;
flex-direction: column;
font-family: "Lato";
font-weight: 700;
align-items: center;
`
export const ButtonItems = styled.button`
border: none;
border-radius: 4px;
background-color: #7EBC43;
color: white;
padding: 1rem;
width: 17rem;
:hover{
    background-color: green;
    transition: 0.2s;
}
`

export const NameItem = styled.h2`
font-size:1rem;
`

export const ContainerDiscount = styled.div`
display:flex;
justify-content: center;
align-items: center;
`

export const DiscountPrice = styled.div`
margin: 5px;
border: none;
background-color: orange;
color:white;
padding: 2px;
text-align: center;
border-radius: 3px;
`
export const TotalPrice = styled.s`
color:gray;
`

export const PricePartner = styled.span`
color:#B6116E;
margin:5px;
span{
font-size:10px ;
}`

export const ContainerPriceNoPartner = styled.div`
color: gray;
`