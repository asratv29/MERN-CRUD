import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const Navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/create", { name, email, phone })
      .then((result) => {
        console.log(result);
        Navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container w-50 my-5 bg-white text-black">
      <form onSubmit={Submit}>
        <h3 className="d-block text-center py-2">Create User</h3>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
