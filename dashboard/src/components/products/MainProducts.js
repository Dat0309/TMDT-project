import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { listCategories } from "../../Redux/Actions/CategoryActions";
import Pagination from "./pagination";

const MainProducts = (props) => {
  const { keyword, pagenumber } = props;
  const [keywordSearch, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const categoriesList = useSelector((state) => state.categoriesList);
  const { loadingCate, errorCate, categories } = categoriesList;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products} = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { error: errorDelete, success: successDelete } = productDelete;

  const submitHandler = (e) => {
    e.preventDefault();
    if (keywordSearch.trim()) {
      history.push(`/search/${keywordSearch}`);
    } else {
      history.push("/search/");
    }
  };

  useEffect(() => {
    dispatch(listProducts(keyword, pagenumber));
    dispatch(listCategories());
  }, [dispatch, successDelete, keyword, pagenumber]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">QUẢN LÝ MẶT HÀNG</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Tạo mới
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <form onSubmit={submitHandler} className="input-group">
                <input
                  type="search"
                  placeholder="Tìm kiếm mặt hàng, nguòi yêu, siêu em gái..."
                  className="form-control p-2"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit" className="search-button">
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                {loadingCate ? (
                  <div className='mb-5'>
                    <Loading />
                  </div>
                ) : errorCate ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    <option>Chọn loại mặt hàng</option>
                    {categories.map((category) => (
                      <option value={category._id}>{category.categoryName}</option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Mới nhất</option>
                <option>Rẻ nhất</option>
                <option>Nhiều lượt xem</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Products */}
              {products.products.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
          )}

          {/* <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav> */}
          {/* Pagination */}
          <Pagination
            pages={products.pages}
            page={products.page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
