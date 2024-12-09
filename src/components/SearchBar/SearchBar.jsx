import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { TbZoom } from "react-icons/tb";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Перевірка на порожнє поле
    if (query.trim() === "") {
      toast.error("Please enter a keyword to search images!"); // Показуємо сповіщення
      return; // Якщо поле порожнє, нічого не відправляємо
    }

    // Якщо все добре, передаємо запит у батьківський компонент
    onSubmit(query);
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchButton}>
          <TbZoom size={24} />
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          className={css.searchInput}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};

export default SearchBar;
