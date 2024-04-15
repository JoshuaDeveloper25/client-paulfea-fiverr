import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CellCustomUser } from "../../components/CellCustom";
import EditModalUser from "./components/EditModalUsers";
import { Table } from "../../components/Table";
import Header from "./components/Header";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [infoRow, setInfoRow] = useState(null);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) =>
      await axios
        .put(`/users/edit-user/${infoRow._id}`, data)
        .then((res) => res.data),
    onSuccess: () => {
      setInfoRow(null);
      toast.success(`User Edited Successfully!`);
      queryClient.invalidateQueries(["users"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },

    {
      header: "Surname",
      accessorKey: "surname",
    },

    {
      header: "Company",
      accessorKey: "company",
    },

    {
      header: "Email",
      accessorKey: "email",
    },

    {
      header: "Role",
      accessorKey: "role",
    },

    {
      header: "Actions",
      cell: (info) => (
        <CellCustomUser setInfoRow={setInfoRow} info={info.cell.row.original} />
      ),
    },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      await axios.get("/users/get-users").then((res) => res.data),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      surname: formData.get("surname"),
      company: formData.get("company"),
      email: formData.get("email"),
      // password: formData.get("password"),
    };

    mutate(data);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-page md:px-3 px-0 my-5">
      {/* --> Header */}
      <Header />

      {/* --> Table */}
      <Table columns={columns} data={data} />

      <EditModalUser
        setShowModal={setInfoRow}
        showModal={infoRow}
        titleModal={"Edit User"}
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
                defaultValue={infoRow?.name}
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="text"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Surname"
                name="surname"
                defaultValue={infoRow?.surname}
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="text"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Company"
                name="company"
                defaultValue={infoRow?.company}
                required
              />
            </div>

            <div className="flex-1">
              <input
                type="email"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Email"
                name="email"
                defaultValue={infoRow?.email}
                required
              />
            </div>

            {/* <div className="flex-1">
              <input
                type="password"
                className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                placeholder="Password"
                name="password"
                defaultValue={infoRow?.password}
                required
              />
            </div> */}

            <button className="button-primary" disabled={isPending}>
              Edit
            </button>
          </div>
        </form>
      </EditModalUser>
    </div>
  );
};

export default ManageUsers;
