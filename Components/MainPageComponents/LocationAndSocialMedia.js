import styles from "./LocationAndSocialMedia.module.scss";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const LocationAndSocialMedia = () => {
  const whatsappClickHandler = () => {
    window.open("https://wa.me/9407541209");
  };
  const instagramClickHandler = () => {
    window.open("https://www.instagram.com/x_hrsht_x/");
  };
  const linkedInClickHandler = () => {
    window.open("https://www.linkedin.com/in/harshit-bhawsar-311a571bb/");
  };
  const githubClickHandler = () => {
    window.open("https://github.com/harshitScript");
  };
  const gmailClickHandler = () => {
    window.open("mailto:www.harshitbhawsar777@gmail.com");
  };

  return (
    <div className={styles.socialMediaDiv}>
      {/* LOCATION */}
      <span className={styles.locationAndSocialMediaHeader}>Location</span>
      <span className={styles.locationSpan}>
        20,Labour Colony
        <br />
        Mandsaur(M.P.)
        <br />
        India
      </span>
      <hr />

      {/* SOCIAL MEDIA */}
      <span className={styles.locationAndSocialMediaHeader}>Social media</span>
      <span className={styles.socialMediaSpan}>
        <FaWhatsapp onClick={whatsappClickHandler} />
        <FaInstagram onClick={instagramClickHandler} />
        <FaLinkedin onClick={linkedInClickHandler} />
        <FaGithub onClick={githubClickHandler} />
        <SiGmail onClick={gmailClickHandler} />
      </span>
    </div>
  );
};
export default LocationAndSocialMedia;
