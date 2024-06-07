import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handelSubmit = (e) => {
    if (formData.email.length > 0 && formData.password.length > 0) {
      console.log("Signed in!");
      navigate("/");
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div>Sign in</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          required
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        <input type="submit" value={"sign in"} onClick={handelSubmit} />
      </form>
      <Link to={"/"}>
        <button>Back to home</button>
      </Link>
    </>
  );
}
