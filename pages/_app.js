import AuthTokenContextProvider from "../Context/auth-token-context-provider";
import ModalStoreProvider from "../Context/ModalStoreProvider";
import "../styles/globals.scss";
import CustomHead from "../UI/CustomHead";

function MyApp({ Component, pageProps }) {
  return (
    <AuthTokenContextProvider>
      <ModalStoreProvider>
        <CustomHead />
        <Component {...pageProps} />
      </ModalStoreProvider>
    </AuthTokenContextProvider>
  );
}

export default MyApp;
