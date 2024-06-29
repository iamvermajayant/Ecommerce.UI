import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex : 1;
    display: flex;
    flex-direction : column;
    padding: 20px;

`


const Title = styled.h3`
    margin-bottom: 30px;
    
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style : none;
    display: flex;
    flex-wrap : wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
    flex : 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const Center = styled.div`
    flex : 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius :50%;
    color : #fff;
    background-color : #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const ContactItem = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>BE YOUNG.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti laudantium fugit assumenda optio voluptate veniam, aliquid natus. Ut, laboriosam. Sed dolorem sequi dolor delectus? Expedita quo nam sunt nulla ex, eaque id doloribus consectetur itaque facere quibusdam sequi praesentium.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon >
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Women</ListItem>
                <ListItem>Men</ListItem>
                <ListItem>Kids</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>Tshirts</ListItem>
                <ListItem>Shoes</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight : '10px'}}/> Flock 9 co-live, Kundanhalli Gate, Bengaluru 560066
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight : '10px'}}/> +91 9450871384
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight : '10px'}}/> Contact@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer