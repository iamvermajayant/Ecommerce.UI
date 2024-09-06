import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../RequestMethod";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        const errorMessage = err.response?.data?.message || "An error occurred";
        dispatch(loginFailure(errorMessage));
    }
}
