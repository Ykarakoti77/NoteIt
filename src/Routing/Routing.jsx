import { Home } from "../component/Home";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Note } from "../component/Note";
import { Dashboard } from "../component/Dashboard";
import { SignIn } from "../component/SignIn";
import { SignUp } from "../component/SignUp";
import { Client } from "../component/Client";
import { UserContext } from "../context/ContextProvider";

export const Routing = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/client" element={<Client />}>
        <Route path="Home" element={<Home />} />
        <Route path="Notes">
          <Route path=":id" element={<Note />} />
        </Route>
      </Route>
    </Routes>
  );
};
