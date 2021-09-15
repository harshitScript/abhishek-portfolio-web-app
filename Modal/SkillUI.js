import styles from "./SkillUI.module.scss";

const SkillUI = () => {
  return (
    <>
      <span className={styles.skillHeaderSpan}>Skills</span>

      <hr />

      <div className={styles.mainSkillsContainer}>
        <span className={styles.singleSkillspan}>HTML5</span>
        <span className={styles.singleSkillspan}>CSS3/SASS</span>
        <span className={styles.singleSkillspan}>JAVASCRIPT</span>
        <span className={styles.singleSkillspan}>JQUERY</span>
        <span className={styles.singleSkillspan}>TYPESCRIPT</span>
        <span className={styles.singleSkillspan}>ES6-7</span>
        <span className={styles.singleSkillspan}>REACTJS</span>
        <span className={styles.singleSkillspan}>NEXTJS</span>
        <span className={styles.singleSkillspan}>FIREBASE</span>
        <span className={styles.singleSkillspan}>MONGODB</span>
      </div>

      <hr />

      <div className={styles.subSkillsSpan}>
        • Sound knowledge of Search Engine Optimization(SEO).
        <br />
        • Up to scratch at Content Creation(Text and/or Visual).
        <br />
        • Adequate at Making Strategies and Its Execution.
        <br />
        • Basic knowledge of cloud computing.
        <br />
        • Decent at management skills, communication and team leading capacity.
        <br />
      </div>
    </>
  );
};
export default SkillUI;
