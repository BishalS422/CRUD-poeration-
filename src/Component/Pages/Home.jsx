import { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/users");

    setUsers(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>i am from home page </h1>

        <table className="table boerder shadow">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">userName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td> {user.name}</td>
                  <td> {user.email}</td>
                  <td>
                    <Button user={user} callFunction={() => loadUsers()} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
