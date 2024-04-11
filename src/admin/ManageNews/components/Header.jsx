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
      await axios.post("/news/create-news", data).then((res) => res.data),

    onSuccess: (data) => {
      queryClient.invalidateQueries(["news"]);
      toast.success(`Sucessfully registered!`);
      setShowModal(!showModal);
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
      title: formData.get("title"),
      category: formData.get("category"),
      uploadImages: formData.get("uploadImages"),
    };

    mutate(data);
  };

  return (
    <div>
      <ModalComponent
        setShowModal={setShowModal}
        showModal={showModal}
        textBtn={"Create New"}
        titleModal={"Create New"}
        // SecondaryBtn={() => <ImportUsers setRefreshRender={setRefreshRender} />}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="flex-1">
              <input
                type="title"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Title"
                name="title"
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="category"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Category"
                name="category"
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="file"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                name="uploadImages"
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
