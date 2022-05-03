import axios from "axios";
import { DISCOUNT_CREATE_FAIL, DISCOUNT_CREATE_REQUEST, DISCOUNT_CREATE_SUCCESS, DISCOUNT_DELETE_FAIL, DISCOUNT_DELETE_REQUEST, DISCOUNT_DELETE_SUCCESS, DISCOUNT_EDIT_FAIL, DISCOUNT_EDIT_REQUEST, DISCOUNT_EDIT_SUCCESS, DISCOUNT_LIST_FAIL, DISCOUNT_LIST_REQUEST, DISCOUNT_LIST_SUCCESS, DISCOUNT_UPDATE_FAIL, DISCOUNT_UPDATE_REQUEST, DISCOUNT_UPDATE_SUCCESS } from "../Constants/DiscountConstants";
import { logout } from "./userActions";

export const listDiscounts = () => async (dispatch, getState) => {
    try {
      dispatch({ type: DISCOUNT_LIST_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/discount`, config);
  
      dispatch({ type: DISCOUNT_LIST_SUCCESS, payload: data.discounts });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: DISCOUNT_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  // DELETE DISCOUNT
  export const deleteDisount = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: DISCOUNT_DELETE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      await axios.delete(`/api/discount/${id}`, config);
  
      dispatch({ type: DISCOUNT_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: DISCOUNT_DELETE_FAIL,
        payload: message,
      });
    }
  };
  
  // CREATE DISCOUNT
  export const createDiscount =
    (name, description, discount_percent) =>
      async (dispatch, getState) => {
        try {
          dispatch({ type: DISCOUNT_CREATE_REQUEST });
  
          const {
            userLogin: { userInfo },
          } = getState();
  
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
  
          const { data } = await axios.post(
            `/api/discount/`,
            { name, description, discount_percent },
            config
          );
  
          dispatch({ type: DISCOUNT_CREATE_SUCCESS, payload: data });
        } catch (error) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          if (message === "Not authorized, token failed") {
            dispatch(logout());
          }
          dispatch({
            type: DISCOUNT_CREATE_FAIL,
            payload: message,
          });
        }
      };
  
  // EDIT DISCOUNT
  export const editDiscount = (id) => async (dispatch) => {
    try {
      dispatch({ type: DISCOUNT_EDIT_REQUEST });
      const { data } = await axios.get(`/api/discount/${id}`);
      dispatch({ type: DISCOUNT_EDIT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: DISCOUNT_EDIT_FAIL,
        payload: message,
      });
    }
  };
  
  // UPDATE DISCOUNT
  export const updateDiscount = (discount) => async (dispatch, getState) => {
    try {
      dispatch({ type: DISCOUNT_UPDATE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/discount/${discount._id}`,
        discount,
        config
      );
  
      dispatch({ type: DISCOUNT_UPDATE_SUCCESS, payload: data });
      dispatch({ type: DISCOUNT_EDIT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: DISCOUNT_UPDATE_FAIL,
        payload: message,
      });
    }
  };
  