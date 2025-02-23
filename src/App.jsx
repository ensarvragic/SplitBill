import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Ensar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff7YZH0MdbRtsKTAPa9T7nDODRl2klaSUhg&s",
    balance: -7,
  },
  {
    id: 933372,
    name: "Amer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff7YZH0MdbRtsKTAPa9T7nDODRl2klaSUhg&s",
    balance: 20,
  },
  {
    id: 499476,
    name: "Ali",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff7YZH0MdbRtsKTAPa9T7nDODRl2klaSUhg&s",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
      </div>
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <div>
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          You and {friend.name} are even.
        </p>
      )}
      </div>

      <button className="button">Select</button>
    </li>
  );
}
