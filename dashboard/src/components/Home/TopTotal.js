import React from "react";

const TopTotal = (props) => {
  const { orders, products } = props;
  let totalSale = 0;
  let totalSaleFuture = 0;
  let countIsPaid = 0;
  let countÍNotPaid = 0;
  if (orders) {
    orders.map((order) =>
      order.isPaid === true ? (totalSale = totalSale + order.totalPrice) : null
    );
  }
  if (orders) {
    orders.map((order) =>
      order.isPaid === true ? (countIsPaid += 1) : null);
  }
  if (orders) {
    orders.map((order) =>
      order.isPaid === false ? (countÍNotPaid += 1) : null);
  }
  if (orders) {
    orders.map((order) =>
      totalSaleFuture = totalSaleFuture + order.totalPrice);
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="card card-body mb-4 shadow-sm">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle alert-primary">
                <i className="text-primary fas fa-usd-circle"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Tổng doanh thu hiện tại</h6>{" "}
                <span>{totalSale.toFixed(0)}Đ</span>
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-body mb-4 shadow-sm">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle alert-success">
                <i className="text-success fas fa-bags-shopping"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Tổng số đơn hàng</h6>
                {orders ? <span>{orders.length}</span> : <span>0</span>}
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-body mb-4 shadow-sm">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle alert-warning">
                <i className="text-warning fas fa-shopping-basket"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Tổng số sản phẩm</h6>
                {products.products ? <span>{products.products.length * products.pages}</span> : <span>0</span>}
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card card-body mb-4 shadow-sm">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle alert-primary">
                <i className="text-primary fas fa-usd-circle"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Số đơn hàng đã thanh toán</h6>{" "}
                <span>{countIsPaid}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-body mb-4 shadow-sm">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle alert-success">
                <i className="text-success fas fa-bags-shopping"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Số đơn hàng chưa thanh toán</h6>
                <span>{countÍNotPaid}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-body mb-4 shadow-sm">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle alert-warning">
                <i className="text-warning fas fa-shopping-basket"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Tổng doanh thu dự kiến</h6>
                <span>{totalSaleFuture.toFixed(0)}Đ</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTotal;
