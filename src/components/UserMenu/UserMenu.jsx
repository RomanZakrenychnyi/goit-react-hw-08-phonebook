import { useDispatch, useSelector } from "react-redux"
import { selectUserName } from "redux/auth/authSelector";
import { logOutUser } from "redux/auth/authThunk"
import css from './UserMenu.module.css'
export const UserMenu = () => {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName);
  console.log(useSelector(state => state.auth.isLoggedIn));
    return (
        <>
<div className={css.container}>
  <p className={css.text}>{userName}</p>
          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(logOutUser())}
          >Logout</button>
</div>
        </>
    )
}





