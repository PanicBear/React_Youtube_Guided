import React, { memo, useRef } from 'react';
import styles from './search_header.module.css'

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  }
  const onClick = (e) => {
    handleSearch();
  }
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }
  return <header className={styles.header}>
    <div className={styles.logo}>
      <img className={styles.img} src="./images/logo.png" alt="logo" />
      <h1 className={styles.title}>Youtube</h1>
    </div>
    <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
    <button className={styles.button} type="submit">
      <img className={styles.buttonImg} src="/images/search.png" alt="search" onClick={onClick} />
    </button>
  </header>
});
export default SearchHeader;