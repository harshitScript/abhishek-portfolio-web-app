import styles from "./MainContent.module.scss";
const MainContent = (props) => {
  return (
    <div className={`${props.className} ${styles.mainContent}`}>
      {props.children}
    </div>
  );
};
export default MainContent;
