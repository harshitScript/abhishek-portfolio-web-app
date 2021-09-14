import ModalStoreProvider from "../Context/ModalStoreProvider";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ModalStoreProvider>
      <Component {...pageProps} />
    </ModalStoreProvider>
  );
}

export default MyApp;
