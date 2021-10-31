import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Task from "./task";

const TasksList = ({ tasks }) => {
  console.log(tasks);
  return (
    <TasksListContainer container justifyContent="center" spacing={3}>
      {tasks &&
        tasks.map((task) => (
          <Grid item key={task.id}>
            <Task task={task} />
          </Grid>
        ))}
    </TasksListContainer>
  );
};

const TasksListContainer = styled(Grid)({
  margin: "10px",
  maxWidth: "90vw",
});

export default TasksList;
