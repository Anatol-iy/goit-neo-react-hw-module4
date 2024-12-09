import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <div className={css.buttonContainer}>
    {" "}
    {/* Обертка для кнопки */}
    <button className={css.loadMore} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreBtn;
