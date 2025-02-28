import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Ensar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff7YZH0MdbRtsKTAPa9T7nDODRl2klaSUhg&s",
    balance: -7,
  },
  {
    id: 933372,
    name: "Amer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff7YZH0MdbRtsKTAPa9T7nDODRl2klaSUhg&s",
    balance: 20,
  },
  {
    id: 499476,
    name: "Ali",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff7YZH0MdbRtsKTAPa9T7nDODRl2klaSUhg&s",
    balance: 0,
  },
];

function Button({ children, handleClick }) {
  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowFriend] = useState(false);

  const handleClick = () => {
    setShowFriend((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriends />}
        <Button handleClick={handleClick}>
          {!showAddFriend ? "Add friend" : "close"}
        </Button>
      </div>
      <FormSplitBill />
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
        {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      </div>

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriends() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID(),
    };

    console.log(newFriend)
  };

  return (
    <form className="form-add-friends" onSubmit={handleSubmit}>
      <label>Friend name🧑‍🤝‍🧑</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>Bill value</label>
      <input type="text" />

      <label>👯 Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 X's expenses</label>
      <input type="text" disabled />

      <label>🤑 Who's paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
