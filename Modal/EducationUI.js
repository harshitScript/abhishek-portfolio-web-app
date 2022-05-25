import styles from "./EducationUI.module.scss";

const EducationUI = () => {
  return (
    <>
      <span className={styles.educationAndCertificateHeaderSpan}>
        Education
      </span>

      <hr />

      <div className={styles.tableOverflowController}>
        <table className={styles.table}>
          <thead>
            <th>Course</th>
            <th>School/College</th>
            <th>Board/University</th>
            <th>Passed</th>
            <th>Percentage.</th>
          </thead>
          <thead>
            <td>BSC</td>
            <td>Govt. Holkar Science College, Indore, M.P</td>
            <td>Devi Ahilya Vishwavidyalaya, Indore, M.P</td>
            <td>2020</td>
            <td>69%</td>
          </thead>
          <thead>
            <td>HSC</td>
            <td>Govt Gandhi school</td>
            <td>MP Board</td>
            <td>2017</td>
            <td>85%</td>
          </thead>
          <thead>
            <td>Matriculation</td>
            <td>Gaytri chitransh school</td>
            <td>MP Board</td>
            <td>2016</td>
            <td>86%</td>
          </thead>
        </table>
      </div>

      {/* <span className={styles.educationAndCertificateHeaderSpan}>
        CERTIFICATION COURSES
      </span>
      <hr />

      <ul className={styles.unOrderedList}>
        <li>{"HTML, CSS, & Bootstrap - Certification Course for Beginners"}</li>
        <li>{"JavaScript - Basics to Advanced [step by step (2021)]"}</li>
        <li>
          {"React - The Complete Guide (incl Hooks, React Router, Redux)"}
        </li>
      </ul> */}
    </>
  );
};

export default EducationUI;
