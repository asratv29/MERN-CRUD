import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error));
  }, []);
  const handelDelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteUser/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="container mt-5 mx-auto px-2">
        <div className="mb-2 d-flex justify-content-between align-items-center">
          <div className="position-relative">
            <span className="position-absolute search">
              <i className="fa fa-search"></i>
            </span>
            <input
              className="form-control w-100"
              placeholder="Search by order#, name..."
            />
          </div>

          <div className="px-2">
            <Link to="/create" className="text-white btn btn-info">
              Create User <i className="fa fa-check-circle-o green"></i>
            </Link>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-responsive table-borderless p-3">
            <thead>
              <tr className="bg-light">
                <th scope="col" width="5%">
                  <input className="form-check-input" type="checkbox" />
                </th>

                <th scope="col" width="20%">
                  Name
                </th>
                <th scope="col" width="10%">
                  Status
                </th>

                <th scope="col" width="10%">
                  Phone
                </th>
                <th scope="col" width="10%">
                  Email
                </th>
                <th scope="col" className="text-end" width="20%">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th scope="row">
                    <input className="form-check-input" type="checkbox" />
                  </th>
                  <td>
                    <img
                      src="https://i.imgur.com/VKOeFyS.png"
                      width="25"
                      alt="user avatar"
                    />{" "}
                    {user.name}
                  </td>
                  <td>
                    <i className="fa fa-check-circle-o green"></i>
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>

                  <td className="text-end">
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => handelDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Users;
