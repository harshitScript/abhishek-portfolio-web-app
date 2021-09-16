import styles from "./Projects.module.scss";
import SingleProjectBlock from "./SingleProjectBlock";
import ifvsImg1 from "../Assets/ifvsImg1.png";
import ifvsImg2 from "../Assets/ifvsImg2.png";
import motoAppImg1 from "../Assets/MotoAppImg1.png";
import motoAppImg2 from "../Assets/MotoAppImg2.png";
import portfolioImg1 from "../Assets/protfolioImg1.png";
import portfolioImg2 from "../Assets/protfolioImg2.png";

const projectData = [
  {
    projectId: Math.random().toFixed(2),
    title: "INDIA'S FIRST VIRTUAL SCHOOL",
    description:
      "A free course provider website for school going kids to complete their curriculum from the comfort of their home with 24x7 availability and lifetime access to their course.",
    navigationLink:
      "https://india-s-first-virtual-school-react-app.vercel.app/home-page",
    imgSrc1: ifvsImg1,
    imgSrc2: ifvsImg2,
  },
  {
    projectId: Math.random().toFixed(2),
    title: "THE MOTOR CYCLE APP",
    description:
      "A two wheel solution website can be used to calculate your bike health, bike average and search bikes as per your need.",
    navigationLink: "https://motor-cycle-app-7aff6.web.app/home-page",
    imgSrc1: motoAppImg1,
    imgSrc2: motoAppImg2,
  },
  {
    projectId: Math.random().toFixed(2),
    title: "MY PORTFOLIO WEBSITE",
    description:
      "The website you are currently visiting is a nextjs based web application created by me for portfolio purposes.",
    navigationLink: "https://harshit-bhawsar-portfolio-website.vercel.app/",
    imgSrc1: portfolioImg1,
    imgSrc2: portfolioImg2,
  },
];

const Projects = () => {
  return (
    <>
      <span className={styles.projectsHeaderSpan}>Projects</span>

      <hr />

      <div className={styles.projectBlocksContainer}>
        {projectData.map((singleProject) => (
          <SingleProjectBlock
            key={singleProject.projectId}
            title={singleProject.title}
            imgSrc1={singleProject.imgSrc1}
            imgSrc2={singleProject.imgSrc2}
            description={singleProject.description}
            navigationLink={singleProject.navigationLink}
          />
        ))}
      </div>
    </>
  );
};
export default Projects;
