import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createCategory } from "../../Redux/Actions/CategoryActions";
import { CATEGORY_CREATE_RESET } from "../../Redux/Constants/CategoryConstants";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const CreateCategory = () => {

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { loading, error, category } = categoryCreate;

  useEffect(() => {
    if (category) {
      toast.success("Thêm Danh mục thành công", ToastObjects);
      dispatch({ type: CATEGORY_CREATE_RESET });
      setName("");
      setDescription("");
      setImage("");
    }
  }, [category, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCategory(name, description, image));
  };

  return (
    <>
      <div className="col-md-12 col-lg-4">
        <form onSubmit={submitHandler}>
          {error && <Message variant="alert-danger">{error}</Message>}
          {loading && <Loading />}
          <div className="mb-4">
            <label htmlFor="product_name" className="form-label">
              Tên Danh mục hàng hoá
            </label>
            <input
              type="text"
              placeholder="Gõ tên :D"
              className="form-control py-3"
              id="product_name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Hình ảnh danh mục</label>
            <input
              className="form-control"
              type="text"
              placeholder="URL Hình ảnh"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />
            <input className="form-control" type="file" />
          </div>
          <div className="mb-4">
            <label className="form-label">Mô tả danh mục</label>
            <textarea
              placeholder="Gõ mô tả :D"
              className="form-control"
              rows="4"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary py-3">Tạo danh mục</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCategory;
