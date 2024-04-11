import EditModalUser from "../admin/ManageUsers/components/EditModalUsers";
import { useQueryClient } from "@tanstack/react-query";
import { getError } from "../utils/getError";
import { toast } from "react-toastify";
import Dropdown from "./Dropdown";
import axios from "axios";

export const CellCustomUser = ({ info, setInfoRow }) => {
  const queryClient = useQueryClient();

  return (
    <>
      <Dropdown
        options={[
          {
            text: "Edit",
            action: async () => {
              setInfoRow(info);
            },
          },

          {
            text: "Delete",
            action: async () => {
              const user_request = confirm(
                `Are you sure, you want to delete this user?`
              );

              if (!user_request) {
                return;
              }

              try {
                await axios.delete(`users/delete-user/${info._id}`);
                queryClient.invalidateQueries(["users"]);
              } catch (error) {
                toast.error(getError(error));
              }
            },
          },
        ]}
      />
    </>
  );
};
