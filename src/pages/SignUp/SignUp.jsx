import SignUpForm from "./components/SignUpForm";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getError } from "../../utils/getError";

const SignUp = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) =>
      await axios.post("/users/register", data).then((res) => res.data),

    onSuccess: (data) => {
      console.log(data);
      alert(data.message);
      toast.success(`Sucessfully registered!`);
      navigate("/login");
    },

    onError: (err) => {
      console.log(err);
      toast.error(getError(err));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      surname: formData.get("surname"),
      company: formData.get("company"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Sign Up Form */}
      <SignUpForm>
        <button
          disabled={isPending}
          className="text-center w-full text-black border-secondary transition-all duration-150 border py-1 rounded hover:text-white hover:bg-secondary disabled:opacity-40"
        >
          Sign Up
        </button>
      </SignUpForm>
    </form>
  );
};

export default SignUp;
