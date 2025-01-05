import { useEffect, useState } from "react";
import { userRequest } from "../RequestMethod";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const SuccessCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MyOrdersWrapper = styled.div`
  display: flex;
  align-items: start;
  padding : 1rem;
`

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Success = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const queryParams = new URLSearchParams(window.location.search);
  const sessionId = queryParams.get("session_id");
  const [lineItems, setLineItems] = useState(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrder = sessionStorage.getItem("orderDetails");
    const storedLineItems = sessionStorage.getItem("lineItems");

    if (storedOrder && storedLineItems) {
      // If order details are already stored, use them
      setOrderDetails(JSON.parse(storedOrder));
      setLineItems(JSON.parse(storedLineItems));
      setLoading(false);
    } else if (sessionId) {
      // If no data in sessionStorage, fetch it
      fetch(
        `http://localhost:5000/make-payment/get-session?session_id=${sessionId}`
      )
        .then((response) => response.json())
        .then((data) => {
          setOrderDetails(data);
          setLoading(false);

          if (data.metadata) {
            const parsedLineItems = JSON.parse(data.metadata.line_items);
            const productIds = JSON.parse(data.metadata.product_ids);

            parsedLineItems.forEach((item, index) => {
              item.price_data.product_data.product_id = productIds[index];
            });

            setLineItems(parsedLineItems);

            // Save the fetched data to sessionStorage
            sessionStorage.setItem("orderDetails", JSON.stringify(data));
            sessionStorage.setItem(
              "lineItems",
              JSON.stringify(parsedLineItems)
            );

            const orderData = {
              userID: "661a4f7ce39c6694f483f372", // Static userID or dynamic from session
              products: parsedLineItems.map((item) => ({
                productId: item.price_data.product_data.product_id,
                quantity: item.quantity,
                name: item.price_data.product_data.name,
              })),
              amount: "150", // Example total amount
              address: "India", // Example address
            };

            userRequest
              .post("/orders", orderData)
              .then((orderResponse) => {
                console.log("Order created successfully:", orderResponse.data);
              })
              .catch((error) => {
                console.error("Error creating order:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error fetching session details:", error);
          setLoading(false);
        });
    }

    const handleUserInteraction = () => {
      setUserInteracted(true);
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, [sessionId]);

  useEffect(() => {
    if (userInteracted) {
      window.onbeforeunload = () => {
        return ""; // Prompt a confirmation dialog
      };
    }

    return () => {
      window.onbeforeunload = null;
    };
  }, [userInteracted]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!orderDetails) {
    return <div>No order details available.</div>;
  }

  return (
    <>
      <Navbar />
      <Announcements />
      {/* <h2>Success Page</h2>
      <p>Order ID: {orderDetails.id}</p> */}

      <Wrapper>
        <Title>YOUR BAG</Title>
       

        <MyOrdersWrapper>

        
         
        {lineItems && lineItems.length > 0 && (
          <Info>
            <>
            {lineItems.map((item, index) => (
              <>
                <Product>
                <ProductDetail>
                  <Image />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.price_data.product_data.name}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                    </ProductId>
                    <ProductSize>
                      <b>Size:</b> Large
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    {/* <Add /> */}
                    <ProductAmount>45</ProductAmount>
                    {/* <Remove /> */}
                  </ProductAmountContainer>
                  <ProductPrice>$ 88</ProductPrice>
                </PriceDetail>
              </Product>
              </>
            ))}
            </>
          </Info>
          )}


        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ </SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ 562</SummaryItemPrice>
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>
        </Summary>
        
        </MyOrdersWrapper>
        
          {/* <Info>
            <>
              <Product>
                <ProductDetail>
                  <Image />
                  <Details>
                    <ProductName>
                      <b>Product:</b>
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                    </ProductId>
                    <ProductSize>
                      <b>Size:</b> Large
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    
                    <ProductAmount>45</ProductAmount>
                   
                  </ProductAmountContainer>
                  <ProductPrice>$ 88</ProductPrice>
                </PriceDetail>
              </Product>
            </>
          </Info> */}

         
          {/* {lineItems && lineItems.length > 0 && (
            <div>
              <h3>Line Items:</h3>
              <ul>
                {lineItems.map((item, index) => (
                  <li key={index}>
                    <strong>Product Name:</strong>{" "}
                    {item.price_data.product_data.name} <br />
                    <strong>Product ID:</strong>{" "}
                    {item.price_data.product_data.product_id} <br />
                    <strong>Price:</strong> ${item.price_data.unit_amount / 100}{" "}
                    <br />
                    <strong>Quantity:</strong> {item.quantity} <br />
                    {item.price_data.product_data.images && (
                      <img
                        src={item.price_data.product_data.images[0]}
                        alt={item.price_data.product_data.name}
                        width="100"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {!lineItems && <p>No line items available.</p>}
        
      </Wrapper>
    </>
  );
};

export default Success;
