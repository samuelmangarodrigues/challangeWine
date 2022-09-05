import { useFilterPrice } from "../../contexts/FilterPriceContext"
import { ContainerCheckBox, ContainerInputsLabel } from "./styles"


const FilterPrices=()=>{

const {alternRadio,firstBoll,setFirstBoolean,setThirth,thirthBoll}=useFilterPrice()

    return (
        <ContainerCheckBox>
            <h2>Refine sua busca</h2>
            <p>Por Preço:</p>
                <ContainerInputsLabel>
                    <input name="filter" type="radio"value="100/200" checked={firstBoll} onChange={()=>
                        alternRadio(setFirstBoolean,setThirth)}>  
                    </input>
                    <label>R$100,00 a R$200,00</label>
                </ContainerInputsLabel>
                <ContainerInputsLabel>
                    <input name="filter" type="radio" value="500+" checked={thirthBoll} onChange={()=>alternRadio(setThirth,setFirstBoolean)}></input>
                    <label>Acima de R$300,00</label>
                </ContainerInputsLabel>
        </ContainerCheckBox>
    )


}

export default FilterPrices