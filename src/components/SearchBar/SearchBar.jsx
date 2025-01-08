import css from "./SearchBar.module.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search query!", {
        duration: 2500,
        position: "top-right",
      });
      setQuery("");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <CiSearch className={css.SearchFormButtonIcon} />
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
