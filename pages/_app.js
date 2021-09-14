import ModalStoreProvider from "../Context/ModalStoreProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ModalStoreProvider>
      <Component {...pageProps} />
    </ModalStoreProvider>
  );
}

export default MyApp;
