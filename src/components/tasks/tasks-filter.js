import { useState } from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const TasksFilter = ({ filterTasks, loading }) => {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const handleFilterTasks = () => {
    filterTasks(status, search);
  };

  return (
    <MainContainer>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <FormControl style={{ minWidth: "220px" }}>
            <TextField
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl style={{ minWidth: "220px" }}>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">No status filter</MenuItem>
              <MenuItem value={"OPEN"}>Open</MenuItem>
              <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
              <MenuItem value={"DONE"}>Done</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button
            disabled={loading}
            onClick={handleFilterTasks}
            variant="contained"
          >
            Filter Tasks
          </Button>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

const MainContainer = styled("div")(({ theme }) => ({
  marginTop: "20px",
}));

export default TasksFilter;
