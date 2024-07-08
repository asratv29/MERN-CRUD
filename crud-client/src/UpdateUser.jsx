import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUser/" + id)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
      })
      .catch((error) => console.log(error));
  }, []);
  const submit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/updateUser/" + id, { name, email, phone })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="container w-50 my-5 bg-white text-black">
        <form onSubmit={submit}>
          <h3 className="d-block text-center py-2">Update User</h3>
          <div className="mb-3">
            <label className="form-label">Current Name</label>
            <input
              type="text"
              className="form-control p-2 m-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Current Email</label>
            <input
              type="email"
              className="form-control p-2 m-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Current Phone</label>
            <input
              type="text"
              className="form-control p-2 m-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {name}
          {email}
          {phone}

          <button type="submit" className="btn btn-primary mb-3">
            update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
