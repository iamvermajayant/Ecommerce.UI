import { useEffect, useState } from "react";

const Success = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const queryParams = new URLSearchParams(window.location.search);
  const sessionId = queryParams.get("session_id");
  const [lineItems, setLineItems] = useState(null);

  useEffect(() => {
    if (sessionId) {
      fetch(`http://localhost:5000/make-payment/get-session?session_id=${sessionId}`)
        .then((response) => response.json())
        .then((data) => {
          setOrderDetails(data);
          console.log(orderDetails)
          setLoading(false);
          if (data.metadata && data.metadata.line_items) {
            const parsedLineItems = JSON.parse(data.metadata.line_items);
            setLineItems(parsedLineItems);
          }
        })
        .catch((error) => {
          console.error("Error fetching session details:", error);
          setLoading(false);
        });
        console.log(orderDetails)
    }
  }, [sessionId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!orderDetails) {
    return <div>No order details available.</div>;
  }

  return (
    <div>
      <h2>Success Page</h2>
      <p>Order ID: {orderDetails.id}</p>
      <p>{console.log(orderDetails)}</p>
      <p>{console.log(lineItems)}</p>
      {/* Render more order details as needed */}
    </div>
  );
};

export default Success;
