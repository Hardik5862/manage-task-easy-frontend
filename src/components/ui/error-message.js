import ReactDOM from "react-dom";

import { styled } from "@mui/system";

const ErrorMessage = ({ message }) => {
  const messages = (errors) => {
    const constraints = errors.map((constraint, idx) => (
      <li key={idx}>{constraint}</li>
    ));

    return <ul>{constraints}</ul>;
  };

  return ReactDOM.createPortal(
    <ErrorContainer>
      <h1>Oops!</h1>
      {Array.isArray(message) ? messages(message) : <p>{message}</p>}
    </ErrorContainer>,
    document.getElementById("notifications")
  );
};

const ErrorContainer = styled("div")(({ theme }) => ({
  width: "300px",
  padding: "8px 16px",
  backgroundColor: "#f7c5c0",
  color: "#a51809",
  position: "absolute",
  bottom: "10px",
  left: "10px",
  borderRadius: "10px",

  "& h1": {
    fontSize: "18px",
  },
}));

export default ErrorMessage;
