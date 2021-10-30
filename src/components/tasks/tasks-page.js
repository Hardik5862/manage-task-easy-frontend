import { useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Header from "../ui/header";
import ErrorMessage from "../ui/error-message";
import { getAuthToken } from "../../helpers/auth";
import TasksList from "./tasks-list";
import { useFetch } from "../../helpers/useFetchTasks";

const TasksPage = () => {
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
    <MainContainer>
      <Header />
      {!loading && !error && <TasksList tasks={data} />}
      {error && <ErrorMessage message={error} />}
      {error && (
        <p>
          Try signing in again! <Link to="/">sign in</Link>
        </p>
      )}
    </MainContainer>
  );
};

const MainContainer = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

export default TasksPage;
