import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import axios from "axios";

const tableStyle = css`
  .btn {
    margin: 0px 4px;
  }
`;

const Button = (props) => {
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);

    props.callFunction(); //calling parent component function
  };
  //console.log(props.user.id);
  return (
    <div className={tableStyle}>
      <Link className="btn btn-primary" to={""}>
        View
      </Link>
      <Link
        className="btn btn-outiline-primary"
        to={`/editUser/${props.user.id}`}
      >
        Edit
      </Link>
      <Link
        className="btn btn-danger "
        onClick={() => {
          deleteUser(props.user.id);
        }}
        to={""}
      >
        Delete
      </Link>
    </div>
  );
};

export default Button;
