import styled from "styled-components";
import { popularProducts } from "../data/Data";
import Product from "./Product";
import { mobile } from "../responsive";
import { useScrollTrigger } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  ${mobile({ justifyContent: "center" })}
`;

const Products = ({ cat, sort, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let res = await axios.get(
          cat
            ? `http://localhost:5000/api/product?categories=${cat}`
            : `http://localhost:5000/api/product/`
        );
        console.log(res);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  useEffect(() => {
    console.log("Filtered Products updated:", filteredProducts);
  }, [filteredProducts]);
  

  return (
    <Container>
      {cat ? filteredProducts?.map((item) => (
        <Product item={item} key={item.id} />
      )): products?.slice(0,10)?.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
