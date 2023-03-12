import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { UserContext } from "../context/ContextProvider";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const CreateNoteDialog = () => {
  const [open, setOpen] = React.useState(false);
  const {
    heading,
    setHeading,
    notesCollectionRef,
    getNotesList
  } = React.useContext(UserContext);
  const { currentUser } = useContext(AuthContext)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate()
  const createNote = async () => {
    handleClose();
    try {
      const docRef = await addDoc(notesCollectionRef, { id: "", heading: heading, para: "", user: currentUser.uid });
      getNotesList()
      setHeading("")
      navigate(`/client/Notes/${docRef.id}`)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        New Note
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createNote}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
