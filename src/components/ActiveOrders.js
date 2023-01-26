import React from "react";
import { ActiveOrdersData } from "../data/StatesData";

const ActiveOrders = () => {
  return (
    <div className="table-responsive">
      <h6 className="text-muted">Active Orders</h6>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Order#</th>
            <th scope="col">Customer</th>
            <th scope="col">Zip Code</th>
            <th scope="col">Order Time</th>
            <th scope="col">Vendors </th>
            <th scope="col">Rider </th>
            <th scope="col">Order Amount </th>
          </tr>
        </thead>
        <tbody>
          {ActiveOrdersData&& 
          ActiveOrdersData.map((order) => {
            return (
              <tr>
                <td>{order.order_type}</td>
                <td>{order.order_number}</td>
                <td>
                 <div className="d-flex align-items-center">
                   <img src={order.customer.img} className="customerimg mr-1" alt=""/>
                   <span>
                   <span className="font-8">{order.customer.name}</span>
                   <p className="text-muted font-8 mb-0">{order.customer.number}</p>
                   </span>
                 </div>
                
                </td>
                <td>{order.customer.zip_code}</td>
                <td>{order.order_time}</td>
                <td>
                <div className="d-flex align-items-center">
                   <img src={order.vendors.image} className="customerimg mr-1" alt=""/>
                 </div>
                </td>
                <td>{order.rider.name}</td>
                <td>
                  <span className="orderAmount">{order.order_amount.subtotal}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveOrders;
