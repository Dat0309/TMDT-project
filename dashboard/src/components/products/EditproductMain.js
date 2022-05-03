import React, { useState, useEffect } from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  updateProduct,
} from "./../../Redux/Actions/ProductActions";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstants";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { categoryDetails, listCategories } from "../../Redux/Actions/CategoryActions";
import { listDiscounts } from "../../Redux/Actions/DiscountActions";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditProductMain = (props) => {
  const { productId } = props;

  const [name, setName] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [imageBanner, setImageBanner] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [discountID, setDiscountID] = useState("");

  const dispatch = useDispatch();

  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = productEdit;

  const categoriesList = useSelector((state) => state.categoriesList);
  const { loadingCate, errorCate, categories } = categoriesList;

  const categoryDetail = useSelector((state) => state.categoryDetail);
  const { loadingCateDetail, errorCateDetail, category } = categoryDetail;

  const discountList = useSelector((state) => state.discountList);
  const { loadingDis, errorDis, discounts } = discountList;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    dispatch(listCategories());
    dispatch(listDiscounts());
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      toast.success("Product Updated", ToastObjects);
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(editProduct(productId));
      } else {
        setName(product.name);
        setCategoryID(product.categoryId);
        setDescription(product.description);
        setCountInStock(product.countInStock);
        setImage(product.image);
        setImageBanner(product.imageBanner);
        setPrice(product.price);
        setDiscountID(product.discount);
      }
    }
    dispatch(categoryDetails(categoryID));
  }, [product, dispatch, productId, successUpdate, categoryID]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        categoryID,
        image,
        imageBanner,
        description,
        price,
        countInStock,
        discountID,
      })
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Quay lại trang quản lý
            </Link>
            <h2 className="content-title">Chỉnh sửa mặt hàng</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Lưu
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          Tên mặt hàng
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          id="product_title"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_category" className="form-label">
                          Loại mặt hàng
                        </label>
                        <select className="form-select"
                          onChange={(e) => setCategoryID(e.target.value)}
                          value={category.categoryName}
                          id="product_category">
                          {(loadingCate && loadingCateDetail) ? (
                            <div className='mb-5'>
                              <Loading />
                            </div>
                          ) : (errorCate || errorCateDetail) ? (
                            <Message variant="alert-danger">{error}</Message>
                          ) : (
                            <>
                              <option>{category.categoryName}</option>
                              {categories.map((categoryState) => (
                                <option value={categoryState._id}>
                                  {categoryState.categoryName}
                                </option>
                              ))}
                            </>
                          )}
                        </select>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Giá
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Số lượng trong kho
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={countInStock}
                          onChange={(e) => setCountInStock(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Mô tả</label>
                        <textarea
                          placeholder="Type here"
                          className="form-control"
                          rows="7"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Hình ảnh</label>
                        <input
                          className="form-control"
                          type="text"
                          value={image}
                          required
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Ảnh bìa</label>
                        <input
                          className="form-control"
                          type="text"
                          value={imageBanner}
                          required
                          onChange={(e) => setImageBanner(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_dicount" className="form-label">
                          Chương trình giảm giá
                        </label>
                        <select className="form-select"
                          onChange={(e) => setDiscountID(e.target.value)}
                          value={discountID}
                          id="product_category">
                          {(loadingDis && loading && loadingCate) ? (
                            <div className='mb-5'>
                              <Loading />
                            </div>
                          ) : (errorDis || error) ? (
                            <Message variant="alert-danger">{error}</Message>
                          ) : (
                            <>
                              {/* <option>{category.categoryName}</option> */}
                              {discounts.map((discountState) => (
                                <option value={discountState._id}>
                                  {discountState.name}
                                </option>
                              ))}
                            </>
                          )}
                        </select>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
