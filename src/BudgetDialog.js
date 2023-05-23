import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export const BudgetDialog = ({
  onSetBudget,
  handleClickActive,
  handleClickClose,
  active,
}) => {
  const [budget, setBudget] = useState();

  return (
    <div className="dialog">
      <Button variant="outlined" onClick={() => handleClickActive()}>
        Open Set Budget Form
      </Button>
      <Dialog open={active} onClose={() => handleClickClose()}>
        <h3 className="h3">Budget Form</h3>
        <DialogContent className="main">
          <input
            className="budget-input"
            type="number"
            placeholder="Total Budget"
            onChange={(e) => setBudget(e.target.value)}
          ></input>
          <button className="expence-btn" onClick={() => onSetBudget(budget)}>
            Set Budget
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
