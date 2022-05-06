import React from "react";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Orders from "./Orders";
import { useSelector } from "react-redux";
import OrderStatistics from "../Home/OrderStatistics";
import SaleStatistics from "../Home/SalesStatistics";

const OrderMain = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">QUẢN LÝ ĐƠN HÀNG</h2>
      </div>
      <div className="row">
        <OrderStatistics />
        <SaleStatistics />
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Tìm kiếm đơn hàng, người yêu, em gái..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Tình trạng</option>
                <option>Xác nhận</option>
                <option>Đã huỷ</option>
                <option>Tất cả</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Hiển thị 20</option>
                <option>Hiển thị 30</option>
                <option>Hiển thị 40</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Orders orders={orders} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
