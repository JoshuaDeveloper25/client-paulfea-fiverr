import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CellCustomNew } from "../../components/CellCustom";
import EditModalNew from "./components/EditModalNews";
import { Table } from "../../components/Table";
import Header from "./components/Header";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const ManageNews = () => {
  const [infoRow, setInfoRow] = useState(null);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) =>
      await axios
        .put(`/news/edit-new/${infoRow._id}`, data)
        .then((res) => res.data),
    onSuccess: () => {
      setInfoRow(null);
      toast.success(`New Edited Successfully!`);
      queryClient.invalidateQueries(["news"]);
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

    {
      header: "Upload Image",
      accessorKey: "uploadImages",
    },

    {
      header: "Actions",
      cell: (info) => (
        <CellCustomNew setInfoRow={setInfoRow} info={info.cell.row.original} />
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
      uploadImages: formData.get("uploadImages"),
    };

    mutate(data);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-page px-3 my-5">
      {/* --> Header */}
      <Header />

      {/* --> Table */}
      <Table columns={columns} data={data} />

      <EditModalNew
        setShowModal={setInfoRow}
        showModal={infoRow}
        titleModal={"Edit New"}
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
                defaultValue={infoRow?.title}
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="category"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Category"
                name="category"
                defaultValue={infoRow?.category}
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="file"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                name="uploadImages"
                defaultValue={infoRow?.uploadImages}
                required
              />
            </div>

            <button className="button-primary" disabled={isPending}>
              Register
            </button>
          </div>
        </form>
      </EditModalNew>
    </div>
  );
};

export default ManageNews;