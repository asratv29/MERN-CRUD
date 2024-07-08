import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function UpdateUser() {
  const { id } = useParams();
  // const navigate = useNavigate();
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [phone, setPhone] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/getUser/" + id)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <div className="container w-50 my-5 bg-white text-black">
        <form>
          <h3 className="d-block text-center py-2">Update User</h3>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Name"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label className="form-label">Contact</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="number or email"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label className="form-label">Occupation</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Employee, UnEmpolyeed, Student"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
