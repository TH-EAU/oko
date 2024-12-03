"use client";

import Navbar from "@/components/layout/Navbar";
import { getMsalInstance } from "@/services/azure.service";
import { Button, Center, Container, Icon } from "@chakra-ui/react";
import { SiWindows95 } from "react-icons/si";

const Signin = () => {
  const login = async () => {
    try {
      const msalInstance = await getMsalInstance();
      await msalInstance.initialize();
      const loginResponse = await msalInstance.loginPopup();
      const accessToken = loginResponse.accessToken;
      console.log("Token reçu :", accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container maxW="4xl">
        <Center>
          <Button p={5} onClick={login}>
            Connexion avec AD
            <Icon>
              <SiWindows95 />
            </Icon>
          </Button>
        </Center>
      </Container>
    </>
  );
};

export default Signin;
