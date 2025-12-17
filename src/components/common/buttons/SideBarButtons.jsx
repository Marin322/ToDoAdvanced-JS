import styles from '../../../styles/components/common/buttons/SideBarButtons.module.css';

const SideBarButton = ({ title, onClick }) => {
    return (
        <div className={styles["SideBarButton-container"]}>
            <p>{title}</p>
        </div>
    );
};

export default SideBarButton;