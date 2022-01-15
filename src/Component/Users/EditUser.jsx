import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    loadUser();
  }, []);

  const { name, userName, email, phone } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <div className="w-75 mx-auto shadow p-5 mt-5">
        <h1 className="text-center mb-4"> Edit a User</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control form-control-lg mt-3"
              name="name"
              value={name}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter userName"
              className="form-control form-control-lg mt-3"
              name="userName"
              value={userName}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter email address"
              className="form-control form-control-lg mt-3"
              name="email"
              value={email}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter phone number"
              className="form-control form-control-lg mt-3 "
              name="phone"
              value={phone}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
          </div>
          <button className="btn btn-warning btn-block mt-4" type="submit">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
