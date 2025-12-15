import styles from '../../../styles/components/common/inputFields/loginField.module.css';

const LoginField = ({placeholder, onChange, icon, type, value, name}) => {
    return (
        <div className={styles["loginField-container"]}>
            <div></div>
            <input onChange={onChange} placeholder={placeholder} type={type} name={name} value={value}/>
        </div>
    );
};

export default LoginField;