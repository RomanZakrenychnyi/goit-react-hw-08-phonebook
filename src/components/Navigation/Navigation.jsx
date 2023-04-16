import css from './Navigation.module.css'
import { Link } from "react-router-dom";


export const Navigation = () => {

  return (
    <>
      <div className={css.navContainer}>
      <Link className={css.navLink} to="/">
        Home
      </Link>
        <Link  className={css.navLink} to="/contacts">
          Phonebook
        </Link>
        </div>
      </>
   
  );
};
