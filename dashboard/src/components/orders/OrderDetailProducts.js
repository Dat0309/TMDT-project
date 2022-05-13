import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = (props) => {
  const { order, loading } = props;

  if (!loading) {
    // Calculate Price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Mặt hàng</th>
          <th style={{ width: "20%" }}>Đơn giá</th>
          <th style={{ width: "20%" }}>Số lượng</th>
          <th style={{ width: "20%" }} className="text-end">
            Tổng tiền
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "40px", height: "40px" }}
                    className="img-xs"
                  />
                </div>
                <div className="info">{item.name}</div>
              </Link>
            </td>
            <td>{item.price} </td>
            <td>{item.qty} </td>
            <td className="text-end"> {item.qty * item.price}Đ</td>
          </tr>
        ))}

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Tạm tính:</dt> <dd>{order.itemsPrice}Đ</dd>
              </dl>
              <dl className="dlist">
                <dt>Phí vận chuyển:</dt> <dd>{order.shippingPrice}Đ</dd>
              </dl>
              <dl className="dlist">
                <dt>Thành tiền:</dt>
                <dd>
                  <b className="h5">{order.totalPrice}Đ</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Tình trạng:</dt>
                <dd>
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-success">
                      Đã thanh toán
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      Chưa thanh toán
                    </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
