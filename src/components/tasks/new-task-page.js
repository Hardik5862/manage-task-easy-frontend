import { useHistory } from "react-router-dom";
import { styled } from "@mui/system";
import Navbar from "../ui/navbar";
import Button from "@mui/material/Button";
import NewTaskForm from "./new-task-form";

const NewTaskPage = () => {
  const history = useHistory();

  return (
    <>
      <Navbar>
        <Button onClick={() => history.push("/tasks")}>View All Tasks</Button>
      </Navbar>
      <MainContainer>
        <SubHeader>CREATE NEW TASK</SubHeader>
        <NewTaskForm />
      </MainContainer>
    </>
  );
};

const MainContainer = styled("div")(({ theme }) => ({
  width: "100vw",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

const SubHeader = styled("h2")(({ theme }) => ({
  fontSize: "1.5rem",
  margin: "20px 0 10px 0",
}));

export default NewTaskPage;
