import { useHistory } from "react-router-dom";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { removeAuthToken } from "../../helpers/auth";

const Navbar = ({ children }) => {
  const history = useHistory();

  const handleSignout = () => {
    removeAuthToken();
    history.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LogoHeader>
              MANAGE<span>TASK</span>EASY
            </LogoHeader>
          </Typography>
          {children}
          <Button onClick={handleSignout}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const LogoHeader = styled("h1")(({ theme }) => ({
  color: "#9c27b0",
  "& span": {
    color: "#ce93d8",
  },
}));

export default Navbar;
