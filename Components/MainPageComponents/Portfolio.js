import styles from "./Portfolio.module.scss";
import introductionIcon from "../../Assets/introduction-icon.jpeg";
import educationIcon from "../../Assets/education-icon.jpeg";
import skillIcon from "../../Assets/skill-icon.jpeg";
import moreIcon from "../../Assets/more.jpeg";
import PortfolioIconAndCaption from "./PortfolioIconAndCaption";

const Portfolio = () => {
  return (
    <div className={styles.portfolioDiv}>
      <span className={styles.portfolioHeaderSpan}>Portfolio</span>
      <div className={styles.gridContainer}>
        <div className={styles.firstDiv}>
          <PortfolioIconAndCaption
            identifier="INTRODUCTION"
            imgSrc={introductionIcon}
            caption="INTRODUCTION"
          />
        </div>
        <div className={styles.secondDiv}>
          <PortfolioIconAndCaption
            identifier="EDUCATION"
            imgSrc={educationIcon}
            caption="EDUCATION"
          />
        </div>
        <div className={styles.thirdDiv}>
          <PortfolioIconAndCaption
            identifier="SKILLS"
            imgSrc={skillIcon}
            caption="SKILLS"
          />
        </div>
        <div className={styles.fourthDiv}>
          <PortfolioIconAndCaption
            identifier="MORE"
            imgSrc={moreIcon}
            caption="MORE"
          />
        </div>
      </div>

      <hr />
    </div>
  );
};
export default Portfolio;
