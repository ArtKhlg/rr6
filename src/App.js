import React from "react";
import { EditUserPage, Main, UserPage, UsersListPage } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="users" element={<UsersListPage />}>
        <Route path=":userId">
          <Route path="edit" element={<EditUserPage />} />
          <Route path="profile" element={<UserPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
