import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { styled } from "@mui/system";
import AuthForm from "./form";
import Header from "../ui/header";
import ErrorMessage from "../ui/error-message";
import { saveAuthToken } from "../../helpers/auth";

const Signin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e, username, password) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/signin`,
        requestOptions
      );
      const data = await res.json();

      if (!res.ok) {
        throw data;
      }

      saveAuthToken(data.accessToken);
      setLoading(false);
      history.push("/tasks");
    } catch (error) {
      console.log("Error", error);
      setError(error.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Header />
      <SubHeader>LET'S SIGNIN!</SubHeader>
      <p>
        New user? <Link to="/signup">Sign Up!</Link>
      </p>
      <AuthForm handleSubmit={handleSubmit} loading={loading} />
      {error && <ErrorMessage message={error} />}
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
