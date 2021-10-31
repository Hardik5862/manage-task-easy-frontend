import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import DeleteTaskButton from "./delete-task-button";
import UpdateTaskStatus from "./task-status-update";

const Task = ({ task }) => {
  const { id, title, status, description } = task;
  return (
    <Card sx={{ minWidth: 250, maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActionContainer>
        <UpdateTaskStatus taskId={id} taskStatus={status} />
        <DeleteTaskButton taskId={id} />
      </CardActionContainer>
    </Card>
  );
};

// styles CardActions
const CardActionContainer = styled(CardActions)({
  justifyContent: "space-between",
});

export default Task;
