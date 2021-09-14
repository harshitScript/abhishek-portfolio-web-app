import MainPageContent from "../../Components/MainPageComponents/MainPageContent";
import Head from "next/head";
import Modal from "../../Modal/Modal";
import { useContext } from "react";
import { ModalContext } from "../../Context";

const MainPage = (props) => {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      <Head>
        <title>Harshit Bhawsar inc.</title>
        <link href="http://fonts.cdnfonts.com/css/anurati" rel="stylesheet" />
        <div id="overlay-divs"></div>
        <div id="backdrop-divs"></div>
      </Head>
      <MainPageContent />
      {modalCtx.displayModal.display && <Modal />}
    </>
  );
};
export default MainPage;
