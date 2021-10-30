import { useState } from "react";
import { styled } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

const AuthForm = ({ handleSubmit, loading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e, username, password)}>
      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-username">Username</InputLabel>
        <OutlinedInput
          id="outlined-username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          label="Username"
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        sx={{ m: 1 }}
        variant="contained"
        disabled={loading}
        type="submit"
      >
        Submit
      </Button>
    </FormContainer>
  );
};

const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "5px",
}));

export default AuthForm;
