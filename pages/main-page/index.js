import MainPageContent from "../../Components/MainPageComponents/MainPageContent";
import Head from "next/head";
import Modal from "../../Modal/Modal";
import { useContext, useEffect } from "react";
import { ModalContext } from "../../Context";
import { AuthToken } from "../../Context";
import { useRouter } from "next/router";

const MainPage = (props) => {
  const modalCtx = useContext(ModalContext);
  const authTokenCtx = useContext(AuthToken);
  const router = useRouter();
  const displayModal = modalCtx.displayModal.display;

  // NAVIGATION BRIDGE
  useEffect(() => {
    if (authTokenCtx.authToken === false) {
      router.replace("/not-found");
    }
  }, [authTokenCtx.authToken, router]);

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
