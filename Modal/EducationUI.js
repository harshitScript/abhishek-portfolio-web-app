import styles from "./EducationUI.module.scss";

const EducationUI = () => {
  return (
    <>
      <span className={styles.educationAndCertificateHeaderSpan}>
        Education
      </span>

      <hr />

      <table className={styles.table}>
        <thead>
          <th>Course</th>
          <th>School/College</th>
          <th>Board/University</th>
          <th>Passed</th>
          <th>Percentage.</th>
        </thead>
        <thead>
          <td>BCA</td>
          <td>Govt. Holkar Science College, Indore, M.P</td>
          <td>Devi Ahilya Vishwavidyalaya, Indore, M.P</td>
          <td>2021</td>
          <td>79%</td>
        </thead>
        <thead>
          <td>HSC</td>
          <td>Subhash English School, Mandsaur, M.P</td>
          <td>MP Board</td>
          <td>2018</td>
          <td>91%</td>
        </thead>
        <thead>
          <td>Matriculation</td>
          <td>Subhash English School, Mandsaur, M.P</td>
          <td>MP Board</td>
          <td>2016</td>
          <td>90%</td>
        </thead>
      </table>

      <span className={styles.educationAndCertificateHeaderSpan}>
        CERTIFICATION COURSES
      </span>
      <hr />

      <ul className={styles.unOrderedList}>
        <li>
          {"HTML, CSS, & Bootstheadap - Certification Course for Beginners"}
        </li>
        <li>{"JavaScript - Basics to Advanced [step by step (2021)]"}</li>
        <li>
          {"React - The Complete Guide (incl Hooks, React Router, Redux)"}
        </li>
      </ul>
    </>
  );
};

export default EducationUI;
