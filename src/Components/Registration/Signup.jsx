import React, { useState } from "react";
import "./Signup.css";
import { FormControlLabel, Checkbox, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";

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
  <Navbar/>
    <div className="signup-body">
      <div className="signup-body">
        <section className="signup">
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

              {/* <div className="form-check d-flex justify-content-center mb-5">
                <label className="form-check-label" htmlFor="form2Example3">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    checked={tc} onChange={handleCheckboxClick} color="primary" name="tc" id="tc" />
                  You agree to our{" "}
                  <span style={{ color: "red", marginLeft: "5px" }}>
                    {" "}
                    Privacy Policy & Cookie Policy
                  </span>{" "}
                  <a href="#!" style={{ marginLeft: "5px" }}>
                    Terms of service
                  </a>
                </label>
              </div> */}
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
            <div className="card1">
              <div className="signup-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="100"
                  viewBox="0 0 16 16"
                  style={{ margin: "7px" }}
                >
                  <path
                    fill="currentColor"
                    d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"
                  />
                </svg>
              </div>
              <div className="create-account" style={{ marginTop: "inherit" }}>
                Create An Account
              </div>
              <div class="row" style={{ marginTop: "30px" }}>
                <div class="col-md-12">
                  <a
                    class="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                    href="#"
                  >
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                    Signup Using Google
                  </a>
                </div>

                <div class="col-md-12" style={{ marginTop: "30px" }}>
                  <a
                    class="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="16"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#1877F2"
                        d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                      />
                      <path
                        fill="#FFF"
                        d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                      />
                    </svg>
                    Signup Using Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Signup;
