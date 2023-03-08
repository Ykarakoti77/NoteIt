import { collection, getDocs } from "@firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase-config";

export const UserContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [initialNotes, setInitialNotes] = useState([]);
  const notesCollectionRef = collection(db, "Notes");

  useEffect(() => {
    const getNotesList = async () => {
      try {
        const data = await getDocs(notesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setInitialNotes(filteredData);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getNotesList();
  }, [notesCollectionRef]);

  const [heading, setHeading] = useState("");
  const value = {
    initialNotes,
    setInitialNotes,
    heading,
    setHeading,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
