import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const tableStyle = css`
  .btn {
    margin: 0px 4px;
  }
`;

const Button = (props) => {
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
      <Link className="btn btn-danger" to={""}>
        Delete
      </Link>
    </div>
  );
};

export default Button;
