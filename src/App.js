import React from "react";
import AybrandLogo from "./img/aybrandlogo.svg";
import LinkedinLogo from "./img/linkedinlogo.svg";
import BeLogo from "./img/belogo.svg";
import HeroImg from "./img/heroimage.svg";
// import Switch from "@bit/onino-js.css-primitives.switch";

import {
  Container,
  Menu,
  Logo,
  NetworkContainer,
  NetworkIcon,
  IconImg,
  Hero,
  HeroImage,
  Title,
  SubTitle,
  Button,
  AddressContainer,
  AddressTitle,
  Address,
  SecondLineAddress,
  Copy,
} from "./styles";
function App() {
  return (
    <Container>
      <Menu>
        <Logo src={AybrandLogo} alt="Aybrand" />
        <NetworkContainer>
          <NetworkIcon
            href="https://www.linkedin.com/company/aybrand%C2%AE"
            target="blank"
            mr="26px"
          >
            <IconImg src={LinkedinLogo} alt="Linkedin" />
          </NetworkIcon>
          <NetworkIcon
            href="https://www.behance.net/aybrandexperience"
            target="blank"
          >
            <IconImg src={BeLogo} alt="Behance" />
          </NetworkIcon>
        </NetworkContainer>
      </Menu>
      <Hero>
        {/* <Switch color="secondary" defaultChecked={true} /> */}
        <HeroImage src={HeroImg} alt="Equipo" />
      </Hero>
      <Title>Innovación es el camino</Title>
      <SubTitle>
        Estamos empoderando nuestra web, mientras tanto podés escribirnos a
      </SubTitle>

      <Button href="mailto:hola@aybrand.com.ar">hola@aybrand.com.ar</Button>

      <AddressContainer>
        <AddressTitle>Oficinas</AddressTitle>
        <Address href="https://g.page/aybrand?share" target="blank">
          Av. Hipólito Yrigoyen 146.
        </Address>
        <SecondLineAddress>Córdoba, Argentina.</SecondLineAddress>
      </AddressContainer>

      <Copy>Aybrand® 2020. Derechos reservados.</Copy>
    </Container>
  );
}

export default App;
