import { useMutation, useQueryClient } from "@tanstack/react-query";
import ModalComponent from "../../../components/ModalComponent";
import { getError } from "../../../utils/getError";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) =>
      await axios.post("/users/register", data).then((res) => res.data),

    onSuccess: (data) => {
      queryClient.invalidateQueries(["users"]);
      toast.success(`Sucessfully registered!`);
      setShowModal(!showModal);
      prueba("cerrado");
      console.log(data);
    },

    onError: (err) => {
      toast.error(getError(err));
      console.log(err);
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
    <div>
      <ModalComponent
        setShowModal={setShowModal}
        showModal={showModal}
        textBtn={"Create User"}
        titleModal={"Create User"}
        // SecondaryBtn={() => <ImportUsers setRefreshRender={setRefreshRender} />}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="flex-1">
              <input
                type="text"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Name"
                name="name"
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="text"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Surname"
                name="surname"
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="text"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Company"
                name="company"
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="email"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Email"
                name="email"
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="password"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Password"
                name="password"
                required
              />
            </div>

            <button className="button-primary" disabled={isPending}>
              Register
            </button>
          </div>
        </form>
      </ModalComponent>
    </div>
  );
};

export default Header;
