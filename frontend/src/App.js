import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import store from './store/store'
import  { Provider } from 'react-redux';
import TodoPage from "./pages/TodoPage";
import UserPrivateRoute from "./Routes/UserPrivateRoutes";
import UserPublicRoute from "./Routes/UserPublicRoutes";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<UserPublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<UserPrivateRoute />}>
              <Route path="/" element={<TodoPage />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
