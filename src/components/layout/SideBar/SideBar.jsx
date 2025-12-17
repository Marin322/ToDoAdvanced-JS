import styles from '../../../styles/components/layout/SideBar/SideBar.module.css';
import SideBarButton from '../../common/buttons/sideBarButtons';

const SideBar = () => {
    return (
        <div className={styles["SideBar-container"]}>
            <SideBarButton title="Задачи"/>
            <SideBarButton title="Совместные задачи"/>
        </div>
    );
};

export default SideBar;