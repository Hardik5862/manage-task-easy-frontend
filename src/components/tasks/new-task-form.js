import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useFetch } from "../../helpers/useFetch";
import { getAuthToken } from "../../helpers/auth";
import ErrorMessage from "../ui/error-message";

const NewTaskForm = () => {
  const history = useHistory();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const { data, loading, error, fetchData } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getAuthToken();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", taskName);
    urlencoded.append("description", taskDescription);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    await fetchData(`${process.env.REACT_APP_API_URL}/tasks`, requestOptions);
  };

  useEffect(() => {
    if (data && !loading && !error) {
      history.push("/tasks");
    }
  }, [data, error, history, loading]);

  return (
    <>
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="taskname">Task Title</InputLabel>
          <OutlinedInput
            id="taskname"
            name="taskname"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            label="Task title"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="taskdescription">Task description</InputLabel>
          <OutlinedInput
            id="taskdescription"
            name="taskdescription"
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            multiline
            rows={5}
            label="Task description"
          />
        </FormControl>
        <Button
          disabled={loading}
          sx={{ m: 1 }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </FormContainer>
      {error && <ErrorMessage message={error} />}
    </>
  );
};

const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "5px",
}));

export default NewTaskForm;
