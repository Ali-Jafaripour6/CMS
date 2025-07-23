import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/Charts/Charts";
import { productDetail } from "../../components/Data";
export default function product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create Product</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            title="Monthly Sales"
            data={productDetail}
            dataKey="Sale"
          ></Chart>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="/images/iphone.jpg"
              alt="aks"
              className="productInfoImage"
            />
            <span className="productName">iPhone</span>
          </div>
          <div className="productInfoButton">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name:</div>
              <div className="productInfoValue">iPhone 16 Promax</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sale:</div>
              <div className="productInfoValue">120000</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active:</div>
              <div className="productInfoValue">NO</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock</div>
              <div className="productInfoValue">Yes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
