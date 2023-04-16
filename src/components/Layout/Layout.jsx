
import { AuthForm } from "components/AuthForm/AuthForm"
import {Navigation} from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import css from './Layout.module.css'


export const Layout = () => {
const isLogged = useSelector(state => state.auth.isLoggedIn)
    return (<>
      <div className={css.container}>
        <Navigation />
            {isLogged ? <UserMenu /> : <AuthForm />}
            <Outlet/>
        </div>
    </>)
}