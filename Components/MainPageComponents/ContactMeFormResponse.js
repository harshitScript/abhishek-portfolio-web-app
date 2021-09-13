import styles from "./ContactMeFormResponse.module.scss";
import logoImage from "../../Assets/logo.jpeg";
import Image from "next/image";

const ContactMeFormResponse = ({ requestId }) => {
  const date = new Date();
  const displayDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className={styles.contactRequestResponseDiv}>
      <section>
        <span
          className={styles.mainSpan}
        >{`Your request recorded on ${displayDate}.`}</span>
        <span className={styles.idSpan}>{`Request Id : ${requestId}.`}</span>
        <div className={styles.logoImageContainer}>
          <Image src={logoImage} alt="logo" width="80%" height="80%" />
        </div>
        <span className={styles.responseTimeSpan}>
          Usual response time : 5-6 business hours.
        </span>
      </section>
    </div>
  );
};
export default ContactMeFormResponse;
