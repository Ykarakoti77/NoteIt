import {Home} from '../component/Home'
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Note } from "../component/Note";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Notes" element={<Note />}>
        <Route path=":id" element={<Note />} />
      </Route>
    </Routes>
  );
};
