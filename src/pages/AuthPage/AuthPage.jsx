import styles from './AuthPage.module.css';
import AuthFrame from '../../components/layout/Auth/AuthFrame';
const AuthPage = () => {
    return (
        <div className={styles["AuthPage-container"]}>
            <AuthFrame/>
        </div>
    );
};

export default AuthPage;