import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import AuthForm from "./form";
import Header from "./header";

const Signin = () => {
  const handleSubmit = (e, username, password) => {
    e.preventDefault();
    console.log("submit signin", username, password);
  };

  return (
    <FormContainer>
      <Header />
      <SubHeader>LET'S SIGNIN!</SubHeader>
      <p>
        New user? <Link to="/signup">Sign Up!</Link>
      </p>
      <AuthForm handleSubmit={handleSubmit} />
    </FormContainer>
  );
};

const FormContainer = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const SubHeader = styled("h2")(({ theme }) => ({
  fontSize: "1.5rem",
  margin: "10px",
}));

export default Signin;
