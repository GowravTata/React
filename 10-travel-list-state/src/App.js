import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  // Creating a state for controlled element
  // First step is to create the state, second is to place the state in the place where it has to be declared, third is to
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // When the APP is opened for the first time, page has to be blank
  // const [items, setItems] = useState([]);

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item])
  // }
  function handleSubmit(e) {
    // This is to change the default behaviour of the HTML file , to stop flashing whenever the submit button is pressed
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      package: false,
      id: Date.now(),
    };
    // console.log(newItem);
    // Adding the items to the
    onAddItems(newItem);
    // After the submission, the form should go to the initial state, it can be done like this
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/* Here the state is selected and updated each time whenever there is a change in the value in the form  */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {/* Using Items state directly in the JSX */}
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
        {/* LIST */}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
      {/* <button onClick={() => alert("Deleted")}>❌</button> */}
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log(`Number of items  are ${numItems}`);
  console.log(`Percentage of items packed are ${percentage}`);
  console.log(`Number of items packed are ${numPacked}`);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything to go! Ready to go 🛫"
          : `💼 You have ${numItems} items on your list, you already packed
        ${numPacked} ${percentage}%`}
      </em>
    </footer>
  );
}
