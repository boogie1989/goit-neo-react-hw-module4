import css from "./Loader.module.css";
import { Oval } from "react-loader-spinner";

const Loader = () => (
  <div className={css.Loader}>
    <Oval
      height={40}
      width={40}
      color="#00BFFF"
      ariaLabel="loading"
      strokeWidth="5"
    />
  </div>
);

export default Loader;
