import React from 'react';

import styles from './SearchInput.module.css';

const SearchInput = () => {
  const [search, setSearch] = React.useState<string>('');

  const searchCityWeather = (inputValue: string) => {
    setSearch(inputValue);
  };

  return (
    <div className={styles.search_wrap}>
      <svg
        className={styles.search_icon}
        width="15"
        height="15"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.62 25.8L39.42 36.58C39.7986 36.9555 40.0116 37.4667 40.0116 38C40.0116 38.5333 39.7986 39.0445 39.42 39.42C39.0445 39.7986 38.5333 40.0116 38 40.0116C37.4667 40.0116 36.9555 39.7986 36.58 39.42L25.8 28.62C23.0049 30.814 19.5533 32.0044 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32.0044 19.5533 30.814 23.0049 28.62 25.8ZM16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z"
        />
      </svg>

      <input
        className={styles.search_input}
        type="text"
        placeholder="Поиск"
        value={search}
        onChange={(e) => searchCityWeather(e.target.value)}
      />

      {search && (
        <svg
          className={styles.search_clear_icon}
          onClick={() => {
            setSearch('');
          }}
          width="13"
          height="13"
          viewBox="0 0 42 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M40.42 36.5801C40.7986 36.9556 41.0116 37.4668 41.0116 38C41.0116 38.5333 40.7986 39.0445 40.42 39.4201C40.0445 39.7987 39.5333 40.0116 39 40.0116C38.4667 40.0116 37.9555 39.7987 37.58 39.4201L21 22.8201L4.42 39.4201C4.04447 39.7987 3.53328 40.0116 3 40.0116C2.46672 40.0116 1.95553 39.7987 1.58 39.4201C1.20137 39.0445 0.988403 38.5333 0.988403 38C0.988403 37.4668 1.20137 36.9556 1.58 36.5801L18.18 20L1.58 3.42005C1.07268 2.91273 0.874553 2.1733 1.06024 1.48029C1.24593 0.787286 1.78724 0.245985 2.48024 0.0602942C3.17325 -0.125397 3.91268 0.0727332 4.42 0.58005L21 17.18L37.58 0.58005C38.3642 -0.204194 39.6358 -0.204194 40.42 0.58005C41.2042 1.36429 41.2042 2.63581 40.42 3.42005L23.82 20L40.42 36.5801Z" />
        </svg>
      )}
    </div>
  );
};

export default SearchInput;
