import React, { useState } from "react";
import { BudgetDialog } from "./BudgetDialog";
import { ExpenceList } from "./ExpenceList";
import { ExpenceDialog } from "./ExpenceDialog";

const MainPage = () => {
  const [totalBudget, setTotalBudget] = useState(
    localStorage?.getItem("budget") || 0
  );
  const [expenceArry, setExpenceArray] = useState(
    JSON.parse(localStorage?.getItem("expence")) || []
  );
  const [data, setData] = useState({
    expence: "",
    amount: "",
    id: "",
  });
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [outBgt , setOutBgt] =useState(false)
  const handleDelete = (x) => {
    const newList = JSON.parse(localStorage?.getItem("expence"));

    const index = newList.findIndex((item) => item.id === x.id);

    newList.splice(index, 1);
    localStorage.setItem("expence", JSON.stringify(newList));
    setExpenceArray(newList);
  };

  const handleEdit = (x) => {
    setIsEdit(true);
    setOpen(true);
    setData(x);
    setId(x.id);
  };

  const spentBudget = expenceArry.reduce((accumulator, expence) => {
    return accumulator + parseInt(expence.amount);
  }, 0);

  const handleClickOpen = () => {
    setOpen(true);
    setIsEdit(false);
    setData({ expence: "", amount: "", id: "" });
  };

  const handleClose = () => {
    setOpen(false);
    setOutBgt(false)
  };
  const onAdd = () => {
    if(totalBudget - spentBudget > data.amount){
      const newExpenceArry = expenceArry.slice();
      newExpenceArry.push(data);
  
      localStorage.setItem("expence", JSON.stringify(newExpenceArry));
      setExpenceArray(newExpenceArry);
  
      setData({ expence: "", amount: "" });
      setOpen(false);
      setOutBgt(false)
    }
    else{
      setOutBgt(true)
    }
  };

  const onUpdate = () => {
    let getExpence = JSON.parse(localStorage?.getItem("expence"));

    let upDatedData = getExpence.map((x) => {
      return x.id === id
        ? { expence: data.expence, amount: data.amount, id: data.id }
        : x;
    });

    localStorage.setItem("expence", JSON.stringify(upDatedData));
    setExpenceArray(upDatedData);
    setOpen(false);
    setOutBgt(false)
  };
  const onSetBudget = (budget) => {
    localStorage.setItem("budget", budget);
    setActive(false);
    setTotalBudget(budget)
  };
  const handleClickActive = () => {
    setActive(true);
  };

  const handleClickClose = () => {
    setActive(false);
  };
  return (
    <div>
      <div className="d-flex">
        <h2 className="h2">Total Budget: $</h2>
        <h2 className="bgt">{totalBudget}</h2>
        <h2 className="h2">Spent Money: $</h2>
        <h2 className="bgt">{spentBudget} </h2>
        <h2 className="h2">Remain Money: $</h2>
        <h2 className="bgt">{totalBudget - spentBudget} </h2>
      </div>
      <div className="budget-div">
        <BudgetDialog
          active={active}
          handleClickClose={() => handleClickClose()}
          handleClickActive={() => handleClickActive()}
          onSetBudget={(budget) => onSetBudget(budget)}
        />
      </div>

      <div className="dialog">
        <ExpenceDialog
          handleClickOpen={(x) => handleClickOpen()}
          handleClose={(x) => handleClose()}
          onUpdate={onUpdate}
          onAdd={onAdd}
          data={data}
          setData={setData}
          isEdit={isEdit}
          open={open}
          outBgt={outBgt}
        />

        <ExpenceList
          expenceArry={expenceArry}
          setTotalBudget={setTotalBudget}
          handleDelete={(x) => handleDelete(x)}
          handleEdit={(x) => handleEdit(x)}
        />
      </div>
    </div>
  );
};

export default MainPage;
