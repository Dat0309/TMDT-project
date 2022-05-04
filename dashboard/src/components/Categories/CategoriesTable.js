import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../Redux/Actions/CategoryActions";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import CategoryItem from "./CategoryItem";

const CategoriesTable = () => {

  const dispatch = useDispatch();

  const categoriesList = useSelector((state) => state.categoriesList);
  const { loading, error, categories } = categoriesList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Tên</th>
            <th>Mô tả</th>
            <th className="text-end">Hành động</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          {loading ? (
            <div className='mb-5'>
              <Loading />
            </div>
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              {categories.map((category) => (
                <tr>
                  <CategoryItem id={category._id} categoryName={category.categoryName} description={category.description}/>
                </tr>
              ))}
            </>
          )}

          {/* <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>2</td>
            <td>
              <b>Women fashion</b>
            </td>
            <td>Fashions for Women</td>

            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Edit info
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>3</td>
            <td>
              <b>Kids clothes</b>
            </td>
            <td>Clothes for kids</td>

            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Edit info
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
