import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getAuthToken } from "../../helpers/auth";
import ErrorMessage from "../ui/error-message";

const UpdateTaskStatus = ({ taskId, taskStatus }) => {
  const [status, setStatus] = useState(taskStatus);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStatusUpdate = async (newStatus) => {
    const token = getAuthToken();
    setLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const urlencoded = new URLSearchParams();
    urlencoded.append("status", newStatus);

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/tasks/${taskId}/status`,
        requestOptions
      );

      if (!response.ok) {
        const json = await response.json();
        throw json;
      }
      setLoading(false);
    } catch (error) {
      setError(error.message || "Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <>
      <FormControl sx={{ width: "150px" }}>
        <Select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            handleStatusUpdate(e.target.value);
          }}
          displayEmpty
          disabled={loading}
        >
          <MenuItem value={"OPEN"}>Open</MenuItem>
          <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
          <MenuItem value={"DONE"}>Done</MenuItem>
        </Select>
      </FormControl>
      {error && <ErrorMessage message={error} />}
    </>
  );
};

export default UpdateTaskStatus;
