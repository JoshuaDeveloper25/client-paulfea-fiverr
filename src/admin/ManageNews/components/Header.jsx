import { useMutation, useQueryClient } from "@tanstack/react-query";
import ModalComponent from "../../../components/ModalComponent";
import { getError } from "../../../utils/getError";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { optionsCategories } from "../../../utils/adminRoutes";

const Header = ({
  addTextInfo,
  handleChangeInfo,
  deleteTextInfo,
  textInfo,
  setTextInfo,
}) => {
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
    console.log(textInfo);
    // return
    formData.append("textInfo", JSON.stringify(textInfo));

    mutate(formData);
  };

  return (
    <div>
      <ModalComponent
        setShowModal={setShowModal}
        showModal={showModal}
        textBtn={"Create New"}
        titleModal={"Create New"}
        // SecondaryBtn={() => <ImportUsers setRefreshRender={setRefreshRender} />}
        onClose={() => setTextInfo([])}
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
              <select
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                name="category"
                required
              >
                <option value={""}>Select Category:</option>
                {optionsCategories?.map((optionCategory, id) => {
                  return (
                    <option
                      value={optionCategory.value}
                      key={id}
                    >
                      {optionCategory.text}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex-1">
              <input
                type="file"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                name="uploadImages"
                required
                accept="image/*"
              />
            </div>

            <h2 className="font-bold">Aditional Text</h2>

            {textInfo.map((item, idx) => (
              <div className="flex-1" key={idx}>
                <header>
                  <h3>Text {idx + 1}</h3>
                  <button
                    type="button"
                    className="text-red-400 hover:scale-105 transition-all rounded shadow-lg"
                    onClick={() => deleteTextInfo(idx)}
                  >
                    Delete
                  </button>
                </header>

                <div className="pl-5">
                  <input
                    className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border mb-2"
                    name={`subheader-${idx}`}
                    onChange={handleChangeInfo}
                    value={item?.subheader || ""}
                    placeholder="Sub-header"
                  />
                  <input
                    className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                    name={`paragraph-${idx}`}
                    onChange={handleChangeInfo}
                    value={item?.paragraph || ""}
                    placeholder="Paragraph"
                  />
                </div>
              </div>
            ))}

            <button
              className="bg-blue-300 text-white py-1 rounded shadow-lg"
              onClick={addTextInfo}
              type="button"
            >
              Add Aditional Text
            </button>

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
