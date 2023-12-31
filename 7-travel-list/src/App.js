import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false }
]

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return (
    <h1>🌴 Far Away 💼</h1>
  )
}

function Form() {

  // Creating a state for controlled element
  // First step is to create the state, second is to place the state in the place where it has to be declared, third is to 
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // This is to change the default behaviour of the HTML file , to stop flashing whenever the submit button is pressed
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description, quantity, package: false,
      id: Date.now()
    }
    console.log(newItem);

    // After the submission, the form should go to the initial state, it can be done like this
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/* Here the state is selected and updated each time whenever there is a change in the value in the form  */}
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          ((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          )
          )}
      </select>
      <input type='text' placeholder="Item..."
        value={description} onChange={(e) =>
          setDescription(e.target.value)
        } />
      <button>Add</button>
    </form>
  )
}

function PackingList() {
  return (
    <div className="list">
      <ul >
        {initialItems.map(item => <Item item={item} key={item.id} />)}
        {/* LIST */}
      </ul>
    </div>
  )
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description} </span>
      <button onClick={() => alert('Deleted')}>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 You have X items on your list, you already packed X ( X%)
      </em>
    </footer>
  )
}