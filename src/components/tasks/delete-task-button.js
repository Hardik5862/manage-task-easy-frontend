import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAuthToken } from "../../helpers/auth";
import ErrorMessage from "../ui/error-message";

const DeleteTaskButton = ({ taskId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    const token = getAuthToken();
    setLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/tasks/${taskId}`,
        requestOptions
      );

      if (!response.ok) {
        const json = await response.json();
        throw json;
      }
      setLoading(false);
      window.location.reload(true);
    } catch (error) {
      setError(error.message || "Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <>
      <IconButton
        disabled={loading}
        color="primary"
        onClick={handleDelete}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
      {error && <ErrorMessage message={error} />}
    </>
  );
};

export default DeleteTaskButton;
