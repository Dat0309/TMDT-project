import React from "react";

const ExtraData = () => {
  return (
    <aside className="col-xl-4 col-lg-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          {/* categories */}
          <>
            <h5 className="mb-3">Danh mục</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat"
              />
              <label className="form-check-label" htmlFor="product-cat">
                Áo thun
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-1"
              />
              <label className="form-check-label" htmlFor="product-cat-1">
                T-Shirt
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-2"
              />
              <label className="form-check-label" htmlFor="product-cat-2">
                Giày
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-3"
              />
              <label className="form-check-label" htmlFor="product-cat-3">
                Quần jogger
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-4"
              />
              <label className="form-check-label" htmlFor="product-cat-4">
                Áo vests
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-5"
              />
              <label className="form-check-label" htmlFor="product-cat-5">
                Knitwear
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-8"
              />
              <label className="form-check-label" htmlFor="product-cat-8">
                Quần Shorts
              </label>
            </div>
          </>
          {/* Colors */}
          <>
            <h5 className="mb-3 mt-4">Màu</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat"
              />
              <label className="form-check-label" htmlFor="product-cat">
                Vàng
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-1"
              />
              <label className="form-check-label" htmlFor="product-cat-1">
                Xanh
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-2"
              />
              <label className="form-check-label" htmlFor="product-cat-2">
                Xanh dương
              </label>
            </div>
          </>
          {/* Size */}
          <>
            <h5 className="mb-3 mt-4">Size</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat"
              />
              <label className="form-check-label" htmlFor="product-cat">
                SM
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-1"
              />
              <label className="form-check-label" htmlFor="product-cat-1">
                M
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="product-cat-2"
              />
              <label className="form-check-label" htmlFor="product-cat-2">
                XL
              </label>
            </div>
          </>
        </div>
      </div>
    </aside>
  );
};

export default ExtraData;
