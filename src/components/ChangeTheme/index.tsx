import React from 'react';

import styles from './ChangeTheme.module.css';

const ChangeTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  React.useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <div className={styles.change_theme_wrap}>
      {/* Иконка солнца */}
      <svg
        className={styles.sun_icon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 12H23M12 2V1M12 23V22M20 20L19 19M20 4L19 5M4 20L5 19M4 4L5 5M1 12H2M12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18Z"
          stroke="#5E5E5E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Иконка луны */}
      <svg
        className={styles.moon_icon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_220)">
          <path
            d="M19.4666 17.8133C17.7299 17.7937 16.0461 17.2127 14.6669 16.1571C13.2877 15.1015 12.287 13.628 11.8144 11.9566C11.3418 10.2853 11.4227 8.50598 12.0449 6.88442C12.6671 5.26286 13.7973 3.88616 15.2666 2.96C14.5242 2.76714 13.7604 2.66859 12.9933 2.66667C10.518 2.66667 8.14398 3.65 6.39364 5.40034C4.6433 7.15068 3.65997 9.52465 3.65997 12C3.65997 14.4754 4.6433 16.8493 6.39364 18.5997C8.14398 20.35 10.518 21.3333 12.9933 21.3333C14.3956 21.3321 15.7791 21.0107 17.0384 20.3938C18.2977 19.7769 19.3995 18.8806 20.26 17.7733C19.9964 17.7998 19.7316 17.8131 19.4666 17.8133Z"
            fill="#0C0C0C"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_220">
            <rect width="24" height="24" rx="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <input
        className={styles.input_checkbox}
        type="checkbox"
        checked={isDarkTheme}
        onChange={() => setIsDarkTheme(!isDarkTheme)}
      />

      {/* Круг для выделение выбранной темы */}
      <div className={styles.active_theme_circle}></div>
    </div>
  );
};

export default ChangeTheme;
