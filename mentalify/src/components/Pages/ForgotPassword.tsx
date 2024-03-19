import NavBar from "../NavBar";
import Footer from "../Footer";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react"; // Import useState hook
import "../../Stylesheets/Forgot.css";

const apiUrl = import.meta.env.BASE_URL || "http://localhost:5000";

type FormFields = {
  email: string;
};

type FormFields2 = {
  code: Number;
};

type FormFields3 = {
  password: string;
};

function ForgotPassword() {
  const [email, setEmail] = useState(""); // State to store email
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted1, setFormSubmitted1] = useState(false);
  const [formSubmitted2, setFormSubmitted2] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2, isSubmitting: isSubmitting2 },
  } = useForm<FormFields2>();

  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3, isSubmitting: isSubmitting3 },
  } = useForm<FormFields3>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      setEmail(data.email);
      const response = await fetch(`${baseUrl}/api/forgot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("worked");
        setFormSubmitted1(true);
      } else {
        console.error("Error finding Data!");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const onSubmit2: SubmitHandler<FormFields2> = async (data) => {
    try {
      const response = await fetch(`${baseUrl}/api/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, email }),
      });
      if (response.ok) {
        setFormSubmitted2(true);
        setErrorMessage("");
      } else {
        const responseData = await response.json();
        const errorMessage = responseData.message;
        setErrorMessage(errorMessage);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const onSubmit3: SubmitHandler<FormFields3> = async (data) => {
    try {
      const response = await fetch(`${baseUrl}/api/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, email }),
      });
      if (!response.ok) {
        console.error("Error finding Data!");
      }
      window.location.href = "/login";
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <div className="content-container">
        <NavBar />
        <div id="mainContainerForm">
          <form
            id="FormForgot"
            className="w-100 d-flex flex-column align-items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="contentSep rounded mb-3 text-center fw-bold">
              <label className="form-label Headings">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    if (!value.includes("@")) {
                      return "Email must include @";
                    }
                    return true;
                  },
                })}
              />
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email.message}</div>
              )}
              <button
                disabled={isSubmitting2}
                type="submit"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </form>

          {formSubmitted1 && (
            <form
              className="w-100 d-flex flex-column align-items-center"
              onSubmit={handleSubmit2(onSubmit2)}
            >
              <div className="contentSep rounded mb-3 text-center fw-bold">
                <label className="form-label Headings">One-Time Code</label>
                <input
                  type="number"
                  placeholder="123456"
                  className="form-control"
                  {...register2("code", {
                    required: "Code is required",
                  })}
                />
                {errorMessage && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-success"
                >
                  Check
                </button>
              </div>
            </form>
          )}

          {formSubmitted2 && (
            <div>
              <form
                id="FormForgot"
                className="w-100 d-flex flex-column align-items-center"
                onSubmit={handleSubmit3(onSubmit3)}
              >
                <div className="contentSep rounded mb-3 text-center fw-bold">
                  <label className="form-label Headings">
                    Enter New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    {...register3("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                    })}
                  />
                  {errors3.password && (
                    <div style={{ color: "red" }}>
                      {errors3.password.message}
                    </div>
                  )}

                  <button
                    disabled={isSubmitting3}
                    type="submit"
                    className="btn btn-success"
                  >
                    Create New Password
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="footer--pin">
        <Footer />
      </div>
    </>
  );
}

export default ForgotPassword;
