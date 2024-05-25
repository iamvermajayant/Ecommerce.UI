import styled from "styled-components"
import { categories } from "../data/Data"
import CateogoryItem from "./CateogoryItem"

const Container = styled.div`
    display: flex;
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