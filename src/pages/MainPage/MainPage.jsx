import Header from "../../components/layout/Header/Header";
import styles from './MainPage.module.css';
const MainPage = () => {
    return (
        <div className={styles["mainPage-container"]}>
            <Header/>
        </div>
    );
};

export default MainPage;