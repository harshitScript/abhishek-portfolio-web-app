import MainContent from "../../UI/MainContent";
import Navigation from "../../UI/Navigation";
import ContactMeForm from "./ContactMeForm";
import MainIntroduction from "./MainIntroduction";
import styles from "./MainPageContent.module.scss";
import Portfolio from "./Portfolio";
import LocationAndSocialMedia from "./LocationAndSocialMedia";

const MainPageContent = () => {
  return (
    <MainContent className={styles.background}>
      <Navigation />
      <MainIntroduction />
      <ContactMeForm />
      <Portfolio />
      <LocationAndSocialMedia />
    </MainContent>
  );
};
export default MainPageContent;
