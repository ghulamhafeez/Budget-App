import React from "react";

export const ExpenceList = ({ expenceArry, handleDelete, handleEdit }) => {
  return (
    <div>
      <h2 className="h2-list">Expence List:</h2>
      {expenceArry.map((x) => {
        return (
          <li className="li" key={x.id}>
            {x.expence}:   ${x.amount}
          
           {''} <button className="list-btn" onClick={() => handleEdit(x)}>
              Edit
            </button>
            <button className="list-btn" onClick={() => handleDelete(x)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};
