import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authThunk';
import css from './logInForm.module.css'


export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form
        className={css.form}
        onSubmit={handleSubmit} autoComplete="off">
          <label  className={css.label}>Email</label>
            <input className={css.input} type="email" name="email" />
          <label className={css.label}>Password</label>
            <input className={css.input} type="password" name="password" />
          <button className={css.btn} type="submit">Log In</button>
        </form>
  </>
  );
};