import { Link } from "react-router-dom";
import css from './AuthForm.module.css'
export const AuthForm=()=> {
  return (
    <nav className={css.container}>
      <Link
        className={css.link}
        to="/register" >
        Sign up
      </Link>
      <Link
        className={css.link}
        to="/login" >
        Log in
      </Link>
    </nav>
  );
}