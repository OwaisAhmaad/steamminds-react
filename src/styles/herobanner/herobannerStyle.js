import React from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";

export const HeroContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  textAlign: "center",

  // "@media (max-width: 768px)": {
  //   flexDirection: "column",
  // },
}));

export const HeroColumns = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",

  "@media (max-width: 600px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-",
  },
}));

export const HeadingTextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
  // marginTop: "-100px",
  marginLeft: "60px",
  textAlign: "left",
  flex: 1,
  "@media (max-width: 768px)": {
    fontSize: "38px",
    marginTop: "-30px",
    lineHeight: "55px",
  },
  "@media (max-width: 600px)": {
    fontSize: "30px",
    marginTop: "60px",
    marginLeft: "30px",
  },
}));
export const HeadingText = styled(Typography)(() => ({
  fontFamily: "Proxima Nova",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "56px",
  lineHeight: "68px",
  leadingTrim: "both",
  // textEdge: "cap",
  color: "#212932",
  "@media (max-width: 950px)": {
    fontSize: "40px",
    marginTop: "-30px",
    lineHeight: "50px",
  },
  "@media (max-width: 768px)": {
    fontSize: "34px",
    marginTop: "-40px",
    lineHeight: "40px",
  },
  "@media (max-width: 600px)": {
    fontSize: "30px",
    marginTop: "-40px",
    lineHeight: "35px",
  },
}));

export const BodyText = styled(Typography)(() => ({
  fontFamily: "Proxima Nova",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "25px",
  color: "#212932",
  marginTop: "10px",
  // marginLeft: "-5px",
  "@media (max-width: 950px)": {
    fontSize: "17px",
    marginTop: "0px",
    lineHeight: "24px",
  },
  "@media (max-width: 768px)": {
    fontSize: "15px",
    lineHeight: "20px",
  },
  "@media (max-width: 600px)": {
    marginTop: "8px",
    fontSize: "13px",
    lineHeight: "22px",
  },
}));
export const HeroButton = styled(Button)(() => ({
  width: "190px",
  background: "#4540E1",
  borderRadius: "25.5px",
  fontFamily: "Proxima Nova",
  fontStyle: "normal",
  fontWeight: 200,
  fontSize: "12px",
  padding: "8px",
  lineHeight: "25px",
  color: "#FFFFFF",
  marginTop: "12px",
  "@media (max-width: 768px)": {
    width: "150px",
    padding: "4px",
    fontSize: "10px",
    lineHeight: "20px",
  },
}));
export const ImageContainer = styled(Box)(() => ({
  flex: 1,
}));
