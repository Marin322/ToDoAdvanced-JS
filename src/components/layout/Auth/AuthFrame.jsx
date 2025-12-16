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
    login: "123",
    password: "123",
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
      alert("Неверный логин");
      return;
    }
    if (loginData.password !== correctLoginData.password) {
      alert("Неверный пароль");
      return;
    }
    
    setIsLoading(true);
    setShowSuccess(false);
    setIsExiting(true); // Начинаем скрывать форму

    try {
      // Ждем пока форма скроется (0.5 сек анимации)
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Теперь показываем "Идет авторизация" по центру
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setShowSuccess(true);
      setIsLoading(false);

      // Ждем пока покажется сообщение об успехе
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Форма авторизации с анимацией исчезновения */}
      <div 
        className={`${styles["AuthFrame-container"]} ${
          isExiting ? styles["exit-animation"] : ""
        }`}
        style={{
          display: isExiting ? 'none' : 'block'
        }}
      >
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
                disabled={isLoading}
              />
            );
          })}
        </div>
        <button onClick={enterAccount} disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Войти"}
        </button>
      </div>

      {/* Индикаторы по центру экрана */}
      {(isLoading || showSuccess) && (
        <div className={styles["center-overlay"]}>
          {isLoading && (
            <div className={styles["center-loading"]}>
              <div className={styles["spinner-large"]}></div>
              <p className={styles["center-text"]}>Идет авторизация...</p>
            </div>
          )}
          
          {showSuccess && (
            <div className={styles["center-success"]}>
              <div className={styles["success-icon"]}>✓</div>
              <p className={styles["center-text"]}>Добро пожаловать!</p>
              <p className={styles["center-subtext"]}>Перенаправляем на главную страницу...</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AuthFrame;