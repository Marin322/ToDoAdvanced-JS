import styles from './AuthPage.module.css';
import AuthFrame from '../../components/layout/Auth/AuthFrame';
const AuthPage = ({isAuth, setIsAuth}) => {
    return (
        <div className={styles["AuthPage-container"]}>
            <AuthFrame isAuth={isAuth} setIsAuth={setIsAuth}/>
        </div>
    );
};

export default AuthPage;