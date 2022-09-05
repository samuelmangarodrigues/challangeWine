import { useEffect } from 'react';
import ItemCards from '../../components/ItemCards';
import { useItem } from '../../contexts/ItemContext';
import {
  ButtonPagination,
  ButtonSearch,
  ContainerPagination,
  ContainerSearch,
  ContainerStore,
  DivItems,
  FindProducts,
  InputSearch,
  ContainerPaginationAndItems,
} from './styled';
import { useState } from 'react';
import { IoSearchCircleOutline } from 'react-icons/io5';
import { useCart } from '../../contexts/CartContext';
import { ToastContainer } from 'react-toastify';
import FilterPrices from '../../components/FilterPrices';
const Loja = () => {
  const {
    getItems,
    currentItems,
    pages,
    setCurrentPage,
    filteredProds,
    filterProductsFunc,
  } = useItem();
  const { addCart } = useCart();

  const [input, setInput] = useState<string>('');

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <ContainerStore>
        <ContainerSearch>
          <InputSearch
            id="input_name"
            placeholder="Pesquisar"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></InputSearch>
          <ButtonSearch
            id='btnSearch'
            onClick={() => {
              filterProductsFunc(input as string);
            }}
          >
            <IoSearchCircleOutline size={31.66} color="#D14B8F" />
          </ButtonSearch>
        </ContainerSearch>
        {input !== '' &&
        filteredProds.length !== 62 &&
        filteredProds.length !== 0 ? (
          <FindProducts>
            <strong>{filteredProds.length}</strong>produtos encontrados
          </FindProducts>
        ) : (
          false
        )}
        <ToastContainer />
        <ContainerPaginationAndItems>
          <FilterPrices />
          <div>
            <DivItems>
              {filteredProds.length > 0 && filteredProds.length !== 62
                ? filteredProds.map((item) => (
                    <ItemCards
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      discount={item.discount}
                      price={item.price}
                      priceMember={item.priceMember}
                      priceNonMember={item.priceNonMember}
                      handleFunc={() => addCart(item.id)}
                    />
                  ))
                : currentItems.map((item) => (
                    <>
                      <ItemCards
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        discount={item.discount}
                        price={item.price}
                        priceMember={item.priceMember}
                        priceNonMember={item.priceNonMember}
                        handleFunc={() => addCart(item.id)}
                      />
                    </>
                  ))}
            </DivItems>
            <ContainerPagination>
              {Array.from(Array(pages), (item, index) => {
                return (
                  <ButtonPagination
                    value={index}
                    onClick={(e) =>
                      setCurrentPage(Number(e.currentTarget.value))
                    }
                  >
                    {index + 1}
                  </ButtonPagination>
                );
              })}
            </ContainerPagination>
          </div>
        </ContainerPaginationAndItems>
      </ContainerStore>
    </>
  );
};
export default Loja;
