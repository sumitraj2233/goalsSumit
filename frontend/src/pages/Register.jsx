import { useState } from "react";
import { FaUser } from "react-icons/fa";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  console.log(formData);
  const handleChange1 = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
    // setFormData((prevState)=>{
    //     ...prevState,
    //     [e.target.name]: e.target.value,
    // })
  };
  const handleChange2 = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  const handleChange3 = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };
  const handleChange4 = (e) => {
    setFormData({
      ...formData,
      password2: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={formData.name}
              placeholder="Enter name"
              onChange={handleChange1}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              value={formData.email}
              placeholder="Enter Email"
              onChange={handleChange2}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={formData.password}
              placeholder="Enter password"
              onChange={handleChange3}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={formData.password2}
              placeholder="Confirm password"
              onChange={handleChange4}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
