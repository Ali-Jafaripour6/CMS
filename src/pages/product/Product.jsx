import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/Charts/Charts";
import { productDetail } from "../../components/Data";
import PublishIcon from "@mui/icons-material/Publish";
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

      <div className="productButton">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Mobile</label>
            <input type="text" placeholder="iPhone" />

            <label htmlFor="">In Stock</label>
            <select name="" id="inStock">
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
            <label htmlFor="">is Active</label>
            <select name="" id="isActive">
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploader">
              <img
                className="productIMGUploader"
                src="/images/iphone.jpg"
                alt=""
              />
              <label htmlFor="">
                <PublishIcon></PublishIcon>
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="productButtonUpload">Upload Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
