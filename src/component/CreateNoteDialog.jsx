import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { UserContext } from "../context/ContextProvider";

export const CreateNoteDialog = () => {
  const [open, setOpen] = React.useState(false);
  const { heading, setHeading, initialNotes, setInitialNotes } =
    React.useContext(UserContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createNote = () => {
    handleClose();
    setInitialNotes((initialNotes) => [
      ...initialNotes,
      { id: heading, heading: heading, para: "" },
    ]);
    console.log(initialNotes);
    setHeading("")
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
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
