import { useState } from "react";
import styles from "../../../styles/components/layout/Auth/AuthFrame.module.css";
import LoginField from "../../common/inputFields/loginField";

const AuthFrame = ({ isAuth, setIsAuth }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const correctLoginData = {
    login: "testAccount@example.com",
    password: "123456",
  };

  const LoginFields = [
    {
      id: 1,
      type: "login",
      name: "login",
      placeholder: "Логин...",
    },
    {
      id: 2,
      type: "password",
      name: "password",
      placeholder: "Пароль...",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const enterAccount = async () => {
    if (loginData.login !== correctLoginData.login) {
      return;
    }
    if (loginData.password !== correctLoginData.password) {
      return;
    }
    setIsLoading(true);
    setShowSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setIsExiting(true)

      await new Promise((resolve) => setTimeout(resolve, 1500));
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    } catch (error) {}
  };

  return (
    <div className={`${styles["AuthFrame-container"]} ${isExiting ? styles["exit-animation"] : ""}`}>
      <p>Авторизация</p>
      <div className={styles["AuthFrame-fields-container"]}>
        {LoginFields.map((field) => {
          return (
            <LoginField
              key={field.id}
              placeholder={field.placeholder}
              type={field.type}
              onChange={handleChange}
              name={field.name}
              value={loginData[field.name]}
            />
          );
        })}
      </div>
      {isLoading && (
        <div className={styles["loading-container"]}>
          <div className={styles["spinner"]}></div>
          <p>Идет авторизация...</p>
        </div>
      )}

      {showSuccess && (
        <div className={styles["success-message"]}>
          <p> ✓ Успешная авторизация </p>
        </div>
      )}
      <button onClick={enterAccount}>Войти</button>
    </div>
  );
};

export default AuthFrame;
