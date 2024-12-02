"use client";

import { getMsalInstance } from "@/services/azure.service";

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

  return <></>;
};

export default Signin;
