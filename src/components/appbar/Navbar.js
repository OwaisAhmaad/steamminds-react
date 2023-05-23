import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Toolbar } from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  CustomMenuIcon,
  LinkText,
  LogoImage,
  MylistContainer,
  StyledImage,
  TopbarButton,
  TopbarButtonContainer,
  TopbarRegister,
  ModalContainer,
} from "../../styles/appbar/appbarStyle";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowMenuIcon(false);
      } else {
        setShowMenuIcon(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleModal = () => {
    setIsModelOpen(!isModelOpen);
  };

  return (
    <>
      <AppbarContainer>
        <Grid container>
          <Grid item xs={12}>
            {/* Row 1 */}
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <AppbarHeader>
                  <LogoImage
                    src="../../../../../assests/images/steamminds.png"
                    alt="Logo"
                  />
                </AppbarHeader>
              </Grid>
              <Grid item>
                <TopbarButtonContainer>
                  <TopbarButton>Find Course</TopbarButton>
                  <TopbarButton>Login</TopbarButton>
                  <TopbarRegister>Register</TopbarRegister>
                </TopbarButtonContainer>
              </Grid>

              {!showMenuIcon && (
                <Grid>
                  <CustomMenuIcon onClick={handleModal} />
                  {isModelOpen && <ModalContainer>Naseem</ModalContainer>}
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {/* Row 2 */}
            <Grid container justifyContent="center" marginRight="20px">
              <Grid item>
                <MylistContainer>
                  <LinkText>Courses</LinkText>
                  <LinkText>Competations</LinkText>
                  <LinkText>STEAM Ambassodors</LinkText>
                  <LinkText>STEAM Club</LinkText>
                  <LinkText>Blogs</LinkText>
                  <LinkText>About</LinkText>
                </MylistContainer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppbarContainer>
    </>
  );
};

export default Navbar;

{
  /* <Grid container>
<Grid item xs={12}>
  <AppbarHeader>Steam Minds</AppbarHeader>
  <TopbarButtonContainer>
    <TopbarButton>Pick Your Course</TopbarButton>
    <TopbarButton>Register</TopbarButton>
  </TopbarButtonContainer>
</Grid>
<Grid item xs={12}>
  {/* Row 2 */
}
//   <Typography variant="h6">Row 2</Typography>
// </Grid>
// </Grid> */}
