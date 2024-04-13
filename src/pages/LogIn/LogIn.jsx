import { useMutation } from "@tanstack/react-query";
import LogInForm from "./components/LogInForm";
import { UserContext } from "../../context";
import { toast } from "react-toastify";
import { useContext } from "react";
import axios from "axios";
import { getError } from "../../utils/getError";

const LogIn = () => {
  const { dispatch } = useContext(UserContext);

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) =>
      await axios.post("/users/login", data).then((res) => res.data),

    onSuccess: (data) => {
      console.log(data);
      dispatch({ type: "LOG_IN", payload: data });
      toast.success("Successfully logged in!");
    },

    onError: (err) => {
      toast.error(getError(err));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    mutate(data);
  };

  return (
    // Log In Form
    <form onSubmit={handleSubmit}>
      <LogInForm>
        <button
          disabled={isPending}
          className="text-center shadow-lg w-full text-black border-secondary transition-all duration-150 border py-1 rounded hover:text-white hover:bg-secondary disabled:opacity-40"
        >
          Log In
        </button>
      </LogInForm>
    </form>
  );
};

export default LogIn;
