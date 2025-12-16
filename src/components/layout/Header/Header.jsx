import styles from "../../../styles/components/layout/Header/Header.module.css";
const Header = () => {
  const maxExp = 100;
  const currentExp = 45;
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-level-container"]}>
        <div className={styles["header-level-back"]}>
          <div
            className={styles["header-level-current"]}
            style={{ width: `${(currentExp / maxExp) * 100}%` }}
          ></div>
        </div>
        <p>15 уровень</p>
      </div>
      <div className={styles["header-user-container"]}>
        <img className={styles["header-user-avatar"]}/>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
