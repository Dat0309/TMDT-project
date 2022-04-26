import { DISCOUNT_DETAILS_FAIL, DISCOUNT_DETAILS_REQUEST, DISCOUNT_DETAILS_SUCCESS, DISCOUNT_LIST_FAIL, DISCOUNT_LIST_REQUEST, DISCOUNT_LIST_SUCCESS } from "../Constants/discountConstants";

// discount list
export const discountsReducer = (state = { discounts: [] }, action) => {
    switch (action.type) {
        case DISCOUNT_LIST_REQUEST:
            return { loading: true, discounts: [] };
        case DISCOUNT_LIST_SUCCESS:
            return {
                loading: false,
                discounts: action.payload.discounts,
            };
        case DISCOUNT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// single discount
export const discountDetailsReducer = (state = { discount: {} }, action) => {
    switch (action.type) {
        case DISCOUNT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case DISCOUNT_DETAILS_SUCCESS:
            return { loading: false, discount: action.payload };
        case DISCOUNT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};