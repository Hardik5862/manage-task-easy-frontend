import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import AuthForm from "./form";
import Header from "../ui/header";
import ErrorMessage from "../ui/error-message";

const Signup = () => {
  const handleSubmit = async (e, username, password) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log("error caught", err);
    }
    console.log("submit signup", username, password);
  };

  return (
    <FormContainer>
      <Header />
      <SubHeader>CREATE NEW ACCOUNT</SubHeader>
      <p>
        Already have an account? <Link to="/signin">Sign In!</Link>
      </p>
      <AuthForm handleSubmit={handleSubmit} />
      <ErrorMessage message="not available" />
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

export default Signup;
