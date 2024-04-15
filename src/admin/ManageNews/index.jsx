import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CellCustomNew } from "../../components/CellCustom";
import EditModalNew from "./components/EditModalNews";
import { Table } from "../../components/Table";
import Header from "./components/Header";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { optionsCategories } from "../../utils/adminRoutes";

const ManageNews = () => {
  const [infoRow, setInfoRow] = useState(null);
  const [textInfo, setTextInfo] = useState([]);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) =>
      await axios
        .put(`/news/edit-new/${infoRow._id}`, data)
        .then((res) => res.data),
    onSuccess: () => {
      setInfoRow(null);
      setTextInfo([]);
      toast.success(`New Edited Successfully!`);
      queryClient.invalidateQueries(["news"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const fileMutation = useMutation({
    mutationFn: async (data) =>
      await axios
        .patch(`/news/edit-image-new/${infoRow._id}`, data)
        .then((res) => res.data),
    onSuccess: () => {
      toast.success(`New Image Edited Successfully!`);
      queryClient.invalidateQueries(["news"]);
      setInfoRow(null);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const columns = [
    {
      header: "Title",
      accessorKey: "title",
    },

    {
      header: "Category",
      accessorKey: "category",
    },

    // {
    //   header: "Upload Image",
    //   accessorKey: "uploadImages",
    // },

    {
      header: "Actions",
      cell: (info) => (
        <CellCustomNew
          setTextInfo={setTextInfo}
          setInfoRow={setInfoRow}
          info={info.cell.row.original}
        />
      ),
    },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: async () =>
      await axios?.get("/news/get-news").then((res) => res.data),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      // uploadImages: formData.get("uploadImages"),
      textInfo,
    };

    mutate(data);
  };

  const addTextInfo = () => {
    setTextInfo((prev) => [...prev, {}]);
  };

  const deleteTextInfo = (id) => {
    const deleteData = textInfo.filter((item, idx) => {
      console.log({ idx, id });

      return idx !== +id;
    });

    setTextInfo(deleteData);
  };

  const handleChangeInfo = (e) => {
    const [name, id] = e.target.name.split("-");

    console.log({ name, id });
    const data = textInfo.map((item, idx) =>
      +id === idx ? { ...item, [name]: e.target.value } : item
    );

    setTextInfo(data);
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];

    console.log(file);

    const confirmChange = confirm("Are you sure, you wanna change the image?");
    if (!confirmChange) return;

    const formData = new FormData();
    formData.append("uploadImages", file);

    console.log("Todo bien");
    fileMutation.mutate(formData);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(data);
  return (
    <div className="container-page px-3 my-5">
      {/* --> Header */}
      <Header
        textInfo={textInfo}
        addTextInfo={addTextInfo}
        handleChangeInfo={handleChangeInfo}
        deleteTextInfo={deleteTextInfo}
        setTextInfo={setTextInfo}
      />

      {/* --> Table */}
      <Table columns={columns} data={data} />

      <EditModalNew
        setShowModal={setInfoRow}
        showModal={infoRow}
        titleModal={"Edit New"}
        onClose={() => setInfoRow([])}
        // SecondaryBtn={() => <ImportUsers setRefreshRender={setRefreshRender} />}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="imageNew" className="relative cursor-pointer">
            <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
              <h1 className="tracking-wider font-bold">Change</h1>
              <p className="mx-auto font-bold">Image</p>
            </a>
            <a href="#" className="relative cursor-default">
              <div className="flex flex-wrap content-center">
                {infoRow?.image?.map((data, id) => (
                  <div key={id} className="relative max-w-[14rem] mx-auto mb-4">
                    <img
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-lg mx-auto"
                      src={data.cloudinary_url}
                    />
                  </div>
                ))}
              </div>
            </a>
          </label>

          <div className="flex flex-col gap-3">
            <div className="flex-1">
              <input
                type="title"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Title"
                name="title"
                defaultValue={infoRow?.title}
                required
              />
            </div>

            <div className="flex-1">
              <select
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                defaultValue={infoRow?.category}
                name="category"
                required
              >
                <option value={""}>Select Category:</option>
                {optionsCategories?.map((optionCategory, id) => {
                  return (
                    <option value={optionCategory.value} key={id}>
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
                onChange={handleFile}
                // defaultValue={infoRow?.uploadImages}
                id="imageNew"
                disabled={fileMutation.isPending}
              />
            </div>

            <h2 className="font-bold">Aditional Text</h2>

            {textInfo.map((item, idx) => (
              <div className="flex-1" key={idx}>
                <header>
                  <h3>Text {idx + 1}</h3>
                  <button
                    type="button"
                    className="text-red-400 hover:scale-105 transition-all shadow-lg rounded-md"
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
                    value={item.subheader || ""}
                    placeholder="Sub-header"
                  />
                  <input
                    className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                    name={`paragraph-${idx}`}
                    onChange={handleChangeInfo}
                    value={item.paragraph || ""}
                    placeholder="Paragraph"
                  />
                </div>
              </div>
            ))}

            <button
              className="bg-blue-300 text-white py-1 shadow-lg rounded"
              onClick={addTextInfo}
              type="button"
              disabled={isLoading}
            >
              Add Aditional Text
            </button>

            <button
              className="button-primary shadow-lg rounded"
              disabled={fileMutation.isPending || isPending}
            >
              Edit
            </button>
          </div>
        </form>
      </EditModalNew>
    </div>
  );
};

export default ManageNews;
