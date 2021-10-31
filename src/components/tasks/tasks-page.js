import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { styled } from "@mui/system";
import ErrorMessage from "../ui/error-message";
import { getAuthToken } from "../../helpers/auth";
import TasksList from "./tasks-list";
import { useFetch } from "../../helpers/useFetchTasks";
import TasksFilter from "./tasks-filter";
import Navbar from "../ui/navbar";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const TasksPage = () => {
  const history = useHistory();
  const token = getAuthToken();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const { data, loading, error, fetchData } = useFetch(requestOptions);

  useEffect(() => {
    fetchData("", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar>
        <Button onClick={() => history.push("/tasks/new")}>Add new task</Button>
      </Navbar>
      <MainContainer>
        <TasksFilter filterTasks={fetchData} loading={loading} />
        {!loading && !error && data && <TasksList tasks={data} />}
        {loading && (
          <Container>
            <CircularProgress />
          </Container>
        )}
        {error && <ErrorMessage message={error} />}
        {error && (
          <Container>
            <span>
              Try signing in again! <Link to="/">sign in</Link>
            </span>
          </Container>
        )}
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

const Container = styled("div")(({ theme }) => ({
  height: "50vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default TasksPage;
