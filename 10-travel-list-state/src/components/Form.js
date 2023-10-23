import { useState } from "react";
export default function Form({ onAddItems }) {
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
