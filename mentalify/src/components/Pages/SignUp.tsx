import "../../Stylesheets/LoginBox.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { SubmitHandler, useForm } from "react-hook-form";
import "../../Stylesheets/Signup.css";

const apiUrl = import.meta.env.BASE_URL || "http://localhost:5000";
console.log(apiUrl);

type FormFields2 = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dob: Date;
};

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields2>();

  const onSubmit: SubmitHandler<FormFields2> = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/api/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Data saved successfully");
        window.location.href = "/login";
      } else {
        return response.json().then((data) => {
          const errorMessage = data.message;
          const emailError = { message: errorMessage }; // Create error object for the email field
          throw emailError;
        });
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <div className="containerLogin">
        <NavBar />
        <form
          className="w-100 d-flex flex-column align-items-center"
          id="formCont"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="contentSep rounded">
            <div className="mb-3 text-center fw-bold">
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
            </div>
            <div className="mb-3 text-center fw-bold">
              <label className="form-label Headings">Create A Password</label>
              <label className="form-label Smaller">
                Password must be 8 characters long
              </label>
              <div className="passwordCont">
                <input
                  className="form-control "
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", {
                    required: "Passsword is required",
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                    validate: (value) => {
                      const confirmPasswordElement = document.getElementById(
                        "confirmPassword"
                      ) as HTMLInputElement;
                      if (confirmPasswordElement) {
                        return (
                          value === confirmPasswordElement.value || //smart use of OR operator
                          "The passwords do not match"
                        );
                      } else {
                        return true; // Return true if confirmPasswordElement is not found
                      }
                    },
                  })}
                />
                {errors.password && (
                  <div style={{ color: "red" }}>{errors.password.message}</div>
                )}

                <input
                  type="password"
                  className="form-control w-60"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                ></input>
              </div>
            </div>
          </div>

          <div className="contentSep rounded">
            <div className="mb-3 text-center fw-bold">
              <label className="form-label Headings">Personal Details</label>
              <div className="passwordCont">
                <input
                  className="form-control w-60"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <div style={{ color: "red" }}>{errors.firstName.message}</div>
                )}
                <input
                  className="form-control w-60"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <div style={{ color: "red" }}>{errors.lastName.message}</div>
                )}
              </div>
              <label className="form-label Headings">Date of Birth</label>
              <input
                className="form-control w-60"
                type="date"
                placeholder="DOB"
                {...register("dob", {
                  required: "DOB is required",
                  validate: (value) => {
                    const selectedDate = new Date(value);
                    const currentDate = new Date();

                    if (selectedDate > currentDate) {
                      return "DOB cannot be in the future";
                    }

                    return true;
                  },
                })}
              />
              {errors.dob && (
                <div style={{ color: "red" }}>{errors.dob.message}</div>
              )}
            </div>
          </div>

          <div id="Buttons">
            <button
              className="btn btn-primary"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Create"}
            </button>
            <a href="/login" className="btn btn-success">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
      <div className="footer--pin1">
        <Footer />
      </div>
    </>
  );
}

export default SignUp;
