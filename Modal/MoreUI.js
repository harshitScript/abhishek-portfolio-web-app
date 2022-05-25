import styles from "./MoreUI.module.scss";
const MoreUI = () => {
  return (
    <>
      <span className={styles.moreHeaderSpan}>More</span>

      <hr />

      <div className={styles.moreDetailsContainer}>
        {/* <span className={styles.coAndRefHeaderSpan}>
          Co-curriculum activities
        </span>
        <span className={styles.subSpan}>a. State Basketball player</span>

        <hr /> */}

        <span className={styles.coAndRefHeaderSpan}>Refrences</span>
        <span className={styles.subSpan}>
          Dr. Suvrana tanvani, Professor
           <br />
          Dept. of computer Science, Holkar Science College, Indore
          <br />{/* 
          Email : manishsingh.scs@gmail.com
          <br />
          Phone : +91 89625 29091 <br /> */}
        </span>
      </div>
    </>
  );
};
export default MoreUI;
