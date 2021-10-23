import { styled } from "@mui/system";

const Header = () => {
  return (
    <LogoHeader>
      MANAGE<span>TASK</span>EASY
    </LogoHeader>
  );
};

const LogoHeader = styled("h1")(({ theme }) => ({
  color: "#9c27b0",
  fontSize: "2.5rem",
  marginBottom: "20px",
  "& span": {
    color: "#ce93d8",
  },
}));

export default Header;
