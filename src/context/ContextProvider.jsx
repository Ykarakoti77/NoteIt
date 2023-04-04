import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase-config";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [initialNotes, setInitialNotes] = useState([]);
  const notesCollectionRef = collection(db, "Notes");
  const { currentUser } = useContext(AuthContext);
  const [name, setName] = useState();
  const [filteredInitialNotes, setFilteredInitialNotes] = useState([]);

  const getNotesList = async () => {
    console.log();
    try {
      const data = await getDocs(notesCollectionRef);
      const allData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const filteredData = allData.filter((userData) => {
        if (
          userData.hasOwnProperty("user") &&
          userData.user === currentUser.uid
        )
          return true;
        return false;
      });
      filteredData.sort((a, b) => {
        let fa = a.heading.toLowerCase(),
          fb = b.heading.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      setInitialNotes(filteredData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (currentUser != null) {
      console.log("ok");
      getNotesList();
    }
  }, [currentUser]);

  const [heading, setHeading] = useState("");
  const value = {
    mode,
    setMode,
    initialNotes,
    setInitialNotes,
    heading,
    setHeading,
    notesCollectionRef,
    getNotesList,
    filteredInitialNotes,
    setFilteredInitialNotes,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
