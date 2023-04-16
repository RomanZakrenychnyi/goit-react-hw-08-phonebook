import { ContactsPage } from 'Pages/contactsPage';
import { HomePage } from 'Pages/homePage';
import { RegistrationPage } from 'Pages/registrationPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authThunk';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { LogInForm } from './SignInForm/LogInForm';






export const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch])

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
              <PublicRoute>
                <LogInForm />
              </PublicRoute>
            }
        />
        <Route
          path="/register"
          element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
           <Route
            path="/contacts"
             element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
      
  </>)
};






