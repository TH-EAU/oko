import * as msal from "@azure/msal-browser";

export const getMsalInstance = async () => {
  const msalConfig = {
    auth: {
      clientId: "10696b26-fc22-46ba-896c-eec1a8f14f7f",
      authority:
        "https://login.microsoftonline.com/2397b885-afe4-4bc7-9e1e-e4899ef44d1a",
      redirectUri: "http://localhost:3000/signin",
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true,
    },
  };

  const msqlInstance = new msal.PublicClientApplication(msalConfig);

  return msqlInstance;
};
