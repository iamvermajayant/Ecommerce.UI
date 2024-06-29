import styled from "styled-components";
import { popularProducts } from "../data/Data";
import Product from "./Product";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding : 20px;
    flex-wrap : wrap;
    justify-content: space-around;
    ${mobile({justifyContent : "center"})}
`;

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=> (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products;