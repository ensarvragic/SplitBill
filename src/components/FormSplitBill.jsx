import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [userExpense, setUserExpense] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");
  
    const friendExpense = bill ? bill - userExpense : "";
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!bill || !userExpense) return;
  
      onSplitBill(whoIsPaying === "user" ? userExpense : -userExpense);
    };
  
    return (
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
  
        <label>Bill value</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
  
        <label>👯 Your expense</label>
        <input
          type="number"
          value={userExpense}
          onChange={(e) =>
            setUserExpense(
              Number(e.target.value) > bill ? userExpense : Number(e.target.value)
            )
          }
        />
  
        <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
        <input type="number" value={friendExpense} disabled />
  
        <label>🤑 Who's paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
  
        <Button>Split Bill</Button>
      </form>
    );
  }
  