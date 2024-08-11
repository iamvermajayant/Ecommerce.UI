import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../RequestMethod";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 90vh;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h2`
  font-weight: 100;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const RupeeSign = styled.span`
  font-weight: 100;
  font-family: "DejaVu Sans" !important;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border: 2px solid teal;
  outline: none;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const SignWrapper = styled.div`
  height: 30px;
  width: 30px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  margin: 0px 10px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");w

  const AddQuantityHandler = () => {
    setQuantity(prev => prev + 1);
  }

  const RemoveQuantityHandler = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  }

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, [id]);

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>
            <RupeeSign>&#x20B9;</RupeeSign>
            {product.price}
          </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product?.color?.map((s) => (
                <FilterColor color={s} key={s} onClick={(e)=>setColor(e.target.value)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle></FilterTitle>
              <FilterSize onChange={(e)=>{setSize(e.target.value)}}> 
                {
                    product?.size?.map((s)=>(
                        <FilterSizeOption key={s} >{s}</FilterSizeOption>
                    ))
                }
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <SignWrapper>
                <Remove onClick={RemoveQuantityHandler} />
              </SignWrapper>
              <Amount>{quantity}</Amount>
              <SignWrapper>
                <Add onClick={AddQuantityHandler} />
              </SignWrapper>
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
