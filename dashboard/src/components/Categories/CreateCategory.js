import React from "react";

const CreateCategory = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Tên
          </label>
          <input
            type="text"
            placeholder="Gõ tên :D"
            className="form-control py-3"
            id="product_name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Hình ảnh</label>
          <input className="form-control" type="file" />
        </div>
        <div className="mb-4">
          <label className="form-label">Mô tả</label>
          <textarea
            placeholder="Gõ mô tả :D"
            className="form-control"
            rows="4"
          ></textarea>
        </div>

        <div className="d-grid">
          <button className="btn btn-primary py-3">Tạo danh mục</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
