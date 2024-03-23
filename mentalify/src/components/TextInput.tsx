import { SubmitHandler, useForm } from "react-hook-form";
import "../Stylesheets/TextInput.css";

const apiUrl = import.meta.env.BASE_URL || "http://localhost:5000";

type FormFields = {
  newsletter: string;
};

function TextInput() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/api/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Sent");
      } else {
        const responseData = await response.json();
        alert(responseData.message);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <form className="Input" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label">Type Newsletter Below</label>
      <textarea
        id="newsInput"
        className="form-control"
        {...register("newsletter")}
      ></textarea>
      <div id="Buttons">
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-success "
        >
          Send Newsletter!
        </button>
      </div>
    </form>
  );
}

export default TextInput;
