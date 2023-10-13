import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


// Creating a function App, always use uppercase
function App() {
  return (
    // In JSX Class Name is used instead of class
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // The below is saved, just for the reference
  // const style = { color: 'red', fontSize: '48px', textTransform: "uppercase" }
  const style = {}
  // Styling the components is so easy in JSX,for that javascript 
  // objects are to be used, which in turn are to be written as described below
  return (
    <header className="header">
      {/* className is added to render the class from CSS File */}
      <h1 style={style}>Fast Reat Pizza Co. </h1>
    </header>
  )
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  // console.log(numPizzas);
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {
        // In the below we checked if there are pizzas , display onlt if the pizzas exist
        numPizzas > 0 ? (
          // The below is called a react fragment
          // For rendering a list we need to use a different format
          <React.Fragment>  {/*A key also can be added to it */}
            <p>
              Authentic Italian cuisine, 6 creative didhes to choose from. All from
              our stone oven, all organic, all declicious.
            </p>
            < ul className="pizzas">
              {pizzas.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
            </ul>
          </React.Fragment>
        ) :
          <p>
            We're Still working on our menu. Please come back later 😊
          </p>
      }
      {/* Render the below only if we have pizzas */}

      {/* Each component can be used multiple times */}
      {/* <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price={10} />  props were written like this */}

    </main >
  )
}

function Pizza({ pizzaObj }) {
  // Passing the data from parent to child, i.e., is from Menu to Pizza 
  // if (props.pizzaObj.soldOut) return null;
  // console.log(pizzaObj);
  return (
    // Used template string below to grey the area, wherever the pizza is sold out 
    // Used the conditional string to set the class name
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `} >
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>}
        {/* <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span> */}
      </div>
    </li >
  )
}

function Footer() {
  const hour = new Date().getHours();
  const [openHour, closeHour] = [12, 22];
  // const isOpen = hour >= openHour && hour <= closeHour ? 'open' : 'closed';
  const isOpen = hour >= openHour && hour <= closeHour;
  if (!isOpen) return (
    <p>
      We're happy to welcome you between {openHour}:00 and {closeHour}:00
    </p >)
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We're Currently {isOpen} */}
      {/* Conditional Rendering to display if the shop is opened based on the condition
      this is done by short circuiting */}
      {isOpen ?
        <Order closeHour={closeHour} openHour={openHour} /> :
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>}
    </footer >
  );
  // return React.createElement('footer', null, "We're currently open")
}

// Extracting JSX into a new component
// If we try to destructure the property that doesn't exist ,it will not receive anything
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  )
}


// Creating a new component
/*
Function should start with Capital Letter
Function should always return some markup , in the form of JSX or return nothing
*/


// ReactDOM consists of create root method
// Rendering the DOM Element in v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>
);

// React before 18
// React.render(<App />,document.getElementById("root"))