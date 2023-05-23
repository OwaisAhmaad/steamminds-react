import React from "react";
import {
  HeroContainer,
  HeroColumns,
  HeadingTextContainer,
  HeadingText,
  ImageContainer,
  BodyText,
  BodyTextContainer,
  HeroButton,
} from "../../styles/herobanner/herobannerStyle";
const Herobanner = () => {
  return (
    <>
      <HeroContainer>
        <HeroColumns>
          <HeadingTextContainer>
            <HeadingText variant="h1">
              Empowering <br />
              young <span style={{ color: "#4540E1" }}>minds</span> with <br />
              STEAM education <br /> for a better{" "}
              <span style={{ color: "#4540E1" }}>future</span>.
            </HeadingText>
            <BodyText>
              We unlock your child's potential with our programs <br /> for
              building a brighter tomorrow.
            </BodyText>
            <HeroButton>Unlock Your Potential</HeroButton>
          </HeadingTextContainer>
          <ImageContainer>
            <img
              src="../../../../assests/images/heroimg.png"
              alt="Image"
              width="100%"
              height="500px"
            />
          </ImageContainer>
        </HeroColumns>
      </HeroContainer>
    </>
  );
};

export default Herobanner;
