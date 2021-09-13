import Footer from "../../UI/Footer";
import MainContent from "../../UI/MainContent";
import EntryForm from "./EntryForm";
import Header from "./Header";
import styles from "./HomePageBody.module.scss";

const HomePageBody = () => {
  return (
    <MainContent className={styles.homePageBody}>
      <div className={styles.headerAndFormHolder}>
        <Header />
        <EntryForm />
      </div>
      <Footer className={styles.footerPlacement} />
    </MainContent>
  );
};
export default HomePageBody;
