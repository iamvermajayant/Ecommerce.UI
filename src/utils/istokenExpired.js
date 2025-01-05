export const isTokenExpired = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join("")
      );
      const decodedToken = JSON.parse(jsonPayload);
      const currentTime = Date.now() / 1000; // Current time in seconds
  
      return decodedToken.exp < currentTime; // Check if token is expired
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // If decoding fails, consider the token expired
    }
  };