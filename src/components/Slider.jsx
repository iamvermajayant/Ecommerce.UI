import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import styled from "styled-components";
import { useState } from "react";
import {sliderItems} from "../data/Data";
//import sliderItems from "../data/Slider";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  overflow : hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  opacity: 0.5;
  z-index : 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display : flex;
  transform : translateX(${props => props.slideIndex * -100}vw);
  transition : all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height : 100vh;
  width : 100vw;
  background-color : #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height : 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height : 80%;
`;

const Title = styled.h1`
  font-size : 70px;
`
const Desc =  styled.p`
  margin : 50px 0px;
  font-size : 20px; 
  font-weight: 500;
  letter-spacing : 3px;
`
const Button = styled.button`
  padding : 10px;
  font-size : 20px;
  background-color : transparent;
  cursor: pointer;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item) => (
        <Slide key={item.id} bg={item.bg}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      ))}  
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
