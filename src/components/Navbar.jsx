import { SearchOutlined } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
    height : 60px;
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
`

const Language = styled.div`
    font-size : 14px;
    cursor : pointer;
`

const SearchContainer = styled.div`
    border : 0.5px solid lightgray;
    display : flex;
    align-items : center;
    margin-left : 25px;
    padding: 5px;
    
`;

const Search = styled.div`
    
`
const Input = styled.div`
    
`

const Left = styled.div`
    flex : 1;
    display : flex;
    align-items: center;
`
const Right = styled.div`
    flex : 1;
`
const Center = styled.div`
    flex : 1;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    input 
                    <SearchOutlined/>
                </SearchContainer>
            </Left>
            <Center>center</Center>
            <Right>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo debitis aliquid eos autem perspiciatis iure rem tempore animi exercitationem unde.</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar