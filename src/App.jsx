import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector, useDispatch } from "react-redux";
import { loginFailure, logout } from "./redux/userSlice";
import { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();


  const decodeJWT = (token) => {
    try {
      const base64Url = token.split(".")[1]; // Get the payload part
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Decode base64
      const jsonPayload = decodeURIComponent(
        atob(base64) // Decode base64 to string
          .split("")
          .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join("")
      );
      return JSON.parse(jsonPayload); // Parse the JSON payload
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  useEffect(() => {
    if (user) {
      try {
        const decodedToken = decodeJWT(user.token); // Decode JWT manually
        const currentTime = Date.now() / 1000; // Current time in seconds

        if (!decodedToken || decodedToken.exp < currentTime) {
          // Token expired or invalid, clear user state
          dispatch(loginFailure(null));
          dispatch(logout());
        }
      } catch (error) {
        console.error("Invalid token on app load:", error);
        dispatch(loginFailure(null)); // Clear user state if error occurs
      }
    }
  }, [user, dispatch]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sucess"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </div>
  );
};

export default App;
