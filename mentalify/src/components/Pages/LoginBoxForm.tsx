import "../../Stylesheets/LoginBox.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { SubmitHandler, useForm } from "react-hook-form";
import "../../Stylesheets/Signup.css";

type FormFields = {
  email: string;
  password: string;
};

function LoginBoxForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem("user", JSON.stringify(responseData.existingUser));
        console.log("Data Found", responseData.firstName);
        window.location.href = "/homepage";
      } else {
        const responseData = await response.json();
        alert(responseData.message);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <div className="containerLogin ">
        <NavBar />
        <form
          className="w-100 d-flex flex-column align-items-center"
          id="formCont"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="contentSep rounded">
            <div className="mb-3 text-center fw-bold">
              <label className="form-label Headings">Email address</label>
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
              <label className="form-label Headings">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="*********"
                {...register("password", {
                  required: "Passsword is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <div style={{ color: "red" }}>{errors.password.message}</div>
              )}
            </div>
          </div>
          <div id="Buttons">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-success "
            >
              Login
            </button>
            <a href="/signup" className="btn btn-primary">
              Create an account!
            </a>
          </div>
          <a href="/forgot" className="btn btn-secondary">
            Forgot Password?
          </a>
        </form>
      </div>
      <div className="footer--pin1">
        <Footer />
      </div>
    </>
  );
}

export default LoginBoxForm;
