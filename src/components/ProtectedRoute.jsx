import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginFailure } from "../redux/userSlice"; // Action to clear user state


const decodeJWT = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  //const clearState = () => ({ type: PURGE });

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');

//     if (token && isTokenExpired(token)) {
//         dispatch(logout());
//         dispatch(clearState());
//         localStorage.removeItem('authToken');
//     }
// }, [dispatch]);

  if (user) {
    try {
      const decodedToken = decodeJWT(user.token);
      const currentTime = Date.now() / 1000; // Current time in seconds

      if (!decodedToken || decodedToken.exp < currentTime) {
        // Token expired or invalid, log out user
        dispatch(loginFailure(null));
        return <Navigate to="/login" replace />;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      dispatch(loginFailure(null)); // Clear user state
      return <Navigate to="/login" replace />;
    }
  } else {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
