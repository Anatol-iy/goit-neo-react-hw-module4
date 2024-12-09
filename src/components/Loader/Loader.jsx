import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => (
  <div className={css.loader}>
    <TailSpin height="50" width="50" color="#000" />
  </div>
);

export default Loader;
