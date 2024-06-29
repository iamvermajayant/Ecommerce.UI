import styled from "styled-components"
import { categories } from "../data/Data"
import CateogoryItem from "./CateogoryItem"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding : 20px;
    ${mobile({ padding: "0px", flexDirection:"column" })};
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CateogoryItem key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Categories