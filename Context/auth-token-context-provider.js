import { AuthToken } from "./index";
import { useState } from "react";
import { useRouter } from "next/router";

const AuthTokenContextProvider = (props) => {
  const [authToken, setAuthToken] = useState(false);
  const router = useRouter();
  const authTokenProvider = () => {
    setAuthToken(true);
    console.log("hahahah");
    router.replace("/main-page");
  };

  return (
    <AuthToken.Provider
      value={{
        authToken: authToken,
        authTokenProvider: authTokenProvider,
      }}
    >
      {props.children}
    </AuthToken.Provider>
  );
};
export default AuthTokenContextProvider;
