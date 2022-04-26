import axios from "axios";
import { DISCOUNT_DETAILS_FAIL, DISCOUNT_DETAILS_REQUEST, DISCOUNT_DETAILS_SUCCESS, DISCOUNT_LIST_FAIL, DISCOUNT_LIST_REQUEST, DISCOUNT_LIST_SUCCESS } from "../Constants/discountConstants";

// DISCOUNT LIST
export const listDiscount =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: DISCOUNT_LIST_REQUEST  });
      const { data } = await axios.get(
        `/api/discount`
      );
      dispatch({ type: DISCOUNT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DISCOUNT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// SINGLE DISCOUNT
export const discountDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DISCOUNT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/discount/${id}`);
    dispatch({ type: DISCOUNT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DISCOUNT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};