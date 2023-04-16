import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
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
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Login and start setting goal</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
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
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
