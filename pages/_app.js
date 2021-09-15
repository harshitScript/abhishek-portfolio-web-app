import AuthTokenContextProvider from "../Context/auth-token-context-provider";
import ModalStoreProvider from "../Context/ModalStoreProvider";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthTokenContextProvider>
      <ModalStoreProvider>
        <Component {...pageProps} />
      </ModalStoreProvider>
    </AuthTokenContextProvider>
  );
}

export default MyApp;
