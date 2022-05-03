import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userListReducer, userLoginReducer } from "./Reducers/userReducers";
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListByCategoryIdReducer,
  productListReducer,
  productUpdateReducer,
} from "./Reducers/ProductReducers";
import {
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListReducer,
} from "./Reducers/OrderReducres";
import { categoryCreateReducer, categoryDeleteReducer, categoryDetailsReducer, categoryEditReducer, categoryListReducer, categoryUpdateReducer } from "./Reducers/CategoryReducers";
import { discountCreateReducer, discountDeleteReducer, discountEditReducer, discountListReducer, discountUpdateReducer } from "./Reducers/DiscountReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  categoriesList: categoryListReducer,
  categoryDetail: categoryDetailsReducer,
  categoryDelete: categoryDeleteReducer,
  categoryCreate: categoryCreateReducer,
  categoryEdit: categoryEditReducer,
  categoryUpdate: categoryUpdateReducer,
  productList: productListReducer,
  productByCategortId: productListByCategoryIdReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  discountList: discountListReducer,
  discountDelete: discountDeleteReducer,
  discountCreate: discountCreateReducer,
  discountEdit: discountEditReducer,
  discountUpdate: discountUpdateReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliveredReducer,
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
