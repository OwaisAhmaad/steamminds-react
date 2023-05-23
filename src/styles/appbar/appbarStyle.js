import { IconButton, List, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { keyframes, css } from "styled-components";

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  background: "#FAFAFC",
  padding: "4px 8px",
}));

export const AppbarHeaderContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

// Header
export const AppbarHeader = styled(Box)(() => ({
  marginLeft: "8px",
  padding: "4px",
  flexGrow: 1,
  fontSize: "2.5em",
}));
export const LogoImage = styled("img")`
  width: 190px;

  @media (max-width: 568px) {
    width: 150px;
  }
`;
//Top Button Container
export const TopbarButtonContainer = styled(Box)(() => ({
  display: "flex",
  padding: "4px 15px, 0px, 0px",
  marginTop: "7px",

  "@media (max-width: 568px)": {
    marginLeft: "6px",
  },
}));
//Topbar Button
export const TopbarButton = styled(Button)(() => ({
  fontFamily: "Proxima Nova",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "22px",
  color: "#4540E1",
  marginRight: "4px",
  "&:hover": {
    backgroundColor: "transparent",
  },

  "@media (max-width: 768px)": {
    fontSize: "14px",
    lineHeight: "20px",
  },

  "@media (max-width: 568px)": {
    fontSize: "12px",
    lineHeight: "18px",
    marginRight: "-4px",
  },
}));
//Topbar Button Register
export const TopbarRegister = styled(Button)(() => ({
  fontFamily: "Proxima Nova",
  background: "#4540E1",
  borderRadius: "25.5px",
  padding: "10px",
  color: "white",
  marginRight: "14px",

  "@media (max-width: 768px)": {
    fontSize: "14px",
    lineHeight: "20px",
    padding: "8px",
  },

  "@media (max-width: 568px)": {
    fontSize: "10px",
    lineHeight: "18px",
    padding: "3px",
    marginBottom: "4px",
  },
}));

//Topbar Menu Icon
export const CustomMenuIcon = styled(MenuIcon)(() => ({
  marginTop: "7px",
  marginRight: "12px",
  color: "#4540E1",
}));

//Topbar Link Container
export const MylistContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "10px 0px 20px 0px",

  "@media (max-width: 768px)": {
    display: "none",
  },
}));
// Topbar Links
export const LinkText = styled(Typography)(() => ({
  cursor: "pointer",
  marginRight: "35px",
  color: "black",
  fontFamily: "Proxima Nova",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "22px",
  color: "#212932",
}));

// Mobile Links

export const ModalContainer = styled(Box)(() => ({
  position: "absolute",
  top: 60,
  padding: "12px",
  bottom: 0,
  right: 15,
  background: "#f5f5f5",
  width: "300px",
  height: "300px",
  border: "1px solid #ccc",
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",
}));
