import React, { useState } from "react";
import "./Signup.css";
import { FormControlLabel, Checkbox, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/footer";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [tc, setTc] = useState(false);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const validRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let data = {
      email: email,
      username: name,
      password: password,
      tc: tc,
      password2: password2,
    };

    if (!data.email || !data.username || !data.password || !data.password2 || !data.tc) {
      setError({ status: true, msg: "All fields are required", type: "error" });
      return;
    }

    if (data.password !== data.password2) {
      setError({ status: true, msg: "Passwords do not match", type: "error" });
      return;
    }

    // if (password.length <= 6) {
    //   setError({
    //     status: true,
    //     msg: "Password length should be greater than 6",
    //     type: "error",
    //   });
    //   return;
    // }

    // if (!data.email.match(validRegex) || isNaN(data.email[0])) {
    //   setError({ status: true, msg: "Invalid email", type: "error" });
    //   return;
    // }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const responseData = await response.json();
        setError({
          status: true,
          msg: responseData.errorMsg,
          type: "error",
        });
        return;
      }


      // Reset form fields and navigate after successful registration
      document.getElementById("register-form").reset();
      setEmail("");
      setName("");

      setPassword("");
      setPassword2("");
      setTc(false);

      // Navigate to the login page after a delay
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Error during registration:", error);
      setError({ status: true, msg: "An error occurred during registration", type: "error" });
    }
  };

  const handleCheckboxClick = () => {
    setTc(true);
  };

  return (
    <>
      <Navbar />
      <div className="signup-body">
        <div className="signup-body">

          <div className="container signup-form-body">
            <h2 className="form-title">Signup</h2>
            <form
              method="POST"
              className="register-form"
              id="register-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="email" className="input-icon">
                  <i class="zmdi zmdi-email"></i>
                  <input
                    className="signup-input-class"
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="name" className="input-icon">
                  <i class="zmdi zmdi-account-add"></i>
                  <input
                    className="signup-input-class"
                    type="text"
                    name="username"
                    id="name"
                    autoComplete="off"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="input-icon">
                  <i class="zmdi zmdi-lock"></i>
                  <input
                    className="signup-input-class"
                    type="password"
                    name="password"
                    id="password1"
                    autoComplete="off"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="password2" className="input-icon">
                  <i class="zmdi zmdi-lock"></i>
                  <input
                    className="signup-input-class"
                    type="password"
                    name="password2"
                    id="password2"
                    autoComplete="off"
                    placeholder="Enter Your Password Again"
                    value={password2}
                    onChange={(e) => {
                      setPassword2(e.target.value);
                    }}
                  />
                </label>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tc}
                    onClick={handleCheckboxClick}
                    color="primary"
                    name="tc"
                    id="tc"
                  />
                }
                label="I agree to term and condition."
              />
              <div className="button-container">
                <button className="register-button" type="submit" >
                  Register
                </button>
              </div>

            </form>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
