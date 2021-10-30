import { styled } from "@mui/system";
import { useEffect } from "react";

const TasksList = ({ tasks }) => {
  useEffect(() => {
    console.log("TasksList: useEffect", tasks);
  }, [tasks]);

  return <MainContainer></MainContainer>;
};

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

export default TasksList;
