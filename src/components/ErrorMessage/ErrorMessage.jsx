import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className={css.ErrorMessage}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
