import MainPageContent from "../../Components/MainPageComponents/MainPageContent";
import Head from "next/head";
import Modal from "../../Modal/Modal";
import { useContext } from "react";
import { ModalContext } from "../../Context";

const MainPage = (props) => {
  const modalCtx = useContext(ModalContext);
  const displayModal = modalCtx.displayModal.display;
  return (
    <>
      <Head>
        <title>Harshit Bhawsar inc.</title>
        <link href="http://fonts.cdnfonts.com/css/anurati" rel="stylesheet" />
        <link
          href="http://fonts.cdnfonts.com/css/voice-in-my-head"
          rel="stylesheet"
        />
        <link href="http://fonts.cdnfonts.com/css/titan" rel="stylesheet" />
      </Head>
      <MainPageContent />

      {displayModal && <Modal />}
    </>
  );
};
export default MainPage;
