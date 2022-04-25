import { CATEGORY_DETAILS_FAIL, CATEGORY_DETAILS_REQUEST, CATEGORY_DETAILS_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../Constants/CategoriesConstants";

// categories list
export const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true, categories: [] };
        case CATEGORY_LIST_SUCCESS:
            return {
                loading: false,
                categories: action.payload.categories,
            };
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// single category
export const categoryDetailsReducer = (state = { category: {} },action) =>{
    switch (action.type) {
        case CATEGORY_DETAILS_REQUEST:
          return { ...state, loading: true };
        case CATEGORY_DETAILS_SUCCESS:
          return { loading: false, category: action.payload };
        case CATEGORY_DETAILS_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
};