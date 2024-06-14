import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex : 1;
`

const Image = styled.img`
    width : 100%;
    object-fit : cover;
    height : 90vh;
`
const InfoContainer = styled.div` 
    flex : 1;
    padding : 0px 50px;
`

const Title = styled.h2`
    font-weight: 100;

`
const Desc = styled.p`
    margin : 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const RupeeSign = styled.span`
    font-weight: 100;
    font-family: 'DejaVu Sans' !important;
`;

const FilterContainer = styled.div`
    display : flex;
    width : 50%;
    margin : 30px;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center; 
`

const FilterTitle = styled.span`
    font-size : 20px;
    font-weight: 200;

`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius : 50%;
    background-color : ${props=>props.color};
    margin : 0px 5px;
    cursor : pointer;
`

const FilterSize = styled.select`
    margin-left : 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://static.zara.net/assets/public/4f12/dfd9/af2c431b93ad/3458f7c8b989/04319559802-e1/04319559802-e1.jpg?ts=1708330666783&w=563"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Striped Oversize Shirt</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non incidunt dignissimos rem ullam excepturi, qui a at tempora laudantium voluptas quam tempore sit, neque quasi quos, cumque adipisci assumenda impedit.</Desc>
                <Price><RupeeSign>&#x20B9;</RupeeSign>1499</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="red"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle></FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product