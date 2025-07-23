import React from "react";
import { useState } from "react";
import { productsData } from "../../components/Data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Products.css";

export default function Userlist() {
  let [products, setProducts] = useState(productsData);

  let productEdit = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="user">
              <img src={params.row.avatar} className="userIMG" alt="" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userDelete"
              onClick={() => productEdit(params.row.id)}
            ></DeleteOutlineIcon>
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </div>
  );
}
