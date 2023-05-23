import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
export const ExpenceDialog = ({
  handleClickOpen,
  handleClose,
  setData,
  data,
  onAdd,
  onUpdate,
  isEdit,
  open,
  outBgt
}) => {
  return (
    <div>
      <Button variant="outlined" onClick={() => handleClickOpen()}>
        Open Expence Dialog Form
      </Button>
      <Dialog open={open} onClose={() => handleClose()}>
        <h3 className="h3">Expence Form</h3>
        <DialogContent className="main">
          <input
            className="dialog-input"
            type="text"
            value={data.expence}
            placeholder="Expence Name"
            onChange={(e) => setData({ expence: e.target.value })}
          ></input>
          <input
            className="dialog-input"
            type="number"
            value={data.amount}
            placeholder="Ammount"
            onChange={(e) =>
              setData({
                ...data,
                amount: e.target.value,
                id: Math.floor(Math.random() * 100),
              })
            }
          ></input>
         {outBgt && <h3 className="bgt-h4">Warning! Out Of Budget</h3>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>close</Button>
          {isEdit ? (
            <Button onClick={() => onUpdate()}>Update</Button>
          ) : (
            <Button onClick={() => onAdd()}>Add</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};
