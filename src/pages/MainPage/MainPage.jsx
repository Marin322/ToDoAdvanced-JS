import Header from "../../components/layout/Header/Header";
import SideBar from "../../components/layout/SideBar/SideBar";
import styles from './MainPage.module.css';
const MainPage = () => {
    return (
        <div className={styles["mainPage-container"]}>
            <Header/>
            <div className={styles["mainPage-workspace"]}>
                <SideBar/>
            </div>
        </div>
    );
};

export default MainPage;