import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    margin: 20px;
`;

const Filter = styled.div`
    margin: 20px;
`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter</Filter>
        <Filter>Filter2</Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
