import styles from "./Portfolio.module.scss";
import introductionIcon from "../../Assets/introduction-icon.jpeg";
import educationIcon from "../../Assets/education-icon.jpeg";
import skillIcon from "../../Assets/skill-icon.jpeg";
import moreIcon from "../../Assets/more.jpeg";
import projectsIcon from '../../Assets/projects-icon.jpeg';
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
            caption="INTRO"
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
            identifier="SKILL"
            imgSrc={skillIcon}
            caption="SKILLS"
          />
        </div>
        <div className={styles.fourthDiv}>
          <PortfolioIconAndCaption
            identifier="PROJECTS"
            imgSrc={projectsIcon}
            caption="PROJECTS"
          />
        </div>
        <div className={styles.fifthDiv}>
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
