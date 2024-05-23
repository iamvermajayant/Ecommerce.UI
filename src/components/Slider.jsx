import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';


const Container = styled.div`
    height: 100vh;
    width : 100%;
    display : flex;
`

const Arrow = styled.div`
    width : 50px;
    height : 50px;
    background-color : #fff7f7;
    border-radius : 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position : absolute;
    top : 0px;
    bottom : 0px;
    margin : auto;
    right : ${props => props.direction === "right" && "10px"};
    left : ${props => props.direction === "left" && "10px"};
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Arrow direction="right">
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider