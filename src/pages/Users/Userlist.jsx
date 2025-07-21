import React from "react";
import { useState } from "react";
import { userRows } from "../../components/Data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Userlist.css";
export default function Userlist() {
  let [userData, setUserData] = useState(userRows);

  let userDelete = (id) => {
    setUserData(userData.filter((userdata) => userdata.id != id));
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
          <Link to="/" className="link">
            <div className="user">
              <img src={params.row.avatar} className="userIMG" alt="" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 190,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      width: 120,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userDelete"
              onClick={() => userDelete(params.row.id)}
            ></DeleteOutlineIcon>
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userData}
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
