import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button className={css.LoadMoreBtn} onClick={onClick} aria-hidden={false}>
    Load more
  </button>
);

export default LoadMoreBtn;
