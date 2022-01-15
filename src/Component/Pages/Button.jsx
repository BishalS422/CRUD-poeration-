import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const tableStyle = css`
  .btn {
    margin: 0px 4px;
  }
`;

const Button = () => {
  return (
    <div className={tableStyle}>
      <Link class="btn btn-primary" to={""}>
        View
      </Link>
      <Link className="btn btn-outiline-primary" to={""}>
        Edit
      </Link>
      <Link className="btn btn-danger" to={""}>
        Delete
      </Link>
    </div>
  );
};

export default Button;
